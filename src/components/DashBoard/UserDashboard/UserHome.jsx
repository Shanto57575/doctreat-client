import { useContext } from "react";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import useCart from "../../../hooks/useCart";
import { BiEdit } from "react-icons/bi";

const UserHome = () => {
	const { user } = useContext(AuthContext);
	const [cart] = useCart();
	console.log(user, cart);

	const handleSubmit = () => {
		console.log("ahhh bhidu");
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			<ResponsiveContainer
				className="bg-blue-400 glass rounded-2xl"
				width="100%"
				height={400}
			>
				<BarChart
					data={cart}
					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
				>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="price" fill="" />
				</BarChart>
			</ResponsiveContainer>

			<div className="card w-96 glass bg-blue-400">
				<figure>
					<img
						loading="lazy"
						src={user.photoURL}
						// src="https://t3.ftcdn.net/jpg/04/91/76/46/240_F_491764612_fXhBdvCCWCI8iMZH3dAsE261z3K9T0zn.jpg"
						alt="user"
						className="w-40 h-40 rounded-full mt-5"
					/>
				</figure>
				<div className="card-body">
					<h2 className="text-xl font-bold font-serif text-center">
						{user.displayName}
					</h2>
					<div className="card-actions">
						<button
							className="btn bg-cyan-700 hover:bg-cyan-600 border-0"
							onClick={() => document.getElementById("my_modal_5").showModal()}
						>
							<BiEdit className="text-white" size={25} />
						</button>
						<dialog
							id="my_modal_5"
							className="modal modal-bottom sm:modal-middle"
						>
							<div className="modal-box">
								<form onSubmit={handleSubmit}>
									<div className="-mx-3 flex">
										<div className="w-full px-3 sm:w-1/2">
											<div className="mb-5">
												<label
													htmlFor="name"
													className="mb-3 block text-base font-medium text-cyan-600"
												>
													Name
												</label>
												<input
													required
													type="text"
													name="name"
													id="name"
													placeholder="Name"
													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
												/>
											</div>
										</div>
										<div className="w-full px-3 sm:w-1/2">
											<div className="mb-5">
												<label
													htmlFor="name"
													className="mb-3 block text-base font-medium text-cyan-600"
												>
													Role
												</label>
												<input
													required
													type="text"
													name="name"
													id="name"
													placeholder="Role"
													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
												/>
											</div>
										</div>
									</div>
									<div className="-mx-3 flex">
										<div className="w-full px-3 sm:w-1/2">
											<div className="mb-5">
												<label
													htmlFor="name"
													className="mb-3 block text-base font-medium text-cyan-600"
												>
													Email
												</label>
												<input
													required
													type="text"
													name="email"
													id="email"
													placeholder="Email"
													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
												/>
											</div>
										</div>
										<div className="w-full px-3 sm:w-1/2">
											<div className="mb-5">
												<label
													htmlFor="picture"
													className="mb-3 block text-base font-medium text-cyan-600"
												>
													contact
												</label>
												<input
													required
													type="tel"
													name="contact"
													id="contact"
													placeholder="contact"
													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
												/>
											</div>
										</div>
									</div>
									<div className="-mx-3 flex">
										<div className="w-full px-3 sm:w-1/2">
											<div className="mb-5">
												<label
													htmlFor="name"
													className="mb-3 block text-base font-medium text-cyan-600"
												>
													status
												</label>
												<input
													required
													type="text"
													name="status"
													id="status"
													placeholder="status"
													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
												/>
											</div>
										</div>
										<div className="w-full px-3 sm:w-1/2">
											<div className="mb-5">
												<label
													htmlFor="picture"
													className="mb-3 block text-base font-medium text-cyan-600"
												>
													verification
												</label>
												<input
													required
													type="text"
													name="verification"
													id="verification"
													placeholder="verification"
													className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
												/>
											</div>
										</div>
									</div>
								</form>

								<div className="modal-action">
									<form method="dialog">
										<input
											className="relative inline-flex items-center px-5 py-2.5 cursor-pointer justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
											type="submit"
											value="Submit"
										/>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserHome;
