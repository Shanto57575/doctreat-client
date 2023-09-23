import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log(createUser);
	const handleSubmit = (event) => {
		event.preventDefault();
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Congratulations, Your account has been created",
			showConfirmButton: false,
			timer: 1500,
		});

		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const user = { name, email, password };

		console.log(user);

		createUser(email, password)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => console.log(error.message));
		form.reset();
		navigate("/");
	};

	return (
		<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Create an account
					</h1>
					<form
						onSubmit={handleSubmit}
						className="space-y-4 md:space-y-6"
						action="#"
					>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your Name
							</label>
							<input
								type="text"
								name="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Name"
								required=""
							/>
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Email"
								required=""
							/>
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<input
							className="cursor-pointer w-full text-white bg-cyan-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							type="submit"
							value="Create an account"
						/>
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account?
							<Link
								to="/login"
								className="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>
								<span className="text-blue-400">Login here</span>
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
