import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
	const [axiosSecure] = useAxiosSecure();

	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

	const handleAdmin = (user) => {
		console.log(user);
		axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
			refetch();
			console.log(res.data);
			Swal.fire({
				position: "center",
				icon: "success",
				title: `${user?.name} is an Admin Now!`,
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};

	const handleDelete = (userId) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, remove",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/users/admin/${userId}`).then((res) => {
					refetch();
					console.log(res.data);
					Swal.fire("Removed!", "User has been removed", "success");
				});
			}
		});
	};

	return (
		<div className="w-full h-full">
			<>
				<div className="overflow-x-auto bg-blue-300">
					<table className="table">
						<thead>
							<tr className="text-xl text-white font-serif shadow">
								<th>#</th>
								<th>Image</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody className="font-bold font-serif text-xl">
							{users?.map((user, index) => (
								<tr key={user?._id}>
									<td>{index + 1}</td>
									<td>
										<img
											src={user?.photo}
											className="w-14 h-14 rounded-tr-2xl rounded-es-2xl border-2 border-blue-200"
											alt=""
										/>
									</td>
									<td className="uppercase text-base">{user?.name}</td>
									<td className="uppercase text-base font-normal">
										{user?.email}
									</td>
									<td>
										{user?.role === "Admin" ? (
											<div
												className="tooltip tooltip-info cursor-pointer ml-5"
												data-tip="Admin"
											>
												<MdAdminPanelSettings
													size={40}
													className="text-blue-600"
												/>
											</div>
										) : (
											<div
												onClick={() => handleAdmin(user)}
												className="tooltip tooltip-info cursor-pointer ml-5"
												data-tip="User"
											>
												<FaUser size={28} className="text-blue-600" />
											</div>
										)}
									</td>
									<td>
										<button
											className="text-3xl ml-4 text-red-500 hover:bg-red-500 hover:text-white btn btn-circle"
											onClick={() => handleDelete(user._id)}
										>
											<RxCross2 size={25} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</>
		</div>
	);
};

export default AllUsers;
