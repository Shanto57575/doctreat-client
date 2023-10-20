const AppointmentForm = () => {
	return (
		<div className=" pt-28">
			<h1 className="text-center text-3xl text-cyan-600 font-bold font-serif underline mb-5">
				Book Your Appointment
			</h1>
			<div className="flex items-center justify-center px-12 pb-12">
				<div className="mx-auto w-full max-w-[550px]">
					<form>
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
									<label
										htmlFor="date"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Date
									</label>
									<input
										type="date"
										name="date"
										id="date"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="time"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Time
									</label>
									<input
										type="time"
										name="time"
										id="time"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
						</div>
						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="fName"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Total patient
									</label>
									<input
										type="text"
										name="fName"
										id="fName"
										placeholder="Number of patient"
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
										Total Payment
									</label>
									<input
										type="text"
										name="lName"
										id="lName"
										placeholder="$"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						<div className="mb-5">
							<label className="mb-3 block text-base font-medium text-cyan-600">
								Please make a 50% payment to confirm
							</label>
							<div className="flex items-center space-x-6">
								<div className="flex items-center">
									<input
										type="radio"
										name="radio1"
										id="radioButton1"
										className="h-5 w-5"
									/>
									<label
										htmlFor="radioButton1"
										className="pl-3 text-base font-medium text-cyan-600"
									>
										Yes
									</label>
								</div>
								<div className="flex items-center">
									<input
										type="radio"
										name="radio1"
										id="radioButton2"
										className="h-5 w-5"
									/>
									<label
										htmlFor="radioButton2"
										className="pl-3 text-base font-medium text-cyan-600"
									>
										No
									</label>
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
		</div>
	);
};

export default AppointmentForm;
