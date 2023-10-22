const AddDoctor = () => {
	return (
		<>
			<h1 className="text-cyan-500 text-3xl font-bold underline font-serif my-8">
				Add New Specialist
			</h1>
			<div className="flex items-center justify-center pb-12">
				<div className="mx-auto w-full">
					<form>
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
										htmlFor="Gender"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Gender
									</label>
									<select
										defaultValue="Gender"
										className="select select-bordered w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-cyan-500 focus:shadow-md"
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
										htmlFor="speciality"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										speciality
									</label>
									<select
										defaultValue="Choose speciality"
										className="select select-bordered w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-cyan-500 focus:shadow-md"
									>
										<option disabled>Choose speciality</option>
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
						</div>
						<div className="-mx-3 flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="service"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										service
									</label>
									<input
										required
										type="text"
										name="service"
										id="service"
										placeholder="Service"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="education"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Education
									</label>
									<input
										required
										type="education"
										name="education"
										id="education"
										placeholder="Education"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="Experience"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Experience
									</label>
									<input
										required
										type="text"
										name="Experience"
										id="Experience"
										placeholder="Experience"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div className="-mx-3 flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="fees"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Fees
									</label>
									<input
										required
										type="text"
										name="fees"
										id="fees"
										placeholder="$"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="fees"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Country
									</label>
									<select
										defaultValue="Filter By Country"
										className="select select-bordered w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
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
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="picture"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										picture
									</label>
									<input
										required
										type="url"
										name="picture"
										id="picture"
										placeholder="Doctor Photo"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div className="-mx-3 flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="email"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Email
									</label>
									<input
										required
										type="email"
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
										htmlFor="availability"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Availability
									</label>
									<input
										required
										type="text"
										name="availability"
										id="availability"
										placeholder="availability"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div>
							<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
								<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
									Submit
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddDoctor;
