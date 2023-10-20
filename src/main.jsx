import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import BlogPage from "./components/Blogs/BlogPage";
import Shop from "./components/Shop/Shop";
import MyCart from "./components/DashBoard/UserDashboard/MyCart";
import Payment from "./components/DashBoard/UserDashboard/Payment";
import AllUsers from "./components/DashBoard/AdminDashboard/AllUsers";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AdminHome from "./components/DashBoard/AdminDashboard/AdminHome";
import UserHome from "./components/DashBoard/UserDashboard/UserHome";
import AddProduct from "./components/DashBoard/AdminDashboard/AddProduct";
import AddDoctor from "./components/DashBoard/AdminDashboard/AddDoctor";
import DashBoard from "./components/DashBoard/DashBoard";
import { HelmetProvider } from "react-helmet-async";
import AdminRoute from "./components/AdminRoute/AdminRoute";

// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <ErrorPage />,
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
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/appointmentForm/:id",
				element: <AppointmentForm />,
			},
		],
	},
	{
		path: "dashboard",
		element: <DashBoard />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "userhome",
				element: <UserHome />,
			},
			{
				path: "mycart",
				element: <MyCart />,
			},
			{
				path: "payment",
				element: <Payment />,
			},
			{
				path: "adminhome",
				element: (
					<AdminRoute>
						<AdminHome />
					</AdminRoute>
				),
			},
			{
				path: "addproduct",
				element: (
					<AdminRoute>
						<AddProduct />
					</AdminRoute>
				),
			},
			{
				path: "adddoctor",
				element: (
					<AdminRoute>
						<AddDoctor />
					</AdminRoute>
				),
			},
			{
				path: "users",
				element: (
					<AdminRoute>
						<AllUsers />
					</AdminRoute>
				),
			},
		],
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<HelmetProvider>
					<RouterProvider router={router} />
				</HelmetProvider>
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
