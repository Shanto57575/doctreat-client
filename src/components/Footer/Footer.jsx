import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/healthcare.png";

const Footer = () => {
	return (
		<div className="bg-[url('../../../src/assets/backImg.svg')] p-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className="font-serif text-white space-y-2 m-5 lg:m-0">
					<div className="flex items-center gap-4">
						<img src={logo} className="w-10" alt="" />
						<h1 className="text-3xl mt-2">DocTreat</h1>
					</div>
					<p>Chattogram, Bangladesh</p>
					<p>CTG 4002, BD</p>
					<p>
						Phone: <span className="font-semibold">+1 5589 55488 55</span>
					</p>
					<p>
						Email: <span className="font-semibold">info@example.com</span>
					</p>
					<p className="flex items-center gap-4">
						<BsFacebook size={22} />
						<AiOutlineInstagram size={22} />
						<FaXTwitter size={22} />
						<AiFillLinkedin size={22} />
					</p>
				</div>
				<nav className="text-white font-serif space-y-2 m-5 lg:m-0 mt-2">
					<header className="text-3xl">Company</header>
					<a className="link link-hover block">About us</a>
					<a className="link link-hover block">Contact</a>
					<a className="link link-hover block">Jobs</a>
					<a className="link link-hover block">Press kit</a>
				</nav>
				<nav className="text-white font-serif space-y-2 m-5 lg:m-0 mt-2">
					<header className="text-3xl">Legal</header>
					<a className="link link-hover block">Terms of use</a>
					<a className="link link-hover block">Privacy policy</a>
					<a className="link link-hover block">Cookie policy</a>
				</nav>
				<form className="text-white font-serif space-y-2 m-5 lg:m-0 mt-2">
					<header className="text-3xl">Newsletter</header>
					<fieldset className="form-control w-80">
						<label className="label">
							<span className="label-text">Enter your email address</span>
						</label>
						<div className="relative">
							<input
								type="text"
								placeholder="username@gmail.com"
								className="input input-bordered w-full pr-16"
							/>
							<button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
								Subscribe
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Footer;
