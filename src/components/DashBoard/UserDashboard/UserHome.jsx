import { useContext } from "react";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
import usePayment from "./../../../hooks/usePayment";

const UserHome = () => {
	const { user } = useContext(AuthContext);
	const [paymentHistory] = usePayment();
	console.log(paymentHistory);

	return (
		<div className="w-full h-full bg-blue-400">
			<h1 className="font-bold text-white text-3xl font-serif mb-1">Hey,</h1>
			<div className="card w-80 shadow-md shadow-gray-400 bg-blue-50 rounded-none">
				<figure>
					<img
						className="w-28 h-28 rounded-full my-2"
						src={user?.photoURL}
						alt=""
					/>
				</figure>

				<div className="card-body">
					<h2 className="text-lg font-bold font-serif">
						{user?.displayName}
						<div className="badge badge-secondary text-white">New user</div>
					</h2>
					<h1>{user?.email}</h1>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">Fashion</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserHome;
