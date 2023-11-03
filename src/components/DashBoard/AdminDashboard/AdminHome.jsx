import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const AdminHome = () => {
	const { user } = useContext(AuthContext);
	const [payment, setPayment] = useState([]);
	const [axiosSecure] = useAxiosSecure();

	const totalRevenue = parseFloat(
		payment.reduce((acc, user) => acc + user.price, 0).toFixed(2)
	);

	const totalProducts = payment.reduce((acc, user) => acc + user.quantity, 0);

	const { data: users = [] } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

	useEffect(() => {
		axiosSecure.get("/payments").then((res) => {
			setPayment(res.data);
		});
	}, [axiosSecure]);

	return (
		<div className="w-full h-full p-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-3">
				<div className="card md:w-80 mx-auto text-center shadow-xl image-full">
					<figure>
						<img
							src="https://t4.ftcdn.net/jpg/02/37/38/75/240_F_237387592_Aw4sn7LtFpBKaFJrK3D3UeXUn4ku5eV5.jpg"
							alt="users"
						/>
					</figure>
					<div className="card-body">
						<h2 className="text-3xl font-bold">Total Users</h2>
						<p className="text-2xl">{users.length}K+</p>
					</div>
				</div>
				<div className="card md:w-80 mx-auto text-center shadow-xl image-full">
					<figure>
						<img
							src="https://t4.ftcdn.net/jpg/04/88/02/37/240_F_488023768_pCWLP3HGQgZfyIKXKNWIEXtLG8lGgKBo.jpg"
							alt="$"
						/>
					</figure>
					<div className="card-body">
						<h2 className="text-3xl font-bold">revenue</h2>
						<p className="text-2xl">$ {totalRevenue}</p>
					</div>
				</div>
				<div className="card md:w-80 mx-auto text-center shadow-xl image-full">
					<figure>
						<img
							src="https://t4.ftcdn.net/jpg/06/22/39/91/240_F_622399180_DepHTZxCHaAJiNOunneLE41Fne2h6oNq.jpg"
							alt="Sales"
						/>
					</figure>
					<div className="card-body">
						<h2 className="text-3xl font-bold">Product Sales Increased</h2>
						<p className="text-2xl">{totalProducts} %</p>
					</div>
				</div>
			</div>
			<div className="w-full h-72 pt-4 bg-gray-950 text-white border-none md:w-80 mx-auto border shadow shadow-gray-600 rounded-xl">
				<figure>
					<img
						className="w-24 h-24 rounded-full mx-auto ring ring-blue-500 ring-offset-base-100 ring-offset-2"
						src={user?.photoURL}
						alt=""
					/>
				</figure>
				<div className="px-5 pt-3">
					<div>
						<h2 className="text-base font-bold font-serif">
							{user?.displayName}
							<div className="badge badge-secondary text-white ml-2">Admin</div>
						</h2>
						<h1 className="text-base font-semibold font-serif mt-1 my-3">
							{user?.email}
						</h1>
						<div className="card-actions">
							<div className="badge badge-outline">Edit</div>
							<Link to="/shop" className="badge badge-outline">
								Shop
							</Link>
						</div>
					</div>
					<div className="flex gap-x-2 justify-end mb-3">
						<BsFacebook className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
						<BsTwitter className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
						<BsLinkedin className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
