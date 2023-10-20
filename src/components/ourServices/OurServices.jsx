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
								src="https://t3.ftcdn.net/jpg/03/67/30/02/240_F_367300237_XMw7RvE48rdX4QsjO6uOq81BpenK3zRR.jpg"
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
								src="https://t3.ftcdn.net/jpg/06/24/46/92/240_F_624469261_AVHHjFbwqh4F0kKjVk43Aw022Do0tZyJ.jpg"
								alt="mental health"
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
								src="https://t4.ftcdn.net/jpg/06/32/46/63/240_F_632466396_GuBS3LHdJ9qg4IAoCZ5a0wLsBcp3Slzq.jpg"
								alt="heart assessment"
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
								src="https://t4.ftcdn.net/jpg/03/29/48/17/240_F_329481771_F1BNEWnQJGhQ7uv7DclrclWJi4mOsyNy.jpg"
								alt="diabetes management"
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
								src="https://t3.ftcdn.net/jpg/05/88/77/24/240_F_588772414_xAd21iYu25Jqxp5FRVLB2jPHKhxUA14v.jpg"
								alt="orthopedic care"
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
								src="https://t4.ftcdn.net/jpg/02/81/10/41/240_F_281104117_FvFJ3zDbwjMdga9NDiVyxYdG3nV4xCK2.jpg"
								alt="dental Care"
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
