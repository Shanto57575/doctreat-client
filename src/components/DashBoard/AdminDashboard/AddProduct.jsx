const AddProduct = () => {
	return (
		<>
			<button
				className="btn bg-blue-500 text-white hover:bg-blue-600"
				onClick={() => document.getElementById("my_modal_5").showModal()}
			>
				Add Product
			</button>
			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
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
										defaultValue="Choose Category"
										className="select select-bordered w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									>
										<option disabled>Choose Category</option>
										<option>Monitoring Devices</option>
										<option>Respiratory Equipment</option>
										<option>Diagnostic Tools</option>
										<option>Mobility Aids</option>
										<option>Support and Braces</option>
									</select>
								</div>
							</div>
						</div>
						<div className="-mx-3 flex">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="price"
										className="mb-3 block text-base font-medium text-cyan-600"
									>
										Price
									</label>
									<input
										required
										type="text"
										name="price"
										id="price"
										placeholder="price"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
									/>
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
					</form>
					<div className="modal-action">
						<form method="dialog">
							<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
								<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
									Submit
								</span>
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default AddProduct;
