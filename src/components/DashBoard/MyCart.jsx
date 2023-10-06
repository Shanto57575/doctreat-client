import { RxCross2 } from "react-icons/rx";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
	const [cart, refetch] = useCart();
	const [inputQuantity, setInputQuantity] = useState({});

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

	return (
		<>
			<div className="w-full h-full text-white font-serif">
				<h1 className="text-3xl bg-gray-400 p-9">
					Total price : ${totalPrice.toFixed(2)}
				</h1>
				<div className="w-full bg-gray-600">
					<table className="table text-center">
						<thead>
							<tr className="text-white text-xl">
								<th>#</th>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((product, index) => (
								<tr key={product._id}>
									<td>{index + 1}</td>
									<td>
										<div className="flex items-center space-x-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img src={product.img} alt={product.name} />
												</div>
											</div>
											<div>
												<div className="font-bold">{product.name}</div>
												<div className="text-sm opacity-50">
													{product.category}
												</div>
											</div>
										</div>
									</td>
									<td>${product.price}</td>
									<td>
										<input
											onChange={(event) =>
												handleInputQuantity(product._id, event)
											}
											type="text"
											placeholder="quantity"
											defaultValue={inputQuantity[product._id] || 1}
											className="input input-bordered input-info w-16 text-black"
										/>
									</td>
									<td>
										<button>
											{(
												product.price * (inputQuantity[product._id] || 1)
											).toFixed(2)}
										</button>
									</td>
									<td>
										<button
											className="text-3xl text-white bg-red-500 hover:bg-red-600 btn btn-circle"
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
