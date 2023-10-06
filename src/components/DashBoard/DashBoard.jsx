import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";

const DashBoard = () => {
	const [cart] = useCart();
	console.log(cart);
	return (
		<>
			<Helmet>
				<title>Doctreat | MyCart</title>
			</Helmet>

			<div className="py-28 px-10">
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>Image</th>
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
										<button className="btn btn-ghost btn-xs">
											{index + 7}
										</button>
									</td>
									<td>
										<button className="btn btn-ghost btn-xs">details</button>
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

export default DashBoard;
