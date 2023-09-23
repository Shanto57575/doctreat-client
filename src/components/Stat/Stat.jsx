import CountUp from "react-countup";

const Stat = () => {
	return (
		<div className="stats shadow-2xl shadow-slate-400 mb-10 rounded-none bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
			<div className="stat">
				<div className="stat-figure text-blue-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						></path>
					</svg>
				</div>
				<div className="stat-title text-white">Registered Users</div>
				<div className="stat-value text-blue-400">
					<CountUp start={1} end={27} duration={5} />
					.3K
				</div>
				<div className="stat-desc text-blue-400">29% more than last month</div>
			</div>

			<div className="stat">
				<div className="stat-figure text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<div className="stat-title text-white">Services provided</div>
				<div className="stat-value text-white">
					<CountUp start={5} end={302} duration={7} />M
				</div>
				<div className="stat-desc text-white">21% more than last month</div>
			</div>

			<div className="stat">
				<div className="stat-figure text-secondary">
					<div className="avatar online">
						<div className="w-16 rounded-full">
							<img src="https://i.postimg.cc/KjTHLkv7/portrait-of-a-smiling-doctor-holding-glasses-and-a-mobile-phone-at-the-office.webp" />
						</div>
					</div>
				</div>
				<div className="stat-value">
					<CountUp start={1} end={99} duration={5} />%
				</div>
				<div className="stat-title">Patient</div>
				<div className="stat-desc text-black">Satisfaction Rate</div>
			</div>
		</div>
	);
};

export default Stat;
