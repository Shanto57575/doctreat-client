import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Lottie from "lottie-react";
import payment from "../../../../assets/payment.json";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHED_KEY);
const Payment = () => {
	const [cart, refetch] = useCart();
	const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

	// TODO: Price problem when changing route
	console.log("paymentPage===>", totalPrice);

	return (
		<div className="bg-blue-400 lg:rounded-tr-full lg:rounded-es-full">
			<h1 className="text-center mt-10 text-white text-2xl mb-4 md:text-4xl font-bold font-serif italic">
				---- Pay Here ----
			</h1>
			<div className="lg:flex items-center justify-around mx-auto">
				<div className="lg:w-1/2 mx-10">
					<Elements stripe={stripePromise}>
						<CheckoutForm cart={cart} refetch={refetch} price={totalPrice} />
					</Elements>
				</div>
				<div className="lg:w-1/2 mx-10">
					<Lottie animationData={payment} loop={true} />
				</div>
			</div>
		</div>
	);
};

export default Payment;
