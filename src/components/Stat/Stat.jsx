import CountUp from "react-countup";

const Stat = () => {
	return (
		<div className="text-center">
			<div className="stats w-full lg:w-[1000px] stats-vertical lg:stats-horizontal shadow bg-gradient-to-r from-slate-900 via-gray-500 to-slate-400 hover:bg-gradient-to-br rounded-none my-5">
				<div className="stat">
					<div className="stat-title text-blue-400">Registered Users</div>
					<div className="stat-value text-blue-400">
						<CountUp start={1} end={27} duration={5} />
						.3K
					</div>
					<div className="stat-desc text-blue-400">
						29% more than last month
					</div>
				</div>

				<div className="stat">
					<div className="stat-title text-cyan-400">Services provided</div>
					<div className="stat-value text-cyan-400">
						<CountUp start={5} end={302} duration={7} />M
					</div>
					<div className="stat-desc text-cyan-400">
						21% more than last month
					</div>
				</div>

				<div className="stat">
					<div className="stat-value text-gray-700">
						<CountUp start={1} end={99} duration={5} />%
					</div>
					<div className="stat-title text-gray-700">Patient</div>
					<div className="stat-desc text-gray-700">Satisfaction Rate</div>
				</div>
			</div>
		</div>
	);
};

export default Stat;
