import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import PayingHistory from "../../../../assets/paymentHistory.json";
import usePayment from "../../../../hooks/usePayment";
import Loader from "./../../../Loader/Loader";

const PaymentHistory = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const [paymentHistory, refetch, isLoading] = usePayment();

	const clearHistory = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Clear history",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/payments/${user?.email}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
						Swal.fire("Deleted!", "Your History has been Cleared.", "success");
					}
				});
			}
		});
	};

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	if (paymentHistory.length === 0) {
		return (
			<>
				<Lottie className="w-96" animationData={PayingHistory} loop={true} />
				<h1 className="font-serif text-xl mt-2 text-red-500">
					No Payment History to Show
				</h1>
			</>
		);
	}

	return (
		<div className="w-full px-2 md:px-5 lg:px-10">
			<h1 className="text-center mt-10 text-blue-400 text-2xl mb-4 md:text-4xl font-bold font-serif italic">
				---- Payment History ----
			</h1>

			<div className="overflow-x-auto">
				<div className="flex items-center justify-between">
					<img
						className="w-20 h-20 rounded-es-[28px] rounded-tr-[28px] mb-2 border-4 border-blue-400"
						src={user?.photoURL}
						alt="profile"
					/>
					<h1 className="font-serif text-sm md:text-xl font-extrabold text-blue-400">
						{user?.displayName}
					</h1>
					<h1 className="hidden md:block font-serif text-sm md:text-xl font-extrabold text-blue-400">
						{user?.email}
					</h1>
					<button
						onClick={clearHistory}
						className="flex items-center gap-x-1 text-sm bg-blue-400 hover:bg-red-500 duration-300 font-serif text-white rounded px-4 py-2.5 font-semibold"
					>
						<RiDeleteBin2Fill size={25} /> <span>Clear history</span>
					</button>
				</div>
				<table className="table font-serif text-black">
					<thead className="text-center">
						<tr className="bg-blue-500 text-white font-serif">
							<th>#</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Category</th>
							<th>Quantity</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody className="text-center font-semibold bg-slate-700 text-white">
						{paymentHistory.map((payment, index) => (
							<tr key={payment._id}>
								<td>{index + 1}</td>
								<td>
									{payment.itemsName.map((item, index) => (
										<p className="border py-1 border-white" key={index}>
											{item}
										</p>
									))}
								</td>
								<td className="text-xl">${payment.price}</td>
								<td>
									{payment.itemsCategory.map((item, index) => (
										<p className="border py-2 border-white" key={index}>
											{item}
										</p>
									))}
								</td>
								<td className="text-xl">{payment.quantity}</td>
								<td className="font-sans">{payment.date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PaymentHistory;
