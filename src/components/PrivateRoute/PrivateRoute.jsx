import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
	const { user, loader } = useContext(AuthContext);
	const location = useLocation();

	if (loader) {
		return <Loader />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
