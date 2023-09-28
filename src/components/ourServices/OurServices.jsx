import { Zoom } from "react-awesome-reveal";

const OurServices = () => {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-serif text-cyan-500 font-bold">
				Our Services
			</h1>
			<p>Compassionate Care, Exceptional Results</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-16">
				<Zoom>
					<div className="card w-full md:w-80 glass rounded-xl bg-gray-900 shadow-md shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://img.freepik.com/free-vector/oncology-patient-concept-illustration_114360-8775.jpg?size=626&ext=jpg&ga=GA1.1.1465835371.1691437873&semt=ais"
								alt="cancer"
								className="h-44 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm font-semibold py-2 text-cyan-500">
							Oncology Consultations
						</h2>
					</div>
				</Zoom>
				<Zoom>
					<div className="card w-full md:w-80 glass rounded-xl bg-gray-900 shadow-md shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://img.freepik.com/free-vector/hand-drawn-visit-psychologist-concept_52683-69070.jpg?size=626&ext=jpg&ga=GA1.1.1465835371.1691437873&semt=sph"
								alt="cancer"
								className="h-44 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm font-semibold py-2 text-cyan-500">
							Mental Health
						</h2>
					</div>
				</Zoom>

				<Zoom>
					<div className="card w-full md:w-80 glass rounded-xl bg-gray-900 shadow-md shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://img.freepik.com/free-vector/cardiologists-examining-heart-with-stethoscope-blood-samples-lab-tubes-among-pills-heartbeat-diagram-vector-illustration-cardiology-medical-examination-heart-disease-concept_74855-9817.jpg?size=626&ext=jpg&ga=GA1.2.1465835371.1691437873&semt=ais"
								alt="cancer"
								className="h-44 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm font-semibold py-2 text-cyan-500">
							Heart Assessment
						</h2>
					</div>
				</Zoom>

				<Zoom>
					<div className="card w-full md:w-80 glass rounded-xl bg-gray-900 shadow-md shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://img.freepik.com/free-vector/doctor-with-magnifier-blood-glucose-testing-meter-diabetes-mellitus-type-2-diabetes-insulin-production-concept-white-background-pinkish-coral-bluevector-isolated-illustration_335657-1530.jpg?size=626&ext=jpg&ga=GA1.1.1465835371.1691437873&semt=ais"
								alt="cancer"
								className="h-44 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm font-semibold py-2 text-cyan-500">
							Diabetes Management
						</h2>
					</div>
				</Zoom>

				<Zoom>
					<div className="card w-full md:w-80 glass rounded-xl bg-gray-900 text-red-600 shadow-md shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://img.freepik.com/free-vector/orthopedic-concept-illustration_114360-8807.jpg?size=626&ext=jpg&ga=GA1.1.1465835371.1691437873&semt=ais"
								alt="cancer"
								className="h-44 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm font-semibold py-2 text-cyan-500">
							Orthopedic Care
						</h2>
					</div>
				</Zoom>

				<Zoom>
					<div className="card w-full md:w-80 glass rounded-xl bg-gray-900 text-red-600 shadow-md shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://img.freepik.com/free-vector/dental-care-concept-illustration_52683-65383.jpg?size=626&ext=jpg&ga=GA1.2.1465835371.1691437873&semt=ais"
								alt="cancer"
								className="h-44 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm font-semibold py-2 text-cyan-500">
							Dental Care
						</h2>
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default OurServices;
