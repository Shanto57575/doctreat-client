import { useContext } from "react";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
const AdminHome = () => {
	const { user } = useContext(AuthContext);
	console.log(user);

	return (
		<div>
			<div className="card w-96 glass bg-blue-400">
				<figure>
					<img
						loading="lazy"
						src={user.photoURL}
						alt="user"
						className="w-40 h-40 rounded-full mt-5"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{user.displayName}</h2>
					<p>{user.email}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Learn now!</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
