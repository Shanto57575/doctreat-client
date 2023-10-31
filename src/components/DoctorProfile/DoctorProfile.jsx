import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DoctorProfile = () => {
	const { id } = useParams();
	const [axiosSecure] = useAxiosSecure();
	const [doctorData, setDoctorData] = useState([]);

	useEffect(() => {
		axiosSecure.get(`/alldoctors/${id}`).then((res) => {
			console.log(res.data);
			setDoctorData(res.data);
		});
	}, [axiosSecure, id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Appointment Booked!",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	return (
		<div className="pt-28 md:mx-10 lg:mx-20 lg:flex items-center justify-center gap-5">
			<div className="w-full lg:w-1/3 card bg-base-100 shadow-xl rounded-none font-serif italic">
				<figure>
					<img src={doctorData.picture} className="w-full h-80" alt="Doctor" />
				</figure>
				<div className="card-body font-serif font-bold">
					<h2 className="card-title">{doctorData.name}</h2>
					<p className="badge badge-accent badge-outline p-2.5">
						{doctorData.experience} of experience
					</p>
					<p>{doctorData.service}</p>
					<p>
						Department of{" "}
						<span className="text-blue-400 text-2xl ml-1">
							{doctorData.speciality}
						</span>
					</p>
					<p className="text-3xl">${doctorData.fees}</p>
					<p>{doctorData.country}</p>
					<p>{doctorData.contact}</p>
					<p>{doctorData.availability}</p>
					<div className="gap-2 text-center w-full lg:w-[20%] space-x-2 space-y-3 border-cyan-600">
						<button
							onClick={() => document.getElementById("my_modal_5").showModal()}
							className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
						>
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Book Your Appointment
							</span>
						</button>
						<dialog
							id="my_modal_5"
							className="modal modal-bottom sm:modal-middle"
						>
							<div className="modal-box">
								<h1 className="text-blue-400 text-xl font-bold font-serif italic underline mb-8">
									Appointment Form
								</h1>
								<div className="flex items-center justify-center px-12 pb-12">
									<div className="mx-auto w-full max-w-[550px]">
										<form onSubmit={handleSubmit}>
											<div className="-mx-3 flex flex-wrap">
												<div className="w-full px-3 sm:w-1/2">
													<div className="mb-5">
														<label
															htmlFor="fName"
															className="mb-3 block text-base font-medium text-cyan-600"
														>
															First Name
														</label>
														<input
															required
															type="text"
															name="fName"
															id="fName"
															placeholder="First Name"
															className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
														/>
													</div>
												</div>
												<div className="w-full px-3 sm:w-1/2">
													<div className="mb-5">
														<label
															htmlFor="lName"
															className="mb-3 block text-base font-medium text-cyan-600"
														>
															Last Name
														</label>
														<input
															required
															type="text"
															name="lName"
															id="lName"
															placeholder="Last Name"
															className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
														/>
													</div>
												</div>
											</div>
											<div className="-mx-3 flex flex-wrap">
												<div className="w-full px-3 sm:w-1/2">
													<div className="mb-5">
														<label className="label">
															<span className="label-text">Choose Gender</span>
														</label>
														<select
															defaultValue="Gender"
															className="select select-bordered w-full"
														>
															<option disabled>Gender</option>
															<option>Male</option>
															<option>Female</option>
														</select>
													</div>
												</div>
												<div className="w-full px-3 sm:w-1/2">
													<div className="mb-5">
														<label
															htmlFor="time"
															className="mb-3 block text-base font-medium text-cyan-600"
														>
															Age
														</label>
														<input
															required
															type="text"
															name="age"
															id="age"
															placeholder="Age"
															className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-cyan-500 focus:shadow-md"
														/>
													</div>
												</div>
											</div>
											<input
												className="btn relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-400 hover:bg-blue-500 text-white rounded-md group-hover:bg-opacity-0"
												type="submit"
												value="Submit"
											/>
										</form>
									</div>
								</div>
								<div className="modal-action">
									<form method="dialog">
										<button className="btn">close</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-2/3 text-justify text-sm font-mono my-10 md:m-4 lg:m-0">
				<h1 className="text-2xl text-blue-400 font-serif font-bold text-center mb-5 italic underline">
					{`Navigating the Depths of ${doctorData.speciality}`}
				</h1>
				<p>
					In the vast and intricate world of healthcare, medicine stands as a
					beacon of hope and healing. Its a field that continuously evolves,
					driven by relentless curiosity, technological advancements, and the
					unwavering commitment of medical professionals. Join us on a journey
					as we explore the multifaceted realm of medicine, where science and
					compassion intertwine to improve lives and conquer diseases. Body: 1.
					**The Art and Science of Medicine:** Medicine is both an art and a
					science. On one hand, it relies on rigorous scientific principles,
					research, and technological innovations. On the other, it demands a
					nuanced understanding of individual patients, their stories, and the
					human experience. The blend of these elements creates a unique
					tapestry where practitioners not only diagnose and treat but also
					empathize and heal. 2. **Innovations Shaping the Future:** The
					landscape of medicine is ever-changing, with breakthrough innovations
					transforming the way we approach healthcare. From gene therapies and
					precision medicine to artificial intelligence and telemedicine,
					technology is at the forefront of revolutionizing patient care. These
					advancements hold the promise of more personalized and effective
					treatments, pushing the boundaries of what is possible in the realm of
					healing. 3. **Challenges and Ethical Dilemmas:** While medicine brings
					about remarkable progress, it also grapples with challenges and
					ethical dilemmas. The balance between providing accessible healthcare
					and navigating the financial complexities of the industry is an
					ongoing struggle. Additionally, emerging technologies raise questions
					about privacy, consent, and the potential for unintended consequences.
					Exploring these issues is crucial for fostering a responsible and
					ethical medical practice. 4. **Global Health:** Medicine extends
					beyond individual patients and transcends borders. Global health
					initiatives aim to address health disparities, infectious diseases,
					and public health crises on a worldwide scale. Collaborative efforts
					among nations, organizations, and healthcare professionals play a
					pivotal role in shaping a healthier and more equitable global
					community. 5. **Mental Health and Wellness:** The understanding of
					health has expanded to encompass not only the physical but also the
					mental and emotional well-being of individuals. Medicine now
					recognizes the intricate connection between mind and body, leading to
					a more holistic approach to patient care. Breaking the stigma
					surrounding mental health and integrating mental health services into
					mainstream healthcare are essential steps toward a comprehensive
					healing journey. Conclusion: In the ever-evolving tapestry of
					medicine, the threads of science, compassion, and innovation weave
					together to create a mosaic of healing. As we navigate the depths of
					this vast field, its essential to recognize not only the progress and
					triumphs but also the challenges and ethical considerations that shape
					the future of healthcare. Ultimately, medicine is a journey—one that
					requires continuous exploration, collaboration, and a steadfast
					commitment to improving the well-being of individuals and communities
					around the globe
				</p>
			</div>
		</div>
	);
};

export default DoctorProfile;
