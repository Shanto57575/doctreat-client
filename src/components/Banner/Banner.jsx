import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://t3.ftcdn.net/jpg/02/83/48/26/240_F_283482670_030r6BxhQaauqOlF0yDk1lQiKwtYAcd0.jpg)",
				}}
			>
				<div className="hero-overlay"></div>
				<div className="text-white md:text-start">
					<div className="md:w-1/2 md:ml-10 lg:mt-20 px-3">
						<h1 className="mb-5 text-2xl md:text-5xl lg:text-6xl font-bold font-serif uppercase">
							<p className="mb-2">
								Your <span className="md:mx-3">Most</span> trusted
							</p>
							<span className="text-blue-400 mr-2 md:mr-4">Health</span>
							<span>Partner</span>
						</h1>
						<p className="mb-5 text-justify md:text-lg">
							Begin Your Health Journey with Epic Care: Your Gateway to
							Excellence in Healthcare. Explore a Range of Services and
							Resources Tailored to Support Your Transformation Towards Better
							Well being
						</p>
						<div className="mt-5">
							<Link to="alldoctors">
								<button
									type="button"
									className="border px-2 md:px-5 py-2 hover:bg-white hover:text-black rounded md:font-semibold font-serif"
								>
									View Doctors
								</button>
							</Link>
							<Link to="shop">
								<button
									type="button"
									className="border border-blue-400 ml-3 p-2 md:px-5  hover:bg-blue-400 text-blue-400 hover:text-white rounded md:font-semibold font-serif"
								>
									Buy Products
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-16 md:py-10 bg-blue-400">
				<div className="bg-white hover:bg-blue-50 text-black px-10 py-8 space-y-5">
					<h1 className="text-2xl font-serif font-bold">Professional staff</h1>
					<p>
						Our dedicated team of professionals is committed to delivering
						top-notch healthcare services
					</p>
					<button className="border px-5 py-2 hover:bg-blue-400 hover:text-black rounded font-semibold font-serif">
						Read more
					</button>
				</div>
				<div className="bg-blue-300 hover:bg-blue-200 text-black px-10 py-8 space-y-5">
					<h1 className="text-2xl font-serif font-bold">Affordable prices</h1>
					<p>
						We believe that quality healthcare should be accessible to all.
						Thats why we offer affordable pricing
					</p>
					<button className="border px-5 py-2 hover:bg-white hover:text-black rounded font-semibold font-serif">
						Read more
					</button>
				</div>
				<div className="bg-white hover:bg-blue-50 text-black px-10 py-8 space-y-5">
					<h1 className="text-2xl font-serif font-bold">Insurance partners</h1>
					<p>
						We understand the importance of financial peace of mind when it
						comes to healthcare
					</p>
					<button className="border px-5 py-2 hover:bg-blue-400 hover:text-black rounded font-semibold font-serif">
						Read more
					</button>
				</div>
				<div className="bg-blue-300 hover:bg-blue-200 text-black px-10 py-8 space-y-5">
					<h1 className="text-2xl font-serif font-bold">Consult our doctors</h1>
					<p>
						Your health is unique, and our experienced doctors are here to guide
						you.
					</p>
					<button className="border px-5 py-2 hover:bg-white hover:text-black rounded font-semibold font-serif">
						Read more
					</button>
				</div>
			</div>
		</>
	);
};

export default Banner;
