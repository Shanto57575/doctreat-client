import { Zoom } from "react-awesome-reveal";

const OurServices = () => {
	return (
		<div className="mx-2 md:mx-7 lg:mx-20 text-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
				<Zoom>
					<div className="card w-full md:w-72 h-[500px] glass rounded-none shadow-lg shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://t3.ftcdn.net/jpg/06/24/46/92/240_F_624469261_AVHHjFbwqh4F0kKjVk43Aw022Do0tZyJ.jpg"
								alt="mental health"
								className="h-72 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm text-black py-2 space-y-3 p-10 mt-3">
							<p>Mental Health</p>
							<p className="text-2xl">Psychiatrist</p>
							<p>
								A psychiatrist specializes in mental health, employing a
								holistic approach to understand and treat various mental
								disorders
							</p>
						</h2>
					</div>
				</Zoom>
				<Zoom>
					<div className="card w-full md:w-72 h-[500px] glass rounded-none shadow-lg shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://t4.ftcdn.net/jpg/06/32/46/63/240_F_632466396_GuBS3LHdJ9qg4IAoCZ5a0wLsBcp3Slzq.jpg"
								alt="heart assessment"
								className="h-72 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm text-black py-2 space-y-3 p-10 mt-3">
							<p>Got a broken heart?</p>
							<p className="text-2xl">CARDIOLOGIST</p>
							<p>
								Cardiologists are experts in matters of the heart, focusing on
								the diagnosis and treatment of cardiovascular diseases
							</p>
						</h2>
					</div>
				</Zoom>
				<Zoom>
					<div className="card w-full md:w-72 h-[500px] glass rounded-none shadow-lg shadow-slate-400 hover:shadow hover:shadow-black">
						<figure>
							<img
								src="https://t4.ftcdn.net/jpg/02/81/10/41/240_F_281104117_FvFJ3zDbwjMdga9NDiVyxYdG3nV4xCK2.jpg"
								alt="dental Care"
								className="h-72 w-full"
							/>
						</figure>
						<h2 className="font-serif text-sm text-black py-2 space-y-3 p-10 mt-3">
							<p>For your whitest teeths</p>
							<p className="text-2xl">DENTIST</p>
							<p>
								Dentists are dedicated to oral health, providing essential care
								for teeth and gums
							</p>
						</h2>
					</div>
				</Zoom>
				<Zoom>
					<div className="w-full md:w-72 h-[500px] text-center bg-pink-50 shadow-lg shadow-slate-400 hover:shadow hover:shadow-black">
						<h1 className="text-center font-serif font-semibold text-2xl pt-5 px-5">
							Working Hours
						</h1>
						<p className="px-3 my-2 text-sm font-semibold">
							Your health is our priority, and we are here to accommodate your
							schedule with commitment and care
						</p>
						<div>
							<table className="table font-semibold font-serif">
								<tbody>
									<tr>
										<td>Monday</td>
										<td>8:00 AM – 2:30 PM</td>
									</tr>
									<tr>
										<td>Tuesday</td>
										<td>8:00 AM – 7:00 PM</td>
									</tr>
									<tr>
										<td>Wednesday</td>
										<td>8:00 AM – 7:00 PM</td>
									</tr>
									<tr>
										<td>Thursday</td>
										<td>8:00 AM – 7:00 PM</td>
									</tr>
									<tr>
										<td>Friday</td>
										<td>8:00 AM – 7:00 PM</td>
									</tr>
									<tr>
										<td>Saturday</td>
										<td>Closed</td>
									</tr>
									<tr>
										<td>Sunday</td>
										<td>Closed</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default OurServices;
