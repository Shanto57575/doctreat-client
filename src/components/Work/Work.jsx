const Work = () => {
	return (
		<div
			className="text-center flex flex-col items-center justify-center space-y-3 px-20 mb-20 lg:mx-12"
			style={{
				backgroundImage:
					"url(https://t4.ftcdn.net/jpg/01/59/24/31/240_F_159243177_Gs9zSYQkeuniFZKAboLB3yBw0hlWSHKZ.jpg)",
				backgroundSize: "cover",
				height: "450px",
			}}
		>
			<p className="font-bold text-xl text-black font-serif underline">
				We Made It Simple
			</p>
			<h1 className="text-6xl font-bold font-serif text-gray-700">
				How We <span className="text-black">Works?</span>
			</h1>
			<ul className="steps steps-vertical lg:steps-horizontal">
				<li className="step w-60 step-info mr-3 text-black font-serif font-extrabold">
					Choose Specialists
				</li>
				<li className="step step-info mr-3 text-black font-serif font-extrabold">
					Book Appointment
				</li>
				<li className="step step-info mr-3 text-black font-serif font-extrabold">
					Take Advice
				</li>
				<li className="step step-[#000000] mr-3 text-black font-serif font-extrabold">
					Give Feedback
				</li>
			</ul>
		</div>
	);
};

export default Work;
