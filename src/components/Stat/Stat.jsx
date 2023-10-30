import CountUp from "react-countup";
import { TiTick } from "react-icons/ti";

const Stat = ({ totalProduct, totalPayment, maxItems, uniqueCategories }) => {
	return (
		<div className="text-center">
			<div className="stats w-full lg:w-[1000px] stats-vertical lg:stats-horizontal shadow-md hover:shadow shadow-black rounded-none my-5">
				<div className="stat">
					<div className="stat-title text-blue-400">Total Product</div>
					<div className="stat-value text-blue-400">
						<CountUp start={1} end={totalProduct} duration={5} />
					</div>
					<div className="stat-desc text-blue-400">
						29% more than last month
					</div>
				</div>
				<div className="stat">
					<div className="stat-title text-cyan-500">Total Spent</div>
					<div className="stat-value text-cyan-500">
						$<CountUp start={5} end={totalPayment} duration={3} />
					</div>
					<div className="stat-desc text-cyan-500">
						21% more than last month
					</div>
				</div>
				<div className="stat">
					<div className="stat-title text-gray-500">Total Categories </div>
					<div className="stat-value text-gray-500">
						<CountUp start={1} end={uniqueCategories.length} duration={3} />
					</div>
				</div>
				<div className="stat">
					<div className="stat-title text-purple-500">
						Top Purchased Product
					</div>
					<div className="stat-value text-purple-500 text-xl">
						{maxItems || "No product"}
					</div>
					<div className="stat-desc text-purple-500 mx-auto">
						<TiTick size={40} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stat;
