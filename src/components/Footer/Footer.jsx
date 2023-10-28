import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/healthcare.png";

const Footer = () => {
	return (
		<>
			<div className="bg-gray-900 text-white lg:p-10 w-full">
				<div className="flex items-center justify-between mb-10">
					<div className="flex items-center gap-x-2">
						<img src={logo} className="w-10" alt="" />
						<h1 className="md:text-3xl mt-2 font-serif">Epic Care</h1>
					</div>
					<div className="flex items-center gap-x-2 py-4 px-2">
						<BsFacebook
							className="cursor-pointer bg-gray-300 text-gray-950 p-2 hover:bg-gray-950 hover:text-white duration-300"
							size={40}
						/>
						<AiOutlineInstagram
							className="cursor-pointer bg-gray-300 text-gray-950 p-2 hover:bg-gray-950 hover:text-white duration-300"
							size={40}
						/>
						<FaXTwitter
							className="cursor-pointer bg-gray-300 text-gray-950 p-2 hover:bg-gray-950 hover:text-white duration-300"
							size={40}
						/>
						<AiFillLinkedin
							className="cursor-pointer bg-gray-300 text-gray-950 p-2 hover:bg-gray-950 hover:text-white duration-300"
							size={40}
						/>
					</div>
				</div>
				<div className="lg:flex items-center justify-between font-serif">
					<div className="md:w-72 space-y-2 m-5 lg:m-0">
						<h1 className="text-2xl">About Us</h1>
						<p className="text-justify">
							At Epic Care, we are your dedicated online healthcare solution.
							Our team of skilled doctors is committed to providing
							personalized, high-quality care.
						</p>
					</div>
					<div className="md:w-72 font-serif space-y-2 m-5 lg:m-0">
						<h1 className="text-2xl">Get in touch</h1>
						<p>Chattogram, Bangladesh</p>
						<p>CTG 4002, BD</p>
						<p>
							Phone: <span className="font-semibold">+1 5589 55488 55</span>
						</p>
						<p>
							Email: <span className="font-semibold">info@example.com</span>
						</p>
					</div>
					<div className="w-40 text-white font-serif space-y-2 m-5 lg:m-0 mt-2">
						<h1 className="text-2xl">Company</h1>
						<p className="">About us</p>
						<p className="">Contact</p>
						<p className="">Jobs</p>
						<p className="">Press kit</p>
					</div>
					<div className="w-full md:w-72 text-white font-serif space-y-2 px-5">
						<h1 className="text-2xl">Legal Policy</h1>
						<p className="">Terms of use</p>
						<p className="">Privacy policy</p>
						<p className="">Cookie policy</p>
						<form className="font-serif space-y-2 lg:m-0 pb-2">
							<div className="form-control w-full">
								<label className="label">
									<span className="text-white font-semibold">Newsletter</span>
								</label>
								<input
									type="text"
									placeholder="Newsletter"
									className="input input-bordered border w-60 text-black  rounded-none shadow shadow-slate-100"
								/>
								<input
									className="btn bg-gray-600 border-none text-white hover:bg-gray-700 btn-sm w-16 rounded mt-2"
									type="submit"
									value="send"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<p className="text-center p-3 font-serif font-bold bg-slate-700 text-white">
				Copyright © 2023 - All right reserved by Doctreat Ltd
			</p>
		</>
	);
};

export default Footer;
