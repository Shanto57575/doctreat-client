import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PiSignatureFill } from "react-icons/pi";
import { Fade, Rotate } from "react-awesome-reveal";

const Doctor = () => {
	const [doctors, setDoctors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://doctreat-server.vercel.app/doctors")
			.then((res) => res.json())
			.then((data) => {
				setDoctors(data);
				setLoading(false);
			});
	}, []);

	return (
		<div className="text-center mt-8 bg-slate-100">
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="relative">
						<Fade>
							<div
								className="hero min-h-screen"
								style={{
									backgroundImage:
										"url(https://t4.ftcdn.net/jpg/01/83/24/05/240_F_183240566_su0jKCQkOjCXFzUNmNpAVYz6WV4sdBAM.jpg)",
								}}
							>
								<div className="hero-overlay bg-opacity-50"></div>
								<div className="hero-content text-start text-neutral-content mt-20">
									<div className="p-5 md:p-16 space-y-5 h-full">
										<h3 className="text-xl font-serif text-black italic">
											Dr. Stephanie Wosniack
										</h3>
										<p className="border w-20 border-blue-400 my-2"></p>
										<h1 className="md:text-6xl font-serif">
											OUR <span className="text-blue-400 font-bold">TEAM</span>
										</h1>
										<p className="md:text-lg font-serif md:w-1/2 md:text-justify text-gray-100">
											Dr. Stephanie Wosniack is dedicated to providing her
											patients with exemplary care. After personally
											experiencing successful treatment for various aches and
											pains over the years, Dr. Wosniack discovered her calling
											to assist others in their journey to wellness.
										</p>
										<PiSignatureFill
											size={100}
											className="text-black font-thin"
										/>
									</div>
								</div>
							</div>
						</Fade>
						<div className="absolute inset-x-0 -bottom-7 text-center my-2">
							<Link to="/alldoctors">
								<button
									type="button"
									className="bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 duration-300 border border-blue-100 px-3 py-2 rounded font-semibold font-serif"
								>
									See More
								</button>
							</Link>
						</div>
					</div>
					<div className="mx-2 md:mx-10 flex items-center justify-evenly flex-wrap font-serif my-10">
						<Rotate>
							{doctors.map((doctor) => (
								<div
									key={doctor._id}
									className="mb-10 w-full md:w-64 border shadow shadow-gray-600 rounded-none bg-white"
								>
									<figure className="relative border-b-4 border-blue-400">
										<img className="w-full h-48" src={doctor.picture} alt="" />
										<h2 className="absolute top-44 right-2 text-blue-400 font-extrabold bg-slate-950 hover:bg-white hover:border hover:border-blue-400 duration-300 rounded-full px-3 py-1.5">
											{doctor.experience}
										</h2>
									</figure>
									<div className="px-5 space-y-2 my-5">
										<h2 className="text-start">{doctor.speciality}</h2>
										<p className="text-start text-xl font-bold">
											{doctor.name}
										</p>
										<p className="text-sm text-justify">
											Nurturing health with skilled hands, a doctors expertise
											combines with compassionate hearts to mend the threads of
											well-being
										</p>
										<div className="flex gap-x-2 justify-end">
											<BsFacebook className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
											<BsTwitter className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
											<BsLinkedin className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
										</div>
									</div>
								</div>
							))}
						</Rotate>
					</div>
				</>
			)}
		</div>
	);
};

export default Doctor;
