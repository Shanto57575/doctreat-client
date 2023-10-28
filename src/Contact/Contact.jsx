import Lottie from "lottie-react";
import contact from "../assets/contact.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_pm68q9g",
				"template_ld6j6ub",
				form.current,
				"Fm702fKL1sZPnZ8Kj"
			)
			.then(
				(result) => {
					console.log(result);
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Email has been sent successfully!",
						showConfirmButton: false,
						timer: 1500,
					});
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="bg-stone-100">
			<h1 className="text-gray-500 text-5xl font-bold text-center font-serif pt-10">
				Contact us
			</h1>
			<p className="mt-2 text-center font-serif">Get in touch with us</p>
			<div className="flex flex-col-reverse lg:flex-row items-center">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="w-full md:w-1/2 md:mx-8 lg:mx-12 max-w-5xl border border-gray-300"
				>
					<div className="">
						<div className="card w-full max-w-3xl shadow-2xl rounded-none">
							<div className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										type="text"
										name="user_name"
										placeholder="john doe"
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="johndoe@gmail.com"
										name="user_email"
										className="input input-bordered w-full rounded-none shadow shadow-slate-500"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Message</span>
									</label>
									<textarea
										placeholder="Message"
										name="message"
										className="textarea textarea-bordered textarea-lg w-full rounded-none shadow shadow-slate-500"
										required
									></textarea>
								</div>
								<input
									className="btn bg-blue-500 border-none text-white hover:bg-blue-600 rounded-none shadow shadow-slate-500"
									type="submit"
									value="Submit"
								/>
							</div>
						</div>
					</div>
				</form>
				<div className="w-full md:w-1/2">
					<Lottie animationData={contact} loop={true} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
