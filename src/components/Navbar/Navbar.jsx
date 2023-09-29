import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/healthcare.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then()
			.catch((error) => console.log(error.message));
		navigate("/");
		Swal.fire({
			position: "center",
			icon: "success",
			title: "LoggedOut successfully!",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	const navItems = (
		<div className="z-10 px-5 py-1 lg:inline-flex font-semibold text-lg font-serif rounded-full shadow-xl border-b border-t border-slate-300">
			<li>
				<Link
					className={
						location.pathname === "/"
							? "text-white text-xl hover:text-white"
							: "text-xl hover:text-white"
					}
					to="/"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					className={
						location.pathname === "/about"
							? "text-white text-xl hover:text-white"
							: "text-xl hover:text-white"
					}
					to="/about"
				>
					About
				</Link>
			</li>
			<li>
				<Link
					className={
						location.pathname === "/appointment"
							? "text-white text-xl hover:text-white"
							: "text-xl hover:text-white"
					}
					to="/appointment"
				>
					Appointment
				</Link>
			</li>
		</div>
	);

	return (
		<div className="bg-gradient-to-r from-gray-900 via-gray-400 to-gray-100 navbar md:px-12">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<HiOutlineBars3 size={22} className="text-blue-500" />
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
					>
						{navItems}
					</ul>
				</div>
				<Link
					to="#"
					className="flex items-center gap-2 font-serif font-semibold md:text-2xl text-cyan-500"
				>
					<img src={logo} className="w-10 h-10" alt="" />
					<span className="mt-2 md:text-3xl text-white">Epic Care</span>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex z-10">
				<ul className="menu menu-horizontal px-1">{navItems}</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<button
						type="button"
						className="flex items-center gap-3 text-white bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 hover:bg-gradient-to-br font-medium rounded-full text-sm px-2 py-2 md:px-5 md:py-3.5 text-center mr-2 mb-2"
					>
						<HiOutlineBars3 size={22} />
						{user ? (
							<p>
								<img
									src={user.photoURL}
									className="w-10 h-10 rounded-full p-0"
									alt=""
									title={user?.displayName}
								/>
							</p>
						) : (
							<FaUserCircle size={22} />
						)}
					</button>
					<ul
						tabIndex={0}
						className="z-50 p-2 shadow menu dropdown-content bg-gray-500 text-white rounded font-serif w-48"
					>
						{user ? (
							<li>
								<span onClick={handleLogOut}>Logout</span>
							</li>
						) : (
							<li>
								<Link to="/login">Login</Link>
							</li>
						)}
						<li>
							<Link to="/register">Sign up</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
