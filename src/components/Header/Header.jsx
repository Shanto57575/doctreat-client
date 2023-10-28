import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const Header = () => {
	return (
		<div className="flex items-center justify-between bg-black px-10 py-4 text-white">
			<div className="flex gap-x-2 justify-end">
				<BsFacebook className="border-2 border-white rounded-full h-10 w-10 p-1 text-blue-500 hover:bg-white duration-500 cursor-pointer" />
				<BsTwitter className="border-2 border-white rounded-full h-10 w-10 p-1 text-blue-500 hover:bg-white duration-500 cursor-pointer" />
				<BsLinkedin className="border-2 border-white rounded-full h-10 w-10 p-1 text-blue-500 hover:bg-white duration-500 cursor-pointer" />
			</div>
			<div className="lg:flex gap-x-2">
				<div className="flex items-center gap-x-2">
					<FiClock className="text-white" size={35} />
					<div className="text-sm font-sans font-semibold">
						<p>Monday - Friday 8AM - 7PM</p>
						<p>Saturday and Sunday - CLOSED</p>
					</div>
				</div>
				<div className="flex items-center gap-x-2">
					<AiOutlineMobile className="text-white" size={35} />
					<div className="text-sm font-sans font-semibold">
						<p>+0800 2336 7811</p>
						<p>med@epiccare.com</p>
					</div>
				</div>
				<div className="flex items-center gap-x-2">
					<HiOutlineLocationMarker className="text-white" size={35} />
					<div className="text-sm font-sans font-semibold">
						<p>27th Avenue</p>
						<p>Chittagong, 85E</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
