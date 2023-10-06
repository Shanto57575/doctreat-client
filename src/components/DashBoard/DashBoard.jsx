import { Helmet } from "react-helmet-async";
import useCart from "../../hooks/useCart";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

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
						className="btn rounded-none bg-slate-500 hover:bg-slate-700 text-white w-full drawer-button lg:hidden"
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
					<ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
						{/* Sidebar content here */}
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
							<Link className="flex items-center gap-x-4 text-lg font-serif">
								<div className="indicator">
									<span className="indicator-item badge badge-secondary">
										{cart?.length || 0}
									</span>
									<FaShoppingCart size={30} />
								</div>
								My cart
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default DashBoard;
