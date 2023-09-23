import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ShowService = () => {
	const data = useLoaderData();
	const { user } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const speciality = form.speciality.value;
		const country = form.country.value;
		const price = form.price.value;
		const picture = form.picture.value;
		const experience = form.experience.value;

		const allData = {
			id: data?._id,
			name,
			speciality,
			country,
			price,
			picture,
			experience,
			email: user?.email,
		};

		fetch("http://localhost:5000/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(allData),
		})
			.then((res) => {
				if (res.status === 409) {
					Swal.fire({
						title: "Already booked",
						showClass: {
							popup: "animate__animated animate__fadeInDown",
						},
						hideClass: {
							popup: "animate__animated animate__fadeOutUp",
						},
					});
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Your booking has been saved",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div className="hero bg-base-200">
			<div>
				<h1 className="text-center my-5 text-cyan-600 font-bold font-serif text-2xl">
					Service booking
				</h1>
				<div className="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-600">
					<form onSubmit={handleSubmit}>
						<div className="grid grid-cols-2 gap-4">
							<div className="relative mb-6">
								<input
									type="text"
									name="name"
									className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									defaultValue={data.name}
								/>
							</div>
							<div className="relative mb-6">
								<input
									type="text"
									className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									placeholder="speciality"
									name="speciality"
									defaultValue={data.speciality}
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="relative mb-6">
								<input
									type="text"
									className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									placeholder="price"
									name="price"
									defaultValue={data.fees}
								/>
							</div>
							{/*Last name input*/}
							<div className="relative mb-6">
								<input
									type="url"
									className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									placeholder="picture"
									name="picture"
									defaultValue={data.picture}
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="relative mb-6">
								<input
									type="text"
									className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									placeholder="Experience"
									name="experience"
									defaultValue={data.experience}
								/>
							</div>
							{/*Last name input*/}
							<div className="relative mb-6">
								<input
									type="text"
									name="country"
									className="border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
									defaultValue={data.country}
								/>
							</div>
						</div>

						<input
							className="cursor-pointer inline-block w-full rounded bg-cyan-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ShowService;
