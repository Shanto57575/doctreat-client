import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import Loader from "../Loader/Loader";

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
		<div className="text-center space-y-3">
			<h4 className="font-semibold text-3xl text-cyan-600 font-serif">
				Top Rated Specialists
			</h4>
			<h1 className="">Life-Saving Healing Expert </h1>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="mx-2 md:mx-10 flex items-center justify-evenly flex-wrap font-serif">
						{doctors.map((doctor) => (
							<div
								key={doctor._id}
								className="mb-10 w-full md:w-72 glass rounded-xl shadow-2xl hover:shadow-xl shadow-slate-700 bg-gray-700 text-white"
							>
								<figure className="relative border-b-4 border-cyan-600">
									<Zoom>
										<img
											className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-600 my-5"
											src={doctor.picture}
											alt="doctor"
										/>
									</Zoom>
									<h2 className="absolute top-40 right-2 text-cyan-500 font-extrabold bg-slate-950 rounded-full px-3 py-1.5">
										{doctor.experience}
									</h2>
								</figure>
								<div className="px-5 space-y-2 my-5">
									<p className="card-title">{doctor.name}</p>
									<h2 className="card-title">{doctor.speciality}</h2>
									<div className="flex items-center justify-between">
										<h2 className="card-title">
											Fees:{" "}
											<span className="text-cyan-400">${doctor.fees}</span>
										</h2>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center">
						<Link to="/alldoctors">
							<button
								type="button"
								className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
							>
								Show All
							</button>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default Doctor;
