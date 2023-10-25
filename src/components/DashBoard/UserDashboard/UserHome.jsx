// import { useContext } from "react";
// import { AuthContext } from "./../../../AuthProvider/AuthProvider";
// import {
// 	BarChart,
// 	Bar,
// 	XAxis,
// 	YAxis,
// 	Tooltip,
// 	Legend,
// 	ResponsiveContainer,
// 	PieChart,
// 	Pie,
// 	Cell,
// } from "recharts";
// import useCart from "../../../hooks/useCart";
// import usePayment from "../../../hooks/usePayment";
// import { useState } from "react";

// // import { BiEdit } from "react-icons/bi";
// // import useAdmin from "./../../../hooks/useAdmin";
// // import { FaUserAlt } from "react-icons/fa";
// // import { MdAdminPanelSettings } from "react-icons/md";
// // import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const UserHome = () => {
// 	const { user } = useContext(AuthContext);
// 	const [cart] = useCart();
// 	console.log(user, cart);
// 	const [paymentHistory] = usePayment();
// 	console.log(paymentHistory);
// 	const [data, setData] = useState([]);

// 	const totalPrice = paymentHistory.reduce(
// 		(sum, product) => sum + product.price,
// 		0
// 	);
// 	console.log(totalPrice);
// 	const totalProduct = paymentHistory.reduce(
// 		(sum, product) => sum + product.quantity,
// 		0
// 	);
// 	console.log(totalProduct);
// 	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// 	// const [axiosSecure] = useAxiosSecure();

// 	// const [isAdmin] = useAdmin();
// 	// const handleSubmit = (event) => {
// 	// 	event.preventDefault();
// 	// 	const form = event.target;
// 	// 	const name = form.name.value;
// 	// 	const email = form.email.value;
// 	// 	const contact = form.contact.value;
// 	// 	const data = { name, email, contact };
// 	// 	console.log(data);
// 	// 	axiosSecure.put("/users", data).then((res) => {
// 	// 		console.log(res.data);
// 	// 	});
// 	// };

// 	const RADIAN = Math.PI / 180;
// 	const renderCustomizedLabel = ({
// 		cx,
// 		cy,
// 		midAngle,
// 		innerRadius,
// 		outerRadius,
// 		percent,
// 	}) => {
// 		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// 		const x = cx + radius * Math.cos(-midAngle * RADIAN);
// 		const y = cy + radius * Math.sin(-midAngle * RADIAN);

// 		return (
// 			<text
// 				x={x}
// 				y={y}
// 				fill="white"
// 				textAnchor={x > cx ? "start" : "end"}
// 				dominantBaseline="central"
// 			>
// 				{`${(percent * 100).toFixed(0)}%`}
// 			</text>
// 		);
// 	};

