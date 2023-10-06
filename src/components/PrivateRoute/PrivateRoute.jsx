import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import Loader from "../Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
	const { user, loader } = useContext(AuthContext);
	const location = useLocation();

	if (!user) {
		Swal.fire("Please Login to get the Access");
	}

	if (user) {
		return children;
	}
	if (loader) {
		return <Loader />;
	}
	return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
