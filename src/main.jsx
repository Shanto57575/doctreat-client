import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import Register from "./components/Register/Register";
import ShowService from "./components/ShowService/ShowService";
import AuthProvider from "./AuthProvider/AuthProvider";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/alldoctors",
				element: <AllDoctors></AllDoctors>,
			},
			{
				path: "/alldoctors/:id",
				element: <ShowService></ShowService>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/doctors/${params.id}`),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/appointment",
				element: <Appointment></Appointment>,
			},
			{
				path: "/appointmentForm/:id",
				element: <AppointmentForm />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
