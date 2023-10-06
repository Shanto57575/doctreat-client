import onlineBooking from "../../assets/online.gif";
import appointment from "../../assets/appointment.gif";
import expert from "../../assets/expert.png";
import feedback from "../../assets/feedback.gif";
import { JackInTheBox } from "react-awesome-reveal";

const Work = () => {
	return (
		<div className="bg-gray-600 text-center flex flex-col items-center justify-center space-y-3 mb-10 py-10">
			<p className="font-bold text-xl text-white font-serif underline">
				We Made It Simple
			</p>
			<h1 className="text-6xl font-bold font-serif text-cyan-400">
				How It <span className="text-white">Works?</span>
			</h1>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-20 p-10">
				<JackInTheBox>
					<div>
						<img
							className="w-24 h-24 mx-auto mt-5"
							src={onlineBooking}
							alt=""
						/>
						<p className="mt-5 font-serif font-medium text-white">
							Choose Specialists
						</p>
					</div>
				</JackInTheBox>
				<JackInTheBox>
					<div>
						<img className="w-24 h-24 mx-auto mt-5" src={appointment} alt="" />
						<p className="mt-5 font-serif font-medium text-white">
							Book Appointment
						</p>
					</div>
				</JackInTheBox>
				<JackInTheBox>
					<div>
						<img className="w-24 h-24 mx-auto mt-5" src={expert} alt="" />
						<p className="mt-5 font-serif font-medium text-white">
							Take Advice
						</p>
					</div>
				</JackInTheBox>

				<JackInTheBox>
					<div>
						<img className="w-24 h-24 mx-auto mt-5" src={feedback} alt="" />
						<p className="mt-5 font-serif font-medium text-white">
							Give Feedback
						</p>
					</div>
				</JackInTheBox>
			</div>
		</div>
	);
};

export default Work;
