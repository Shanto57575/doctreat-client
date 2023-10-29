import { useContext } from "react";
import { AuthContext } from "./../../../AuthProvider/AuthProvider";
import usePayment from "./../../../hooks/usePayment";
import Stat from "../../Stat/Stat";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserHome = () => {
	const { user } = useContext(AuthContext);
	const [paymentHistory] = usePayment();
	console.log(paymentHistory);

	const allItems = paymentHistory.reduce(
		(acc, item) => acc.concat(item.itemsName),
		[]
	);

	const allCategory = paymentHistory.reduce(
		(acc, item) => acc.concat(item.itemsCategory),
		[]
	);

	console.log("--->", allCategory);

	const uniqueCategories = [...new Set(allCategory)];
	console.log(uniqueCategories);

	let itemCounts = {};

	allItems.forEach((item) => {
		itemCounts[item] = (itemCounts[item] || 0) + 1;
	});

	let maxItems;

	if (Object.keys(itemCounts).length > 0) {
		maxItems = Object.keys(itemCounts).reduce((a, b) =>
			itemCounts[a] > itemCounts[b] ? a : b
		);
	} else {
		maxItems = null;
	}

	console.log(maxItems);

	const totalProduct = paymentHistory.reduce(
		(totalProduct, payment) => totalProduct + payment.quantity,
		0
	);

	let totalPayment = paymentHistory.reduce(
		(totalProduct, payment) => totalProduct + payment.price,
		0
	);

	totalPayment = parseFloat(totalPayment.toFixed(2));

	return (
		<div className="w-full h-full bg-blue-400 p-10">
			<Stat
				totalProduct={totalProduct}
				totalPayment={totalPayment}
				maxItems={maxItems}
				uniqueCategories={uniqueCategories}
			/>
			<div className="w-full h-72 pt-4 bg-blue-200 border-none md:w-80 mx-auto border shadow shadow-gray-600 rounded-none">
				<figure>
					<img
						className="w-24 h-24 rounded-full mx-auto ring ring-blue-500 ring-offset-base-100 ring-offset-2"
						src={user?.photoURL}
						alt=""
					/>
				</figure>
				<div className="px-5 pt-3">
					<div>
						<h2 className="text-base font-bold font-serif">
							{user?.displayName}
							<div className="badge badge-secondary text-white ml-2">user</div>
						</h2>
						<h1 className="text-base font-semibold font-serif mt-1 my-3">
							{user?.email}
						</h1>
						<div className="card-actions">
							<div className="badge badge-outline">Edit</div>
							<Link to="/dashboard/mycart" className="badge badge-outline">
								carts
							</Link>
						</div>
					</div>
					<div className="flex gap-x-2 justify-end mb-3">
						<BsFacebook className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
						<BsTwitter className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
						<BsLinkedin className="border h-8 w-8 rounded-full p-1 text-white bg-blue-500 hover:text-blue-500 hover:bg-white duration-500 cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserHome;
