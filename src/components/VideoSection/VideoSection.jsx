const VideoSection = () => {
	return (
		<>
			<div className="text-center mt-20 mb-8">
				<h1 className="text-3xl font-serif text-cyan-500 font-bold">
					Serenity Care
				</h1>
				<p>Your Trusted Partner in Health and Wellness</p>
			</div>
			<div className="flex justify-center items-center lg:mx-12 mb-20">
				<div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-cyan-100 px-10 py-20"
					style={{
						backgroundImage:
							"url(https://t3.ftcdn.net/jpg/06/18/55/40/240_F_618554092_nn5Ms82jcwvy0AEDwj6TVKlqErh6Zesh.jpg)",
						backgroundSize: "cover",
					}}
				>
					{/* Video 1 */}
					<div className="relative overflow-hidden rounded-tr-3xl rounded-es-3xl border-4 border-blue-300 shadow-lg shadow-gray-600">
						<video width="100%" height="100%" controls>
							<source src="../../../src/assets/docbrain.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>

					{/* Video 2 */}
					<div className="relative overflow-hidden rounded-tr-3xl rounded-es-3xl border-4 border-blue-300 shadow-lg shadow-gray-600">
						<video width="100%" height="100%" controls>
							<source src="../../../src/assets/docShow.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>

					{/* Video 3 */}
					<div className="relative overflow-hidden rounded-tr-3xl rounded-es-3xl border-4 border-blue-300 shadow-lg shadow-gray-600">
						<video width="100%" height="100%" controls>
							<source
								src="../../../src/assets/doctorScan.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoSection;
