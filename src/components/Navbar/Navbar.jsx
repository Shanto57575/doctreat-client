import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/healthcare.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
	const location = useLocation();
	const { user, logOut } = useContext(AuthContext);
	const [cart] = useCart();
	const [isAdmin] = useAdmin();
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error.message));
		navigate("/");
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Logged Out successfully!",
			showConfirmButton: false,
			timer: 1500,
		});
	};

	const navItems = (
		<div className="lg:inline-flex font-semibold font-serif">
			<li>
				<Link
					className={
						location.pathname === "/"
							? "text-white lg:text-xl border-b-4 hover:text-white"
							: "lg:text-xl text-white"
					}
					to="/"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					className={
						location.pathname === "/shop"
							? "text-white lg:text-xl border-b-4 hover:text-white"
							: "lg:text-xl text-white"
					}
					to="/shop"
				>
					Shop
				</Link>
			</li>
			<li>
				<Link
					className={
						location.pathname === "/alldoctors"
							? "text-white lg:text-xl border-b-4 hover:text-white"
							: "lg:text-xl text-white"
					}
					to="/alldoctors"
				>
					Doctors
				</Link>
			</li>
			{user && isAdmin ? (
				<li>
					<Link
						to="dashboard/adminhome"
						className={
							location.pathname === "dashboard/adminhome"
								? "text-white lg:text-xl border-b-4 hover:text-white"
								: "lg:text-xl text-white"
						}
					>
						Dashboard
					</Link>
				</li>
			) : (
				user && (
					<li>
						<Link
							to="dashboard/userhome"
							className={
								location.pathname === "dashboard/userhome"
									? "text-white lg:text-xl border-b-4 hover:text-white"
									: "lg:text-xl text-white"
							}
						>
							Dashboard
						</Link>
					</li>
				)
			)}
		</div>
	);

	return (
		<>
			<div className="navbar fixed z-10 bg-black bg-opacity-20 h-20 pr-5 md:px-12">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<HiOutlineBars3 size={22} className="text-white" />
						</label>
						<ul
							tabIndex={0}
							className="z-10 menu menu-sm dropdown-content shadow rounded-box w-44 bg-slate-400"
						>
							{navItems}
						</ul>
					</div>
					<Link
						to="#"
						className="flex items-center gap-2 font-serif font-semibold md:text-2xl text-cyan-500"
					>
						<img src={logo} className="w-10 h-10" alt="logo" />
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
							className="flex items-center gap-x-2 text-white hover:bg-gradient-to-br font-medium rounded-full text-sm p-2 md:px-5 md:py-2 text-center mr-2 my-2 border-y-2 border-4"
						>
							{user && !isAdmin ? (
								<div className="indicator">
									<span className="indicator-item badge badge-secondary">
										{cart?.length || 0}
									</span>
									<FaShoppingCart size={30} />
								</div>
							) : (
								<></>
							)}

							<HiOutlineBars3 size={22} />
							{user ? (
								<p>
									<span
										className="tooltip tooltip-bottom tooltip-info"
										data-tip={`${user?.displayName}`}
									>
										<img
											src={user.photoURL}
											className="w-10 h-10 rounded-full p-0 tooltip"
											alt=""
										/>
									</span>
								</p>
							) : (
								<FaUserCircle size={22} />
							)}
						</button>
						<ul
							tabIndex={0}
							className="z-50 p-2 shadow menu dropdown-content bg-gray-700 text-white rounded font-serif w-40"
						>
							{user ? (
								<li>
									<span onClick={handleLogOut}>
										<FiLogOut size={20} /> Logout
									</span>
								</li>
							) : (
								<>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/register">Sign up</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
