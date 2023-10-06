import { RxCross2 } from "react-icons/rx";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyCart = () => {
	const [cart, refetch] = useCart();
	const [inputQuantity, setInputQuantity] = useState({});
	const { user, loader } = useContext(AuthContext);

	const handleInputQuantity = (id, event) => {
		const newInputQuantity = { ...inputQuantity, [id]: event.target.value };
		setInputQuantity(newInputQuantity);
	};

	let totalPrice = 0;

	for (let key in cart) {
		let product = cart[key];
		totalPrice += product.price * (inputQuantity[product._id] || 1);
	}

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/carts/${id}`, {
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
		return (
			<div className="text-7xl text-center text-cyan-500">
				L
				<span className="inline-block bg-cyan-500 w-12 h-12 border-8 border-dashed text-5xl rounded-full animate-spin"></span>
				ading...
			</div>
		);
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
				<div className="bg-sky-600 flex items-center justify-between shadow-md shadow-gray-800 p-5 mb-3">
					<h1 className="text-2xl shadow-lg p-3 shadow-black">
						Total Product : {cart.length || 0}
					</h1>
					<h1 className="text-2xl shadow-lg p-3 shadow-black">
						Total Price : ${totalPrice.toFixed(2)}
					</h1>

					<Link to="/Payment">
						<button
							type="button"
							className="shadow-black text-white bg-gradient-to-r from-blue-300 via-sky-400 to-blue-500 border-b-4 border-white hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
						>
							Pay
						</button>
					</Link>
				</div>
				<div className="overflow-x-auto bg-gradient-to-r from-sky-600 via-sky-700 to-sky-900 shadow-2xl shadow-gray-800">
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
											className="text-3xl ml-4 text-white bg-red-500 hover:bg-red-600 btn btn-circle"
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
