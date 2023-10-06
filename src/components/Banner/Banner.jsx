import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<>
			<div className="carousel w-full font-serif">
				<div id="slide1" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								"url(https://i.postimg.cc/x1gNY6yH/young-handsome-physician-medical-robe-with-stethoscope-1303-17818.jpg)",
						}}
					>
						<div className="hero-overlay bg-opacity-50"></div>
						<div className="hero-content text-center text-neutral-content mt-20">
							<div className="max-w-md md:max-w-xl">
								<h1 className="mb-5 text-3xl md:text-5xl font-bold">
									Welcome to <span className="text-cyan-400">Doctreat</span>,
									Your Path to Wellness
								</h1>
								<p className="mb-5 text-justify">
									Discover a world of health and healing in just a click,
									guiding you towards a healthier and happier life.Our platform
									provides a wide range of healthcare resources, from connecting
									you with experienced doctors to offering wellness tips and
									guidance.
								</p>
								<div className="mt-5">
									<Link to="alldoctors">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											View Doctors
										</button>
									</Link>
									<Link to="shop">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											Buy Products
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-3 bottom-0">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								"url(https://i.postimg.cc/fbn7Q55h/young-asian-woman-nurse-caregiver-carer-of-nursing-home-talking-with-senior-asian-woman.webp)",
						}}
					>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-center text-neutral-content mt-20">
							<div className="max-w-md  md:max-w-xl">
								<h1 className="mb-5 text-5xl font-bold">
									Empower Your Health with
									<span className="text-cyan-400 ml-3">Doctreat</span>
								</h1>
								<p className="mb-5 text-justify">
									Unlock the Power of Health with Doctreat: Empower yourself
									with our comprehensive healthcare solutions, taking charge of
									your well-being journey.Our platform offers a wealth of
									resources, from connecting you with experienced healthcare
									professionals to providing valuable wellness insights, all
									designed to help you live your healthiest life
								</p>
								<div className="mt-5">
									<Link to="alldoctors">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											View Doctors
										</button>
									</Link>
									<Link to="shop">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											Buy Products
										</button>
									</Link>
								</div>{" "}
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-3 bottom-0">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								"url(https://i.postimg.cc/9MwDdC3t/medicine-capsules-global-health-with-geometric-pattern-digital-remix-53876-126742.jpg)",
						}}
					>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-center text-neutral-content mt-20">
							<div className="max-w-md  md:max-w-xl">
								<h1 className="mb-5 text-5xl font-bold">
									Connecting You to{" "}
									<span className="text-cyan-300">Quality</span> Healthcare
								</h1>
								<p className="mb-5 text-justify">
									Connecting You to Quality Healthcare: Our mission at Doctreat
									is to bridge the gap between you and top-notch healthcare
									providers, ensuring you receive the best care possible for
									your well-being
								</p>
								<div className="mt-5">
									<Link to="alldoctors">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											View Doctors
										</button>
									</Link>
									<Link to="shop">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											Buy Products
										</button>
									</Link>
								</div>{" "}
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-3 bottom-0">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage:
								"url(https://i.postimg.cc/htsLz5Hb/cool-composition-with-stethoscope-realistic-heart-23-2147652348.jpg)",
						}}
					>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-center text-neutral-content mt-20">
							<div className="max-w-md  md:max-w-xl">
								<h1 className="mb-5 text-5xl font-bold">
									Your <span className="text-cyan-400 mr-3">Health</span>
									Journey Starts Here
								</h1>
								<p className="mb-5 text-justify">
									Your Health Journey Starts Here: At Doctreat, we are dedicated
									to guiding you on a transformative path to better health and
									well-being. Our platform is your gateway to a world of
									healthcare excellence, offering a range of services and
									resources designed to support your journey
								</p>
								<div className="mt-5">
									<Link to="alldoctors">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											View Doctors
										</button>
									</Link>
									<Link to="shop">
										<button
											type="button"
											className="text-white bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br font-medium rounded-lg text-lg px-10 py-3 text-center mr-2 mb-2"
										>
											Buy Products
										</button>
									</Link>
								</div>{" "}
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 right-5 gap-3 bottom-0">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
