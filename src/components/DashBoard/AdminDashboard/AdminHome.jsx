import { useContext } from "react";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
const AdminHome = () => {
	const { user } = useContext(AuthContext);
	console.log(user);

	return (
		<div className="w-full h-full bg-blue-400">
			<div className="card w-80 shadow-md shadow-gray-400 bg-blue-50 rounded-none">
				<figure>
					<img
						className="w-28 h-28 rounded-full my-2"
						src={user?.photoURL}
						alt=""
					/>
				</figure>

				<div className="card-body">
					<h2 className="text-base font-bold font-serif">
						{user?.displayName}
						<div className="badge badge-secondary text-white ml-2">Admin*</div>
					</h2>
					<h1>{user?.email}</h1>
					<div className="card-actions">
						<div className="badge badge-outline">Fashion</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
