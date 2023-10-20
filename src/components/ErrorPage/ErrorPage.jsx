import Lottie from "lottie-react";
import Error from "../../assets/oops.json";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ErrorPage = () => {
	return (
		<div className="h-screen">
			<Link to="/">
				<h1 className="flex items-center gap-2 w-full mx-auto bg-blue-400 p-2 text-white font-serif text-3xl">
					<BiArrowBack /> Back to Home
				</h1>
			</Link>
			<Lottie animationData={Error} loop={true} />
		</div>
	);
};

export default ErrorPage;
