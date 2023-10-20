import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
	const { user, loader } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["carts", user?.email],
		enabled: !loader,
		queryFn: async () => {
			const res = await axiosSecure(`/carts?email=${user?.email}`);
			return res.data;
		},
	});
	return [cart, refetch];
};

export default useCart;
