import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddDoctor = () => {
	const [axiosSecure] = useAxiosSecure();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append("image", data.image);

		fetch(img_hosting_url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgResponse) => {
				if (imgResponse.success) {
					const imgURL = imgResponse.data?.display_url;
					const {
						name,
						experience,
						availability,
						email,
						country,
						education,
						gender,
						fees,
						speciality,
						service,
					} = data;
					const newDoctor = {
						name,
						experience,
						email,
						country,
						education,
						gender,
						speciality,
						service,
						fees: parseFloat(fees),
						picture: imgURL,
						contact: email,
						availability,
					};
					axiosSecure.post("/alldoctors", newDoctor).then((res) => {
						if (res.data.insertedId) {
							reset();
							Swal.fire({
								position: "center",
								icon: "success",
								title: "New Specialist added",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
				}
			});
	};

	return (
		<div className="bg-blue-400 w-full h-full px-5 lg:px-20">
			<h1 className="text-center mt-10 text-white py-2 text-2xl mb-4 md:text-4xl font-bold font-serif italic">
				---- Add New Specialist ----
			</h1>
			<div className="flex items-center justify-center pb-12 text-black">
				<div className="mx-auto w-full">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="-mx-3 md:flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">
											Doctor Name
										</span>
									</label>
									<input
										type="text"
										placeholder="Doctor Name"
										{...register("name", { required: true, maxLength: 120 })}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.name?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Name is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text font-semibold">Gender</span>
									</label>
									<select
										defaultValue="Gender"
										{...register("gender", { required: true })}
										className="select select-bordered rounded-none shadow shadow-slate-500"
									>
										<option disabled>Gender</option>
										<option>Male</option>
										<option>Female</option>
									</select>
									{errors.gender?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Gender is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text font-semibold">Speciality</span>
									</label>
									<select
										defaultValue="Speciality"
										{...register("speciality", { required: true })}
										className="select select-bordered rounded-none shadow shadow-slate-500"
									>
										<option disabled>Speciality</option>
										<option>Cardiology</option>
										<option>Dermatology</option>
										<option>Neurology</option>
										<option>Oncology</option>
										<option>Orthopedics</option>
										<option>Endocrinology</option>
										<option>Pediatrics</option>
										<option>Ophthalmology</option>
										<option>Psychiatry</option>
										<option>Rheumatology</option>
										<option>Dentistry</option>
									</select>
									{errors.speciality?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Speciality is required
										</p>
									)}
								</div>
							</div>
						</div>
						<div className="-mx-3 md:flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">Service</span>
									</label>
									<input
										type="text"
										placeholder="Service"
										{...register("service", { required: true, maxLength: 120 })}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.service?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											service is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">Education</span>
									</label>
									<input
										type="text"
										placeholder="Education"
										{...register("education", {
											required: true,
											maxLength: 120,
										})}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.education?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Education is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">Experience</span>
									</label>
									<input
										type="text"
										placeholder="Experience"
										{...register("experience", {
											required: true,
											maxLength: 120,
										})}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.experience?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Experience is required
										</p>
									)}
								</div>
							</div>
						</div>
						<div className="-mx-3 md:flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">Fees</span>
									</label>
									<input
										type="text"
										placeholder="Fees"
										{...register("fees", {
											required: true,
											maxLength: 120,
										})}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.fees?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											fees is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text font-semibold">Country</span>
									</label>
									<select
										defaultValue="Country"
										{...register("country", { required: true })}
										className="select select-bordered rounded-none shadow shadow-slate-500"
									>
										<option disabled>Country</option>
										<option>Bangladesh</option>
										<option>USA</option>
										<option>Canada</option>
										<option>Australia</option>
										<option>UK</option>
										<option>Germany</option>
										<option>Russia</option>
										<option>Spain</option>
									</select>
									{errors.country?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Country is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">Photo URL</span>
									</label>
									<input
										type="url"
										placeholder="photo url"
										{...register("image", {
											required: true,
											maxLength: 120,
										})}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.image?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											photo url is required
										</p>
									)}
								</div>
							</div>
						</div>
						<div className="-mx-3 md:flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">Email</span>
									</label>
									<input
										type="email"
										placeholder="Email"
										{...register("email", {
											required: true,
											maxLength: 120,
										})}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.email?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Email is required
										</p>
									)}
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="form-control w-full mb-4">
									<label className="label">
										<span className="label-text font-semibold">
											Availability
										</span>
									</label>
									<input
										type="text"
										placeholder="Availability"
										{...register("availability", {
											required: true,
											maxLength: 120,
										})}
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
									/>
									{errors.availability?.type === "required" && (
										<p className="text-red-600 font-serif font-semibold mt-2">
											Availability is required
										</p>
									)}
								</div>
							</div>
						</div>
						<div>
							<input
								className="cursor-pointer font-serif shadow-black rounded-none text-blue-500 bg-white hover:bg-gray-900 border border-blue-500 duration-300 font-bold mt-4 text-sm px-7 py-2.5 text-center mr-2 mb-2"
								type="submit"
								value="Add Doctor"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddDoctor;
