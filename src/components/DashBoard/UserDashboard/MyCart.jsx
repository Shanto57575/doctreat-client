import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import useCart from "../../../hooks/useCart";
import { useEffect } from "react";

const MyCart = () => {
	const [cart, refetch] = useCart();
	const [inputQuantity, setInputQuantity] = useState({});
	const { user, loader } = useContext(AuthContext);

	useEffect(() => {
		const storeQuantity =
			JSON.parse(localStorage.getItem("cartQuantity")) || {};
		setInputQuantity(storeQuantity);
	}, [setInputQuantity]);

	const handleInputQuantity = (id, event) => {
		const newInputQuantity = { ...inputQuantity, [id]: event.target.value };
		setInputQuantity(newInputQuantity);
		localStorage.setItem("cartQuantity", JSON.stringify(newInputQuantity));
	};

	let totalPrice = 0;

	for (let key in cart) {
		let product = cart[key];
		totalPrice += product.price * (inputQuantity[product._id] || 1);
	}

	localStorage.setItem("TotalPrice", JSON.stringify(totalPrice.toFixed(2)));

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, remove it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://doctreat-server.vercel.app/carts/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire("removed!", "Product removed from the cart", "success");
						}
					});
			}
		});
	};

	if (loader) {
		return <Loader />;
	}

	if (!user) {
		return (
			<h1 className="text-cyan-500 text-5xl text-center h-screen mt-56 font-serif font-extrabold">
				Please login to see your Product
			</h1>
		);
	}

	if (cart?.length === 0) {
		return (
			<h1 className="text-cyan-500 text-5xl text-center h-screen mt-56 font-serif font-extrabold">
				No Product Added!
			</h1>
		);
	}

	return (
		<>
			<div className="text-white font-serif w-full h-full">
				<div className="bg-blue-400 flex items-center justify-between shadow-md shadow-gray-800 p-5 mb-3">
					<h1 className="text-2xl shadow-md p-3 shadow-black">
						Total Product : {cart.length || 0}
					</h1>
					<h1 className="text-2xl shadow-md p-3 shadow-black">
						Total Price : ${totalPrice.toFixed(2)}
					</h1>

					<Link to="/dashboard/payment">
						<button
							type="button"
							className="shadow-black text-white bg-gradient-to-r from-blue-300 via-sky-400 to-blue-500 border-b-4 border-white hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
						>
							Pay
						</button>
					</Link>
				</div>
				<div className="overflow-x-auto bg-blue-300 text-black bg-gradient-to-r shadow-2xl shadow-gray-800">
					<table className="table">
						<thead>
							<tr className="text-white text-xl">
								<th>#</th>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((product, index) => (
								<tr key={product._id}>
									<td>{index + 1}</td>
									<td>
										<div className="flex items-center space-x-3">
											<div className="avatar">
												<div className="mask mask-squircle w-14 h-14 text-center">
													<img src={product.img} alt={product.name} />
												</div>
											</div>
											<div>
												<div className="font-bold">{product.name}</div>
												<div className="text-sm opacity-70">
													{product.category}
												</div>
											</div>
										</div>
									</td>
									<td className="text-lg">${product.price}</td>
									<td>
										<input
											onChange={(event) =>
												handleInputQuantity(product._id, event)
											}
											type="number"
											min={1}
											max={20}
											placeholder="quantity"
											defaultValue={inputQuantity[product._id] || 1}
											className="input input-bordered input-info w-24 text-black"
										/>
									</td>
									<td>
										<p className="text-lg">
											$
											{(
												product.price * (inputQuantity[product._id] || 1)
											).toFixed(2)}
										</p>
									</td>
									<td>
										<button
											className="text-3xl ml-4 text-red-500 hover:bg-red-500 hover:text-white btn btn-circle"
											onClick={() => handleDelete(product._id)}
										>
											<RxCross2 size={25} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default MyCart;
