import { GiCancel } from "react-icons/gi";

const BookingRow = ({ booking, handleDelete, handleStatus }) => {
	const { _id, picture, speciality, country, price, experience, name, status } =
		booking;

	return (
		<tr>
			<td>
				<GiCancel
					onClick={() => handleDelete(_id)}
					size={40}
					className="mb-2 text-red-500 cursor-pointer"
				/>
			</td>
			<td>
				<img
					className="rounded-3xl w-24 h-24 mx-auto"
					src={picture}
					alt="Avatar Tailwind CSS Component"
				/>
			</td>
			<td>{name}</td>
			<td>{speciality}</td>
			<td>{country}</td>
			<td>{price}</td>
			<td>{experience}</td>
			<td>
				{status === "confirm" ? (
					<span className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
						confirmed
					</span>
				) : (
					<button
						onClick={() => handleStatus(_id)}
						type="button"
						className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
					>
						Pending
					</button>
				)}{" "}
			</td>
		</tr>
	);
};

export default BookingRow;
