import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddProduct = () => {
	const [axiosSecure] = useAxiosSecure();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("-->", data);
		const formData = new FormData();
		formData.append("image", data.image);
		console.log(formData);

		fetch(img_hosting_url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgResponse) => {
				console.log(imgResponse);
				if (imgResponse.success) {
					const imgURL = imgResponse.data?.display_url;
					const { name, price, category } = data;
					const newProduct = {
						name,
						price: parseFloat(price),
						category,
						img: imgURL,
					};
					console.log("newProduct--->", newProduct);
					axiosSecure.post("/shop", newProduct).then((res) => {
						if (res.data.insertedId) {
							reset();
							Swal.fire({
								position: "center",
								icon: "success",
								title: "New product added",
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
				---- Add Product ----
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control w-full mb-4">
					<label className="label">
						<span className="label-text font-semibold">Product Name*</span>
					</label>
					<input
						type="text"
						placeholder="Product Name"
						{...register("name", { required: true, maxLength: 120 })}
						className="input input-bordered w-full rounded-none shadow shadow-slate-500"
					/>
					{errors.name?.type === "required" && (
						<p className="text-red-500 font-serif font-semibold mt-2">
							Name is required
						</p>
					)}
				</div>
				<div className="md:flex my-4 gap-x-5">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold">Category*</span>
						</label>
						<select
							defaultValue="Pick One"
							{...register("category", { required: true })}
							className="select select-bordered rounded-none shadow shadow-slate-500"
						>
							<option disabled>Pick One</option>
							<option>Monitoring Devices</option>
							<option>Respiratory Equipment</option>
							<option>Diagnostic Tools</option>
							<option>Mobility Aids</option>
							<option>Support and Braces</option>
						</select>
						{errors.category?.type === "required" && (
							<p className="text-red-500 font-serif font-semibold mt-2">
								category is required
							</p>
						)}
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text font-semibold">Price*</span>
						</label>
						<input
							type="number"
							{...register("price", { required: true })}
							placeholder="Price"
							className="input input-bordered rounded-none shadow shadow-slate-500 w-full"
						/>
						{errors.price?.type === "required" && (
							<p className="text-red-500 font-serif font-semibold mt-2">
								price is required
							</p>
						)}
					</div>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text font-semibold">Product Image*</span>
					</label>
					<input
						type="url"
						{...register("image", { required: true })}
						placeholder="Photo URL"
						className="input input-bordered rounded-none shadow shadow-slate-500 w-full"
					/>
					{errors.image?.type === "required" && (
						<p className="text-red-500 font-serif font-semibold mt-2">
							photo url is required
						</p>
					)}
				</div>
				<input
					className="cursor-pointer font-serif shadow-black rounded-none text-blue-500 bg-white hover:bg-gray-900 border border-blue-500 duration-300 font-bold mt-4 text-sm px-7 py-2.5 text-center mr-2 mb-2"
					type="submit"
					value="Add Product"
				/>
			</form>
		</div>
	);
};

export default AddProduct;
