import onlineBooking from "../../assets/online.gif";
import appointment from "../../assets/appointment.gif";
import expert from "../../assets/expert.png";
import feedback from "../../assets/feedback.gif";
import { JackInTheBox } from "react-awesome-reveal";

const Work = () => {
	return (
		<div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] bg-cover text-center flex flex-col items-center justify-center h-screen space-y-3 mb-10 py-10">
			<p className="font-bold text-xl">We Made It Simple</p>
			<h1 className="text-6xl font-bold font-serif text-cyan-400">
				How It <span className="text-white">Works?</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32 py-10">
				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img
							className="w-24 h-24 mx-auto mt-5"
							src={onlineBooking}
							alt=""
						/>
						<p className="mt-12 font-serif font-medium text-white">
							Discover Healthcare Specialists
						</p>
					</div>
				</JackInTheBox>
				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img className="w-24 h-24 mx-auto mt-5" src={appointment} alt="" />
						<p className="mt-12 font-serif font-medium text-white">
							Book Appointments Easily
						</p>
					</div>
				</JackInTheBox>
				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img className="w-24 h-24 mx-auto mt-5" src={expert} alt="" />
						<p className="mt-12 font-serif font-medium text-white">
							Experience Expert Care
						</p>
					</div>
				</JackInTheBox>

				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img className="w-24 h-24 mx-auto mt-5" src={feedback} alt="" />
						<p className="mt-12 font-serif font-medium text-white">
							Share Your Insights
						</p>
					</div>
				</JackInTheBox>
			</div>
		</div>
	);
};

export default Work;
