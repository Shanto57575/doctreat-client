import { Helmet } from "react-helmet-async";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
	FaHome,
	FaNotesMedical,
	FaShoppingCart,
	FaUsers,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { AiFillShopping } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaMoneyCheckDollar, FaUserDoctor } from "react-icons/fa6";
import { useContext } from "react";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdManageHistory } from "react-icons/md";

const DashBoard = () => {
	const location = useLocation();
	const [cart] = useCart();
	const [isAdmin] = useAdmin();
	const { logOut } = useContext(AuthContext);
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

	return (
		<>
			<Helmet>
				<title>Doctreat | Dashboard</title>
			</Helmet>

			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet />
					<label
						htmlFor="my-drawer-2"
						className="btn bg-blue-200 hover:bg-sky-300 w-full text-black drawer-button lg:hidden rounded-none"
					>
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-56 min-h-full bg-blue-200 text-black">
						{isAdmin ? (
							<>
								<li>
									<Link
										to="/dashboard/adminhome"
										className={
											location.pathname === "/dashboard/adminhome"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-2 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<RiAdminFill size={30} />
										Admin Home
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/adddoctor"
										className={
											location.pathname === "/dashboard/adddoctor"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<FaUserDoctor size={30} />
										Add Doctor
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/addproduct"
										className={
											location.pathname === "/dashboard/addproduct"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<FaNotesMedical size={30} />
										Add product
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/users"
										className={
											location.pathname === "/dashboard/users"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<div>
											<FaUsers size={30} />
										</div>
										All user
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link
										to="/dashboard/userhome"
										className={
											location.pathname === "/dashboard/userhome"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<FaHome size={30} />
										User Home
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/mycart"
										className={
											location.pathname === "/dashboard/mycart"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<div className="indicator">
											<span className="indicator-item badge badge-secondary">
												{cart?.length || 0}
											</span>
											<FaShoppingCart size={30} />
										</div>
										My cart
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/payment"
										className={
											location.pathname === "/dashboard/payment"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-lg font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<div>
											<FaMoneyCheckDollar size={30} />
										</div>
										Payment
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/history"
										className={
											location.pathname === "/dashboard/history"
												? "bg-black text-white lg:text-xl hover:text-white flex items-center gap-x-4 text-sm font-serif"
												: "flex items-center gap-x-4 text-lg font-serif"
										}
									>
										<div>
											<MdManageHistory size={30} />
										</div>
										Payment History
									</Link>
								</li>
							</>
						)}
						{/* Divider */}
						<div className="divider"></div>
						<li>
							<Link
								className="flex items-center gap-x-2 text-lg font-serif"
								to="/"
							>
								<FaHome size={30} />
								Home
							</Link>
						</li>
						<li>
							<Link
								className="flex items-center gap-x-2 text-lg font-serif"
								to="/shop"
							>
								<AiFillShopping size={30} />
								Shop
							</Link>
						</li>
						<li>
							<span
								onClick={handleLogOut}
								className="flex items-center gap-x-2 ml-1 text-lg font-serif"
							>
								<FiLogOut size={25} /> Logout
							</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default DashBoard;
