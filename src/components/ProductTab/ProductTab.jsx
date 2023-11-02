import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import Loader from "../Loader/Loader";

const ProductTab = ({ item, loading }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [isAdmin] = useAdmin();
	const [, refetch] = useCart();

	const handleAddToCart = (product) => {
		product.email = user?.email;
		console.log(product);

		if (isAdmin) {
			return;
		} else if (user) {
			fetch("https://doctreat-server.vercel.app/carts", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(product),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						Swal.fire({
							icon: "warning",
							title: "Product already added to cart",
							showConfirmButton: false,
							timer: 1500,
							customClass: {
								popup: "bg-white rounded-lg shadow-lg",
								title: "text-blue-400 font-bold font-serif text-xl",
								icon: "text-blue-400",
							},
						});
					} else {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Product added to cart",
							showConfirmButton: false,
							timer: 2500,
						});
					}
				})
				.catch((error) => {
					console.error("Error adding product to cart:", error);
				});
		} else {
			Swal.fire({
				title: "Please Sign in First",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Sign in",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
				}
			});
		}
	};

	return (
		<div className="w-full mx-auto my-10">
			{loading ? (
				<div className="text-center">
					<Loader />
				</div>
			) : (
				<div className="w-fit mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-2 md:gap-10 md:mx-5">
						{item?.map((product) => (
							<div
								key={product._id}
								className="card w-full md:w-72 h-80 shadow-2xl shadow-black rounded-none rounded-tr-3xl rounded-es-3xl"
							>
								<figure>
									<img
										src={product.img}
										className="w-full h-80"
										alt={product.name}
										loading="lazy"
									/>
								</figure>
								<p className="absolute right-3 top-3 bg-black text-white px-2 py-1.5">
									$ {product.price}
								</p>
								<div
									className="px-3 pt-3 space-y-5 h-full text-white"
									style={{
										backgroundImage:
											"url(https://t3.ftcdn.net/jpg/01/33/62/12/240_F_133621255_DTSQSjnXdHqa10ArqZsSoXNQWKCR6Hm9.jpg)",
									}}
								>
									<h2 className="text-base md:text-xl">{product.name}</h2>
									<div>
										<div className="badge badge-outline">
											{product.category}
										</div>
									</div>
								</div>
								<button
									onClick={() => handleAddToCart(product)}
									className="flex items-center justify-center gap-x-2 py-2 bg-sky-900 hover:bg-sky-700 duration-300 text-white rounded-es-3xl"
								>
									Add to Cart <FaCartPlus size={20} />
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductTab;
