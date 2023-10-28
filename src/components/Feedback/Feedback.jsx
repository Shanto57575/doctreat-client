import { useEffect, useState } from "react";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Feedback = () => {
	const [feedbacks, setFeedbacks] = useState([]);
	const [axiosSecure] = useAxiosSecure();
	useEffect(() => {
		axiosSecure.get("/feedback").then((res) => {
			console.log(res.data);
			setFeedbacks(res.data);
		});
	}, [axiosSecure]);

	return (
		<>
			<div className="px-5 lg:px-60 bg-gray-200 py-10 lg:py-20">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
					{feedbacks.map((feed) => (
						<SwiperSlide key={feed._id}>
							<div className="text-center text-white font-serif space-y-2 p-5 lg:p-10 bg-gray-950">
								<img
									className="w-28 h-28 rounded-full mx-auto"
									src={feed.image}
									alt=""
								/>
								<h1 className="font-bold text-2xl italic text-blue-400">
									{feed.name}
								</h1>
								<p className="italic lg:mx-20 px-2 text-center">
									{feed.feedback}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default Feedback;
