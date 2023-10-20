import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAdmin = () => {
	const { user, loader } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin", user?.email],
		enabled: !loader,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user?.email}`);
			return res.data.Admin;
		},
	});
	return [isAdmin, isAdminLoading];
};

export default useAdmin;
