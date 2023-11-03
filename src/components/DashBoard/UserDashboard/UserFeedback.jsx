import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FcFeedback } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserFeedback = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		axiosSecure.post("/feedback", data).then((res) => {
			document.getElementById("my_modal_3").close();
			if (res.data.insertedId) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Feedback Submitted",
					showConfirmButton: false,
					timer: 2000,
				});
			}
		});
	};

	return (
		<div>
			<button
				className="flex items-center gap-x-2 text-lg font-serif"
				onClick={() => document.getElementById("my_modal_3").showModal()}
			>
				<FcFeedback size={25} /> Give Feedback
			</button>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box bg-blue-400 rounded-none">
					<form method="dialog">
						<button
							onClick={() => document.getElementById("my_modal_3").close()}
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						>
							✕
						</button>
					</form>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full mb-4">
							<label className="label">
								<span className="label-text font-semibold">Name*</span>
							</label>
							<input
								type="text"
								defaultValue={user?.displayName}
								placeholder="User Name"
								{...register("name", { required: true, maxLength: 120 })}
								className="input input-bordered w-full rounded-none shadow shadow-slate-500"
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">Photo URL*</span>
							</label>
							<input
								type="url"
								defaultValue={user?.photoURL}
								{...register("image", { required: true })}
								placeholder="Photo URL"
								className="input input-bordered rounded-none shadow shadow-slate-500 w-full"
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-semibold">Feedback</span>
							</label>
							<textarea
								type="text"
								{...register("feedback", { required: true })}
								placeholder="Feedback"
								className="input input-bordered rounded-none shadow shadow-slate-500 w-full py-2"
							></textarea>
							{errors.feedback?.type === "required" && (
								<p className="text-red-500 font-serif font-semibold mt-2">
									photo url is required
								</p>
							)}
						</div>
						<input
							className="cursor-pointer font-serif shadow-black rounded-none text-blue-500 bg-white hover:bg-gray-900 border border-blue-500 duration-300 font-bold mt-4 text-sm px-7 py-2.5 text-center mr-2 mb-2"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</dialog>
		</div>
	);
};

export default UserFeedback;
