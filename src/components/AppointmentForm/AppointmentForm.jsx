const AppointmentForm = () => {
	return (
		<>
			<h1 className="text-center text-3xl text-cyan-600 font-bold font-serif mt-5 mb-10 underline">
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
							<button className="hover:shadow-form rounded-md bg-cyan-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AppointmentForm;