// 	return (
// 		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
// 			<ResponsiveContainer
// 				className="bg-blue-400 glass rounded-2xl"
// 				width="100%"
// 				height={400}
// 			>
// 				<BarChart
// 					data={cart}
// 					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
// 				>
// 					<XAxis dataKey="name" />
// 					<YAxis />
// 					<Tooltip />
// 					<Legend />
// 					<Bar dataKey="price" fill="" />
// 				</BarChart>
// 			</ResponsiveContainer>
// 			<ResponsiveContainer width="100%" height="100%">
// 				<PieChart width={400} height={400}>
// 					<Pie
// 						data={data}
// 						cx="50%"
// 						cy="50%"
// 						labelLine={false}
// 						label={renderCustomizedLabel}
// 						outerRadius={80}
// 						fill="#8884d8"
// 						dataKey="value"
// 					>
// 						{data.map((entry, index) => (
// 							<Cell
// 								key={`cell-${index}`}
// 								fill={COLORS[index % COLORS.length]}
// 							/>
// 						))}
// 					</Pie>
// 				</PieChart>
// 			</ResponsiveContainer>
// 			{/* <div className="card w-80 rounded glass bg-blue-400">
// 				<figure>
// 					<img
// 						loading="lazy"
// 						src={user.photoURL}
// 						alt="user"
// 						className="relative rounded-full mt-5 ring-4 ring-white"
// 					/>
// 					<p className="bg-white absolute top-2 right-1 px-2 py-0.5 font-semibold font-serif">
// 						{isAdmin ? (
// 							<MdAdminPanelSettings
// 								className="text-blue-500"
// 								size={25}
// 								title="Admin"
// 							/>
// 						) : (
// 							<FaUserAlt className="text-blue-500" title="user" size={25} />
// 						)}
// 					</p>
// 				</figure>
// 				<div className="card-body">
// 					<h2 className="text-xl text-white font-bold font-serif text-center">
// 						{user?.displayName}
// 					</h2>
// 					<h2 className="text-xl text-white font-bold font-serif text-center">
// 						{user?.email}
// 					</h2>
// 					<div className="card-actions">
// 						<button
// 							className="btn bg-cyan-500 hover:bg-cyan-600 border-0"
// 							onClick={() => document.getElementById("my_modal_5").showModal()}
// 						>
// 							<BiEdit className="text-white" size={25} />
// 						</button>
// 						<dialog
// 							id="my_modal_5"
// 							className="modal modal-bottom sm:modal-middle"
// 						>
// 							<div className="modal-box">
// 								<form onSubmit={handleSubmit}>
// 									<div className="-mx-3 flex">
// 										<div className="w-full px-3 sm:w-1/2">
// 											<div className="mb-5">
// 												<label
// 													htmlFor="name"
// 													className="mb-3 block text-base font-medium text-cyan-600"
// 												>
// 													Name
// 												</label>
// 												<input
// 													defaultValue={user.displayName}
// 													required
// 													type="text"
// 													name="name"
// 													id="name"
// 													placeholder="Name"
// 													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
// 												/>
// 											</div>
// 										</div>
// 										<div className="w-full px-3 sm:w-1/2">
// 											<div className="mb-5">
// 												<label
// 													htmlFor="name"
// 													className="mb-3 block text-base font-medium text-cyan-600"
// 												>
// 													Role
// 												</label>
// 												<input
// 													defaultValue={isAdmin ? "Admin" : "user"}
// 													required
// 													type="text"
// 													name="name"
// 													id="name"
// 													placeholder="Role"
// 													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
// 												/>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="-mx-3 flex">
// 										<div className="w-full px-3 sm:w-1/2">
// 											<div className="mb-5">
// 												<label
// 													htmlFor="name"
// 													className="mb-3 block text-base font-medium text-cyan-600"
// 												>
// 													Email
// 												</label>
// 												<input
// 													required
// 													defaultValue={user?.email}
// 													type="text"
// 													name="email"
// 													id="email"
// 													placeholder="Email"
// 													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
// 												/>
// 											</div>
// 										</div>
// 										<div className="w-full px-3 sm:w-1/2">
// 											<div className="mb-5">
// 												<label
// 													htmlFor="picture"
// 													className="mb-3 block text-base font-medium text-cyan-600"
// 												>
// 													contact
// 												</label>
// 												<input
// 													required
// 													type="tel"
// 													name="contact"
// 													id="contact"
// 													placeholder="contact"
// 													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
// 												/>
// 											</div>
// 										</div>
// 									</div>
// 									<input
// 										className="relative inline-flex items-center px-5 py-2.5 cursor-pointer justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
// 										type="submit"
// 										value="Submit"
// 									/>
// 								</form>
// 								<div className="modal-action">
// 									<form method="dialog">
// 										<button className="btn">close</button>
// 									</form>
// 								</div>
// 							</div>
// 						</dialog>
// 					</div>
// 				</div>
// 			</div> */}
// 		</div>
// 	);
// };

// export default UserHome;

const UserHome = () => {
	return (
		<div>
			<h1>User Home</h1>
		</div>
	);
};

export default UserHome;
