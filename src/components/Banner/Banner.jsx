const Banner = () => {
	return (
		<>
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img
						src="https://i.postimg.cc/9MwDdC3t/medicine-capsules-global-health-with-geometric-pattern-digital-remix-53876-126742.jpg"
						className="w-full md:h-[600px]"
					/>
					<div className="text-center justify-center text-white absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
						<div className="ml-2 md:ml:10 lg:ml-20 md:w-3/4">
							<h1 className="text-xl md:text-5xl lg:text-7xl font-bold space-y-5 mb-5 px-3">
								Welcome to <span className="text-cyan-400">Doctreat</span>, Your
								Path to Wellness
							</h1>
							<p className="m-4 hidden md:block space-y-8 font-semibold">
								Discover a world of health and healing in just a click, guiding
								you towards a healthier and happier life.Our platform provides a
								wide range of healthcare resources, from connecting you with
								experienced doctors to offering wellness tips and guidance.
							</p>
							<div className="mt-5">
								<button className="btn btn-info mr-3">VIew Hospitals</button>
								<button className="btn btn-outline btn-info">
									VIew Doctors
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img
						src="https://i.postimg.cc/3RxsT2Y3/neurons-concept.webp"
						className="w-full md:h-[600px]"
					/>

					<div className="text-center justify-center text-white absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
						<div className="ml-2 md:ml:10 lg:ml-20 md:w-3/4">
							<h1 className="text-xl md:text-5xl lg:text-7xl font-bold space-y-5 mb-5">
								Empower Your Health with
								<span className="text-cyan-400 ml-3">Doctreat</span>
							</h1>
							<p className="m-4 hidden md:block space-y-8 font-semibold">
								Unlock the Power of Health with Doctreat: Empower yourself with
								our comprehensive healthcare solutions, taking charge of your
								well-being journey.Our platform offers a wealth of resources,
								from connecting you with experienced healthcare professionals to
								providing valuable wellness insights, all designed to help you
								live your healthiest life
							</p>
							<div className="mt-5">
								<button className="btn btn-info mr-3">VIew Hospitals</button>
								<button className="btn btn-outline btn-info">
									VIew Doctors
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img
						src="https://i.postimg.cc/x1gNY6yH/young-handsome-physician-medical-robe-with-stethoscope-1303-17818.jpg"
						className="w-full md:h-[600px]"
					/>
					<div className="text-center justify-center text-white absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
						<div className="ml-2 md:ml:10 lg:ml-20 md:w-3/4">
							<h1 className="text-xl md:text-5xl lg:text-7xl font-bold space-y-5 mb-5">
								Connecting You to <span className="text-cyan-300">Quality</span>{" "}
								Healthcare
							</h1>
							<p className="m-4 hidden md:block space-y-8 font-semibold">
								Connecting You to Quality Healthcare: Our mission at Doctreat is
								to bridge the gap between you and top-notch healthcare
								providers, ensuring you receive the best care possible for your
								well-being
							</p>
							<div className="mt-5">
								<button className="btn btn-info mr-3">VIew Hospitals</button>
								<button className="btn btn-outline btn-info">
									VIew Doctors
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img
						src="https://i.postimg.cc/htsLz5Hb/cool-composition-with-stethoscope-realistic-heart-23-2147652348.jpg"
						className="w-full md:h-[600px]"
					/>
					<div className="text-center justify-center text-white absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
						<div className="ml-2 md:ml:10 lg:ml-20 md:w-3/4">
							<h1 className="text-xl md:text-5xl lg:text-7xl font-bold space-y-5 mb-5">
								Your <span className="text-cyan-400 mr-3">Health</span>
								Journey Starts Here
							</h1>
							<p className="m-4 hidden md:block space-y-8 font-semibold">
								Your Health Journey Starts Here: At Doctreat, we are dedicated
								to guiding you on a transformative path to better health and
								well-being. Our platform is your gateway to a world of
								healthcare excellence, offering a range of services and
								resources designed to support your journey
							</p>
							<div className="mt-5">
								<button className="btn btn-info mr-3">VIew Hospitals</button>
								<button className="btn btn-outline btn-info">
									VIew Doctors
								</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
