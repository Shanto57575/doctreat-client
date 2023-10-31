import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import BlogPage from "./components/Blogs/BlogPage";
import Shop from "./components/Shop/Shop";
import MyCart from "./components/DashBoard/UserDashboard/MyCart";
import AllUsers from "./components/DashBoard/AdminDashboard/AllUsers";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AdminHome from "./components/DashBoard/AdminDashboard/AdminHome";
import UserHome from "./components/DashBoard/UserDashboard/UserHome";
import AddProduct from "./components/DashBoard/AdminDashboard/AddProduct";
import AddDoctor from "./components/DashBoard/AdminDashboard/AddDoctor";
import DashBoard from "./components/DashBoard/DashBoard";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Payment from "./components/DashBoard/UserDashboard/Payment/Payment";
import PaymentHistory from "./components/DashBoard/UserDashboard/Payment/PaymentHistory";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";
// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DoctorProfile from "./components/DoctorProfile/DoctorProfile";

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
					fetch(`https://doctreat-server.vercel.app/blogs/${params.id}`),
			},
			{
				path: "/alldoctors",
				element: <AllDoctors />,
			},
			{
				path: "/alldoctors/:id",
				element: <DoctorProfile />,
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
				path: "history",
				element: <PaymentHistory />,
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
