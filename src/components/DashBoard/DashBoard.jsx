import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const DashBoard = () => {
	const [cart] = useCart();
	return (
		<>
			<Helmet>
				<title>Doctreat | MyCart</title>
			</Helmet>

			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet />
					<label
						htmlFor="my-drawer-2"
						className="btn bg-sky-600 hover:bg-sky-500 w-full text-white drawer-button lg:hidden rounded-none"
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
					<ul className="menu p-4 w-56 min-h-full bg-base-200 text-base-content">
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
								className="flex items-center gap-x-4 text-lg font-serif"
								to="/dashboard/mycart"
							>
								<div className="indicator">
									<span className="indicator-item badge badge-secondary">
										{cart?.length || 0}
									</span>
									<FaShoppingCart size={30} />
								</div>
								My cart
							</Link>
							<Link
								className="flex items-center gap-x-4 text-lg font-serif"
								to="/dashboard/Payment"
							>
								<div>
									<FaMoneyCheckDollar size={30} />
								</div>
								Payment
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default DashBoard;
