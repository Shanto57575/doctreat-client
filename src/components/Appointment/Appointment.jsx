import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import Swal from "sweetalert2";

const Appointment = () => {
	const [userBookings, setUserBookings] = useState([]);
	const { user, loader } = useContext(AuthContext);
	const url = `https://doctreat-server.vercel.app/bookings?email=${user?.email}`;

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("doctorsSecret")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setUserBookings(data));
	}, [url]);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://doctreat-server.vercel.app/bookings/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							Swal.fire(
								"Deleted!",
								"Your booking has been deleted.",
								"success"
							);
							const remaining = userBookings.filter(
								(booking) => booking._id !== id
							);
							setUserBookings(remaining);
						}
					});
			}
		});
	};

	const handleStatus = (id) => {
		fetch(`https://doctreat-server.vercel.app/bookings/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ status: "confirm" }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Your booking is confirmed",
						showConfirmButton: false,
						timer: 1500,
					});
					const remaining = userBookings.filter(
						(booking) => booking._id !== id
					);
					const updatedStatus = userBookings.find(
						(booking) => booking._id === id
					);
					updatedStatus.status = "confirm";
					const newlyUpdatedData = [updatedStatus, ...remaining];
					setUserBookings(newlyUpdatedData);
				}
			});
	};

	if (loader) {
		return (
			<div className="text-7xl text-center text-cyan-500">
				L
				<span className="inline-block bg-cyan-500 w-12 h-12 border-8 border-dashed text-5xl rounded-full animate-spin"></span>
				ading...
			</div>
		);
	}

	if (!user) {
		return (
			<h1 className="text-cyan-500 text-5xl text-center h-screen mt-56 font-serif font-extrabold">
				Please login to see your appointments
			</h1>
		);
	}
	if (userBookings?.length === 0) {
		return (
			<h1 className="text-cyan-500 text-5xl text-center h-screen mt-56 font-serif font-extrabold">
				No appointment is booked
			</h1>
		);
	}

	return (
		<>
			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr className="text-center text-base font-serif font-bold">
							<th></th>
							<th>Doctors</th>
							<th>Name</th>
							<th>Speciality</th>
							<th>Country</th>
							<th>Price</th>
							<th>Experience</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{userBookings.map((booking) => (
							<BookingRow
								key={booking._id}
								booking={booking}
								handleDelete={handleDelete}
								handleStatus={handleStatus}
							></BookingRow>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Appointment;
