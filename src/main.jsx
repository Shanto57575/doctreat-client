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
import AuthProvider from "./AuthProvider/AuthProvider";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import BlogPage from "./components/Blogs/BlogPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shop from "./components/Shop/Shop";
import { HelmetProvider } from "react-helmet-async";

// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashBoard from "./components/DashBoard/DashBoard";
import MyCart from "./components/DashBoard/MyCart";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/:id",
				element: <BlogPage />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/blogs/${params.id}`),
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/alldoctors",
				element: <AllDoctors />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
			{
				path: "/dashboard",
				element: <DashBoard />,
				children: [
					{
						path: "/dashboard",
						element: <MyCart />,
					},
				],
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/appointment",
				element: (
					<PrivateRoute>
						<Appointment />
					</PrivateRoute>
				),
			},
			{
				path: "/appointmentForm/:id",
				element: <AppointmentForm />,
			},
		],
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</HelmetProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
