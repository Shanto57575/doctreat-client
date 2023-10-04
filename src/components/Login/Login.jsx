import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRef } from "react";

const Login = () => {
	const { SignIn, googleSignIn, GithubSignIn, resetPassword } =
		useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const emailRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const user = { email, password };

		console.log(user);

		SignIn(email, password)
			.then((user) => {
				if (user?.email) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Logged In successfully",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate(from, { replace: true });
					console.log(user);
				}
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: error.message,
				});
			});

		form.reset();
	};

	// Github authentication

	const githubAuth = () => {
		GithubSignIn()
			.then((result) => {
				console.log(result);
				navigate(from, { replace: true });
			})
			.catch((error) => console.log(error.message));
	};

	// Google authentication

	const googleAuth = () => {
		googleSignIn()
			.then((result) => {
				navigate(from, { replace: true });
				console.log(result);
			})
			.catch((error) => console.log(error.message));
	};

	const ResetPassword = () => {
		resetPassword(emailRef.current.value)
			.then(() => {
				console.log("reset EMail sent");
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<div className="md:flex items-center justify-around px-6 py-20 mx-auto">
			<div className="w-full md:w-1/2">
				<Lottie animationData={login} loop={true} />
			</div>
			<div className="w-full md:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Sign In
					</h1>
					<form
						onSubmit={handleSubmit}
						className="space-y-4 md:space-y-6"
						action="#"
					>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								ref={emailRef}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Email"
								required
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
								required
							/>
						</div>
						<div className="flex items-start">
							<div className="text-sm">
								<label
									onClick={ResetPassword}
									className="link text-blue-600 font-light"
								>
									Forget password?
								</label>
							</div>
						</div>
						<input
							className="cursor-pointer w-full text-white bg-cyan-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							type="submit"
							value="Login"
						/>
						<div className="flex items-center justify-center">
							<button
								type="button"
								className="cursor-pointer text-white gap-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
								onClick={githubAuth}
							>
								Sign In with <AiFillGithub size={24} />
							</button>
							<button
								type="button"
								className="cursor-pointer gap-2 bg-white text-black hover:text-white focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
								onClick={googleAuth}
							>
								Sign In with
								<FcGoogle size={24} />
							</button>
						</div>
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Dont have an account?
							<Link
								to="/register"
								className="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>
								<span className="text-blue-400">SignUp here</span>
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
