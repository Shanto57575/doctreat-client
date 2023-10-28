import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { VscFeedback } from "react-icons/vsc";
import { MdComment } from "react-icons/md";

const Work = () => {
	return (
		<div
			className="h-96 text-center flex flex-col items-center justify-center bg-gray-100"
			// style={{
			// 	backgroundImage:
			// 		"url(https://t4.ftcdn.net/jpg/06/37/36/09/240_F_637360931_Tx6E5x8HM7TEL58No5iMdBpZT5JdzYRo.jpg)",
			// 	backgroundSize: "cover",
			// 	// height: "100vh",
			// }}
		>
			<p className="font-bold text-3xl text-cyan-500 font-serif mb-1">
				Care Unveiled
			</p>
			<h1 className="font-serif mb-5">Our Proven Healing Process</h1>
			<ul className="steps steps-vertical lg:steps-horizontal mt-10">
				<li className="step w-60 step-info mr-3 text-cyan-600 font-serif font-extrabold">
					<span>Choose Specialists</span>
					<FaUserDoctor className="hidden lg:inline" size={35} />
				</li>
				<li className="step step-info mr-3 text-cyan-600 font-serif font-extrabold">
					<span>Book Appointment</span>
					<BsBookmarkPlusFill className="hidden lg:inline" size={30} />
				</li>
				<li className="step step-info mr-3 text-cyan-600 font-serif font-extrabold">
					<span>Take Advice</span>
					<VscFeedback className="hidden lg:inline" size={35} />
				</li>
				<li className="step mr-3 text-cyan-600 font-serif font-extrabold">
					<span>Give Feedback</span>
					<MdComment className="hidden lg:inline" size={35} />
				</li>
			</ul>
		</div>
	);
};

export default Work;
