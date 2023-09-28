import onlineBooking from "../../assets/online.gif";
import appointment from "../../assets/appointment.gif";
import expert from "../../assets/expert.png";
import feedback from "../../assets/feedback.gif";
import { JackInTheBox } from "react-awesome-reveal";

const Work = () => {
	return (
		<div className="bg-[url('../../src/assets/cool-background.png')] bg-cover text-center flex flex-col items-center justify-center h-screen space-y-3 mb-10 py-10">
			<p className="font-bold text-xl">We Made It Simple</p>
			<h1 className="text-6xl font-bold font-serif">
				How It <span className="text-white">Works?</span>
			</h1>
			<div className="flex items-center justify-center gap-x-32 py-10">
				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img
							className="w-24 h-24 mx-auto mt-5"
							src={onlineBooking}
							alt=""
						/>
						<p className="mt-12 font-serif font-medium">
							Discover Healthcare Specialists
						</p>
					</div>
				</JackInTheBox>
				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img className="w-24 h-24 mx-auto mt-5" src={appointment} alt="" />
						<p className="mt-12 font-serif font-medium">
							Book Appointments Easily
						</p>
					</div>
				</JackInTheBox>
				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img className="w-24 h-24 mx-auto mt-5" src={expert} alt="" />
						<p className="mt-12 font-serif font-medium">
							Experience Expert Care
						</p>
					</div>
				</JackInTheBox>

				<JackInTheBox>
					<div className="w-40 h-40 rounded-full bg-white border-8 border-double shadow-md shadow-black">
						<img className="w-24 h-24 mx-auto mt-5" src={feedback} alt="" />
						<p className="mt-12 font-serif font-medium">Share Your Insights</p>
					</div>
				</JackInTheBox>
			</div>
		</div>
	);
};

export default Work;
