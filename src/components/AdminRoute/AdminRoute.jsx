import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
	const { user, loader } = useContext(AuthContext);
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();

	if (loader || isAdminLoading) {
		return <Loader />;
	}

	if (user && isAdmin) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
