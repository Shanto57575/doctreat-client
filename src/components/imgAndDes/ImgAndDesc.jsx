const ImgAndDesc = () => {
	return (
		<div className="md:flex items-center justify-between mx-10 md:mt-32 mb-24">
			<div className="w-full md:w-1/2">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.postimg.cc/QdPvjvXr/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai-188544-12529.jpg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.postimg.cc/7L973rbF/interior-modern-emergency-room-with-empty-nurses-station-generative-ai-587448-2017.jpg"
							/>
						</div>
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.postimg.cc/LXvT8ZzZ/successful-medical-team-329181-9252.jpg"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.postimg.cc/bN2t6FmB/heartbeat-with-heart-rate-graph-1308-105251.jpg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.postimg.cc/prtLKjJR/medical-banner-with-doctor-wearing-goggles-23-2149611193.jpg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.postimg.cc/MTh7s2Jd/medical-supply-elements-set-1284-16016.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 space-y-5 bg-gradient-to-r from-cyan-700 to-[rgba(21, 21, 21, 0)] rounded-md md:ml-10 px-10 py-8 mt-5 md:mt-0">
				<h1 className="text-3xl font-bold font-serif text-gray-900">
					Your Path to Health and Healing
				</h1>
				<p className="font-medium text-justify">
					Welcome to Doctreat, where we bring together the art and science of
					healing. Our gallery below offers a glimpse into the world of medical
					care we provide. From the precision of surgical theaters to the
					compassionate expertise of our doctors, every image represents our
					unwavering commitment to your well-being and a healthier future
				</p>
				<blockquote className="italic text-2xl font-extrabold text-gray-900 font-serif text-justify">
					Your health is your wealth. Let us help You invest in a brighter,
					healthier future
				</blockquote>
				<button
					type="button"
					className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2"
				>
					Learn More
				</button>
			</div>
		</div>
	);
};

export default ImgAndDesc;
