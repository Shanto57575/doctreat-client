import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
	const { user, loader } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const {
		refetch,
		data: paymentHistory = [],
		isLoading,
	} = useQuery({
		queryKey: ["paymentHistory", user?.email],
		enabled: !loader,
		queryFn: async () => {
			const res = await axiosSecure(`/payments/${user?.email}`);
			return res.data;
		},
	});
	console.log("paymentHistory-->", paymentHistory);
	return [paymentHistory, refetch, isLoading];
};

export default usePayment;
