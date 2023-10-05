import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";

const ProductTab = ({ item }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [, refetch] = useCart();

	const handleAddToCart = (product) => {
		product.email = user?.email;
		console.log(product);
		if (user) {
			fetch("http://localhost:5000/carts", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(product),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertedId) {
						refetch();
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Product added to cart",
							showConfirmButton: false,
							timer: 1500,
						});
						refetch();
					}
				});
		} else {
			Swal.fire({
				title: "Please Login To Add to cart",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
				}
			});
		}
	};

	return (
		<div className="w-full my-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
				{item?.map((product) => (
					<div
						key={product._id}
						className="card lg:card-side bg-base-100 shadow-xl rounded"
					>
						<figure>
							<img
								src={product.img}
								className="h-56 w-full lg:w-72 object-fill"
								alt="Album"
							/>
						</figure>
						<div className="card-body">
							<h2 className="font-semibold">{product.name}</h2>
							<p>Price: ${product.price}</p>
							<div className="card-actions">
								<button
									onClick={() => handleAddToCart(product)}
									type="button"
									className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductTab;
