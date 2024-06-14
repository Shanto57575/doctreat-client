import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import useCart from "../../../hooks/useCart";
import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const MyCart = () => {
	const [cart, refetch] = useCart();
	const [inputQuantity, setInputQuantity] = useState({});
	const { user, loader } = useContext(AuthContext);

	let cartQuantity = JSON.parse(localStorage.getItem("cartQuantity")) || {};
	const totalQuantity = Object.values(cartQuantity).reduce(
		(total, quantity) => total + parseInt(quantity),
		0
	);

	useEffect(() => {
		const storeQuantity =
			JSON.parse(localStorage.getItem("cartQuantity")) || {};
		setInputQuantity(storeQuantity);
	}, [setInputQuantity]);

	const handleInputQuantity = (id, action) => {
		const currentQuantity = inputQuantity[id] || 1;
		let newQuantity;

		if (action === "+" && currentQuantity < 20) {
			newQuantity = currentQuantity + 1;
		} else if (action === "-" && currentQuantity > 1) {
			newQuantity = currentQuantity - 1;
		} else {
			return;
		}

		const newInputQuantity = {
			...inputQuantity,
			[id]: newQuantity,
		};

		setInputQuantity(newInputQuantity);
		localStorage.setItem("cartQuantity", JSON.stringify(newInputQuantity));
	};

	let totalPrice = 0;

	for (let key in cart) {
		let product = cart[key];
		totalPrice +=
			product.price *
			(inputQuantity[product._id] ? inputQuantity[product._id] : 1);
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
			<div className="lg:flex text-white font-serif w-full h-full">
				<div className="overflow-x-auto lg:w-[70%] bg-blue-300 text-black bg-gradient-to-r shadow-2xl shadow-gray-800">
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
									<td className="flex items-center text-center px-2">
										<button
											className="text-3xl px-2"
											onClick={() => handleInputQuantity(product._id, "+")}
										>
											<AiOutlinePlus />
										</button>
										<span className="text-3xl px-2">
											{inputQuantity[product._id] || 1}
										</span>
										<button
											className="text-3xl px-2"
											onClick={() => handleInputQuantity(product._id, "-")}
										>
											<AiOutlineMinus />
										</button>
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
											className="text-3xl ml-4 text-red-500 hover:bg-red-500 hover:text-white btn btn-circle border-none"
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
				<div className="lg:w-[29%] border-x-8 border-blue-200 bg-blue-300 text-black bg-gradient-to-r shadow-2xl shadow-gray-800 p-10 mx-auto">
					<h1 className="text-4xl ">Cart Total</h1>
					{/* <button className="flex items-center gap-x-1 text-sm bg-blue-400 hover:bg-red-500 duration-300 font-serif text-white rounded px-4 py-2.5 font-semibold">
						<BsCartXFill size={25} /> <span>Clear Cart</span>
					</button> */}
					<p className="border-b border-blue-100 my-2"></p>
					<h1 className="text-2xl">Total Product : {totalQuantity || 0}</h1>
					<p className="border-b border-blue-100 my-2"></p>
					<h1 className="text-2xl">Subtotal : ${totalPrice.toFixed(2)}</h1>
					<p className="border-b border-blue-100 my-2"></p>
					<h1 className="text-2xl">Shipping : ${120}</h1>
					<p className="border-b border-blue-100 my-2"></p>
					<h1 className="text-2xl">Vat : ${25}</h1>
					<p className="border-b border-blue-100 my-2"></p>
					<h1 className="text-2xl">
						Total Price : ${(totalPrice + 120 + 25).toFixed(2)}
					</h1>
					<p className="border-b border-blue-100 my-2"></p>
					<Link to="/dashboard/payment">
						<img
							alt="Credit Card Logos"
							title="Credit Card Logos"
							src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-5.png"
							width="518"
							height="59"
							border="0"
						/>
					</Link>
					<p className="border-b border-blue-100 my-2"></p>

					<Link to="/dashboard/payment">
						<button
							type="button"
							className="w-full font-bold shadow-black text-white bg-gradient-to-r from-blue-300 via-sky-400 to-blue-500 border-b-4 border-white hover:bg-gradient-to-br rounded-lg text-sm px-7 py-2.5 text-center mr-2 mb-2"
						>
							Proceed to checkout
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default MyCart;
