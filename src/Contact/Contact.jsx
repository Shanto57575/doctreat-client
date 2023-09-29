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
		<>
			<h1 className="text-cyan-500 text-5xl font-bold mt-10 text-center font-serif">
				Contact us
			</h1>
			<p className="mt-2 text-center font-serif">Get in touch with us</p>
			<div className="md:flex items-center">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="w-full md:w-1/2 md:mx-8 lg:mx-12 max-w-lg"
				>
					<div className="flex-col lg:flex-row-reverse">
						<div className="card w-full max-w-3xl shadow-2xl bg-base-100">
							<div className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										type="text"
										name="user_name"
										placeholder="Name"
										className="input input-bordered"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="email"
										name="user_email"
										className="input input-bordered"
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
										className="textarea textarea-bordered textarea-lg w-full"
										required
									></textarea>
								</div>
								<input
									className="btn bg-blue-400 hover:bg-blue-500 text-white"
									type="submit"
									value="Send"
								/>
							</div>
						</div>
					</div>
				</form>
				<div className="w-full md:w-1/2">
					<Lottie animationData={contact} loop={true} />
				</div>
			</div>
		</>
	);
};

export default Contact;
