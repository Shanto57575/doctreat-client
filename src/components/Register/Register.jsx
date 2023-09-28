import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import register from "../../assets/register.json";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
	const { createUser, googleSignIn, facebookSignIn } = useContext(AuthContext);
	const navigate = useNavigate();

	// Email Password authentication
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

	// Facebook authentication

	const facebookAuth = () => {
		facebookSignIn()
			.then((result) => console.log(result))
			.catch((error) => console.log(error.message));
	};

	// Google authentication

	const googleAuth = () => {
		googleSignIn()
			.then((result) => console.log(result))
			.catch((error) => console.log(error.message));
	};

	return (
		<div className="md:flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<div className="w-full md:w-1/2">
				<Lottie className="h-96" animationData={register} loop={true} />
			</div>
			<div className="w-full md:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
						/>{" "}
					</form>
					<div className="flex items-center justify-center">
						<button
							type="button"
							className="cursor-pointer inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
							onClick={facebookAuth}
						>
							Sign In with <BsFacebook />
						</button>
						<button
							type="button"
							className="cursor-pointer text-white gap-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
							onClick={googleAuth}
						>
							Sign In with
							<FcGoogle />
						</button>
					</div>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account?
						<Link
							to="/login"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>
							<span className="text-blue-400">Login here</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
