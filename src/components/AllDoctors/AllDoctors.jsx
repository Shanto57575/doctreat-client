import { Zoom } from "react-awesome-reveal";
import Loader from "../Loader/Loader.jsx";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { HiMailOpen, HiOutlineCurrencyDollar } from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import Swal from "sweetalert2";

const AllDoctors = () => {
	const [allDoctors, setAllDoctors] = useState([]);
	const [doctors, setDoctors] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [search, setSearch] = useState("");
	const [gender, setGender] = useState("");
	const [speciality, setSpeciality] = useState("");
	const [fees, setFees] = useState("");
	const [axiosSecure] = useAxiosSecure();

	const searchRef = useRef(null);
	const genderRef = useRef(null);
	const specialityRef = useRef(null);
	const feesRef = useRef(null);

	const totalItems = doctors.length;

	useEffect(() => {
		fetch("https://doctreat-server.vercel.app/alldoctors")
			.then((res) => res.json())
			.then((data) => setAllDoctors(data));
	}, []);

	//pagination
	const itemsPerPage = 5;
	const totalPages = Math.ceil(allDoctors.length / itemsPerPage);

	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	useEffect(() => {
		axiosSecure(
			`/alldoctors?page=${currentPage}&itemsPerPage=${itemsPerPage}&search=${search}&gender=${gender}&speciality=${speciality}&fees=${fees}`
		).then((data) => {
			setDoctors(data.data);
			setLoading(false);
		});
	}, [currentPage, search, gender, speciality, fees, axiosSecure]);

	const handleSubmit = (e) => {
		e.preventDefault();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Appointment Booked!",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<>
			<Helmet>
				<title>Doctreat | Doctors</title>
			</Helmet>
			<div className="text-center">
				<div
					className="hero h-[650px]"
					style={{
						backgroundImage:
							"url(https://t3.ftcdn.net/jpg/02/19/91/48/240_F_219914874_fcqxEeJ6clfwf43OcCNAMGNBySKzF5hl.jpg)",
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-lg">
							<h1 className="mb-5 text-5xl font-bold font-serif">
								Epic | <span className="text-blue-400">Docs</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="text-left ml-14 flex items-center gap-x-14 mt-10">
					<h1 className="font-bold text-xl font-serif">Filters By</h1>
					<button className="btn btn-xs text-blue-400 bg-white">
						Clear all
					</button>
				</div>
				<div className="lg:flex mt-10 lg:mx-12 gap-x-5">
					<div className="w-full lg:w-[20%] flex items-center justify-center flex-wrap font-serif rounded-lg shadow-xl border mb-5">
						<div className="form-control h-16 m-3 lg:h-52">
							<div className="input-group">
								<select
									defaultValue="Filter By speciality"
									className="select select-bordered text-black"
									ref={specialityRef}
									onChange={() => setSpeciality(specialityRef.current.value)}
								>
									<option disabled>Filter By speciality</option>
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
							</div>
						</div>
						<div className="form-control h-16 m-3 lg:h-52">
							<div className="input-group">
								<select
									defaultValue="Filter By Country"
									className="select select-bordered text-black"
									ref={searchRef}
									onChange={() => setSearch(searchRef.current.value)}
								>
									<option disabled>Filter By Country</option>
									<option>Bangladesh</option>
									<option>USA</option>
									<option>Canada</option>
									<option>Australia</option>
									<option>UK</option>
									<option>Germany</option>
									<option>Russia</option>
									<option>Spain</option>
								</select>
							</div>
						</div>
						<div className="form-control h-16 m-3 lg:h-52">
							<div className="input-group">
								<select
									defaultValue="Filter By Fees"
									className="select select-bordered text-black"
									ref={feesRef}
									onChange={() => setFees(feesRef.current.value)}
								>
									<option disabled>Filter By Fees</option>
									<option value="0-100">Less than $100</option>
									<option value="100-200">$100 - $200</option>
									<option value="200-300">$200 - $300</option>
									<option value="300-400">$300 - $400</option>
									<option value="400-500">$400 - $500</option>
									<option value="500-600">$500 - $600</option>
									<option value="600-700">$600 - $700</option>
									<option value="700-800">$700 - $800</option>
									<option value="800-900">$800 - $900</option>
									<option value="900-1000">$900 - $1000</option>
								</select>
							</div>
						</div>
						<div className="form-control h-16 m-3 lg:h-52">
							<div className="input-group">
								<select
									defaultValue="Filter By Gender"
									className="select select-bordered text-black"
									ref={genderRef}
									onChange={() => setGender(genderRef.current.value)}
								>
									<option disabled>Filter By Gender</option>
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
						</div>
					</div>
					<div className="w-full lg:md:w-[85%] font-serif">
						{loading ? (
							<Loader />
						) : totalItems === 0 ? (
							<div className="text-5xl text-cyan-500 h-screen">
								<span className="text-red-500">X</span>
								<p>No doctors available!</p>
							</div>
						) : (
							doctors.map((doc) => (
								<Zoom key={doc._id}>
									<div className="flex items-center flex-wrap justify-between hover:shadow-2xl shadow-slate-800 mb-5 border rounded-xl">
										<div className="w-full lg:w-[37%] space-x-2 space-y-3">
											<div className="flex flex-wrap items-center">
												<img
													className="md:w-28 w-full md:h-28 md:m-3 shadow-md shadow-gray-600 rounded-tr-3xl rounded-es-3xl"
													src={doc.picture}
													alt="Album"
												/>
												<div className="text-left border-l-4 md:border-l-0 border-cyan-600 pl-3 mt-4 md:mt-0">
													<p className="badge bg-blue-400 text-white">
														{doc.experience}+
													</p>
													<p className="text-cyan-500 font-semibold">
														{doc.speciality}
													</p>
													<p className="text-lg font-bold">{doc.name}</p>
													<p className="text-sm text-slate-500">
														{doc.education}
													</p>
												</div>
											</div>
											<p className="text-left ml-4 text-md text-cyan-600 font-extrabold">
												{doc.service}
											</p>
										</div>
										<div className="w-full lg:w-[33%] border-x-4 border-cyan-600 pl-4 flex flex-col justify-end space-y-1 py-3">
											<div className="flex items-center gap-2">
												<span className="text-cyan-600">
													<BsFlag size={18} />
												</span>
												{doc.country}
											</div>
											<div className="flex items-center gap-2">
												<span className="text-cyan-600">
													<AiOutlineClockCircle size={20} />
												</span>

												{doc.availability}
											</div>
											<div className="flex items-center gap-2">
												<span className="text-cyan-600">
													<HiMailOpen size={20} />
												</span>

												{doc.contact}
											</div>
											<div className="flex items-center gap-2 text-cyan-500 font-extrabold">
												<span className="text-cyan-600">
													<HiOutlineCurrencyDollar size={20} />
												</span>
												{doc.fees}
											</div>
											<div className="flex items-center">
												<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
													<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
														View Full Profile
													</span>
												</button>
												<button className="hover:text-red-600 duration-300 relative inline-flex items-center justify-center px-1 rounded-md mb-2 mr-2 text-sm font-medium">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-10 h-10"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
														/>
													</svg>
												</button>
											</div>
										</div>
										<div className="gap-2 w-full lg:w-[20%] space-x-2 space-y-3 border-cyan-600">
											<button
												onClick={() =>
													document.getElementById("my_modal_5").showModal()
												}
												className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
											>
												<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
													Book Your Appointment
												</span>
											</button>
											<dialog
												id="my_modal_5"
												className="modal modal-bottom sm:modal-middle"
											>
												<div className="modal-box">
													<h1 className="text-blue-400 text-xl font-bold font-serif italic underline mb-8">
														Appointment Form
													</h1>
													<div className="flex items-center justify-center px-12 pb-12">
														<div className="mx-auto w-full max-w-[550px]">
															<form onSubmit={handleSubmit}>
																<div className="-mx-3 flex flex-wrap">
																	<div className="w-full px-3 sm:w-1/2">
																		<div className="mb-5">
																			<label
																				htmlFor="fName"
																				className="mb-3 block text-base font-medium text-cyan-600"
																			>
																				First Name
																			</label>
																			<input
																				required
																				type="text"
																				name="fName"
																				id="fName"
																				placeholder="First Name"
																				className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
																			/>
																		</div>
																	</div>
																	<div className="w-full px-3 sm:w-1/2">
																		<div className="mb-5">
																			<label
																				htmlFor="lName"
																				className="mb-3 block text-base font-medium text-cyan-600"
																			>
																				Last Name
																			</label>
																			<input
																				required
																				type="text"
																				name="lName"
																				id="lName"
																				placeholder="Last Name"
																				className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
																			/>
																		</div>
																	</div>
																</div>
																<div className="-mx-3 flex flex-wrap">
																	<div className="w-full px-3 sm:w-1/2">
																		<div className="mb-5">
																			<label className="label">
																				<span className="label-text">
																					Choose Gender
																				</span>
																			</label>
																			<select
																				defaultValue="Gender"
																				className="select select-bordered w-full"
																			>
																				<option disabled>Gender</option>
																				<option>Male</option>
																				<option>Female</option>
																			</select>
																		</div>
																	</div>
																	<div className="w-full px-3 sm:w-1/2">
																		<div className="mb-5">
																			<label
																				htmlFor="time"
																				className="mb-3 block text-base font-medium text-cyan-600"
																			>
																				Age
																			</label>
																			<input
																				required
																				type="text"
																				name="age"
																				id="age"
																				placeholder="Age"
																				className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
																			/>
																		</div>
																	</div>
																</div>
																<input
																	className="btn relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-400 hover:bg-blue-500 text-white rounded-md group-hover:bg-opacity-0"
																	type="submit"
																	value="Submit"
																/>
															</form>
														</div>
													</div>
													<div className="modal-action">
														<form method="dialog">
															<button className="btn">close</button>
														</form>
													</div>
												</div>
											</dialog>
										</div>
									</div>
								</Zoom>
							))
						)}
						<div className="mb-5">
							<p className="text-cyan-500 mb-2 font-extrabold text-2xl">
								Page : {currentPage}
							</p>
							{pageNumbers.map((pageNumber) => (
								<button
									key={pageNumber}
									className={
										currentPage === pageNumber
											? "relative inline-flex items-center justify-center border-2 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
											: "mr-2 text-white"
									}
									onClick={() => setCurrentPage(pageNumber)}
								>
									<span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
										{pageNumber}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllDoctors;
