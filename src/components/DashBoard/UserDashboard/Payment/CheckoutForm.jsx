import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { BiSolidError } from "react-icons/bi";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const CheckoutForm = () => {
	const [cart, refetch] = useCart();
	const { user } = useContext(AuthContext);
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState(" ");
	const [, setTransactionId] = useState(" ");
	const [error, setError] = useState(" ");
	const [processing, setProcessing] = useState(false);
	const [axiosSecure] = useAxiosSecure();

	const price = JSON.parse(localStorage.getItem("TotalPrice"));

	const cartItemExists = localStorage.getItem("cartQuantity");
	let cartQuantity = cartItemExists ? JSON.parse(cartItemExists) : {};

	const totalQuantity = Object.values(cartQuantity).reduce(
		(total, quantity) => total + parseInt(quantity),
		0
	);

	useEffect(() => {
		if (price > 0) {
			axiosSecure.post("/create-payment-intent", { price }).then((res) => {
				setClientSecret(res.data.clientSecret);
			});
		}
	}, [price, axiosSecure]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			setError(error.message);
		}

		//payment processing starts here
		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: user?.displayName || "anonymous",
						email: user?.email || "unknown",
					},
				},
			});

		if (confirmError) {
			setError(confirmError);
		}

		//payment processing ends here
		setProcessing(false);
		if (paymentIntent.status === "succeeded") {
			setError(" ");
			setTransactionId(paymentIntent.id);
			const payment = {
				email: user?.email,
				transactionId: paymentIntent.id,
				date: new Date().toLocaleString(),
				price: parseFloat(price),
				quantity: totalQuantity,
				cartQuantity,
				cartItems: cart.map((item) => item._id),
				itemsCategory: cart.map((item) => item.category),
				itemsName: cart.map((item) => item.name),
			};

			axiosSecure.post("/payments", payment).then((res) => {
				refetch();
				localStorage.removeItem("cartQuantity");
				localStorage.removeItem("TotalPrice");
				if (res.data.insertResult.insertedId) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Payment Successful!",
						showConfirmButton: false,
						timer: 1500,
					});
					card.clear();
				}
			});
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					className="border rounded shadow-md px-5 py-3.5"
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#000",
								"::placeholder": {
									color: "white",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					className="btn btn-sm rounded bg-blue-500 hover:bg-blue-700 text-white my-3"
					type="submit"
					disabled={!stripe || !clientSecret || processing || cart.length === 0}
				>
					Pay
				</button>
			</form>
			{error && (
				<p className="flex items-center gap-x-1 text-red-500 font-serif font-bold">
					{<BiSolidError size={20} /> && error.message}
				</p>
			)}
		</>
	);
};

export default CheckoutForm;
