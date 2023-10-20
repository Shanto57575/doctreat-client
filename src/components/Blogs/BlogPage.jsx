import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegComment } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BlogPage = () => {
	const data = useLoaderData();
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const { refetch, data: allComments = [] } = useQuery({
		queryKey: ["comments"],
		queryFn: async () => {
			const result = await axiosSecure.get("http://localhost:5000/comments");
			return result.data;
		},
	});

	const handleComments = async (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name?.value;
		const email = form.email?.value;
		const comment = form.comment?.value;

		const userComment = { name, email, comment, img: user.photoURL };

		await axiosSecure.post("http://localhost:5000/comments", userComment);
		refetch();
		Swal.fire({
			position: "center",
			icon: "success",
			title: `${user?.displayName} commented`,
			showConfirmButton: false,
			timer: 1500,
		});
		form.reset();
	};

	return (
		<>
			<div className="rounded-xl pt-32">
				<h2 className="text-3xl text-center text-cyan-600 font-serif font-bold underline">
					{data?.title}
				</h2>
				<div className="flex-col md:flex-row card card-side bg-base-100 mx-0 md:mx-12 rounded-xl shadow-2xl mt-5 lg:mt-20">
					<img src={data.aboutImg} className="w-full md:w-1/2" />
					<div className="mt-2 md:mt-0 mx-6">
						<p className="text-justify text-sm font-serif">{data?.article}</p>
						<div className="flex items-center justify-between font-semibold">
							<div className="flex items-center font-semibold">
								<img
									src={data.personImg}
									className="rounded-tr-2xl rounded-es-2xl w-16 h-16 border-2 border-slate-500 my-3 mr-3"
									alt=""
								/>
								<p>{data?.Name}</p>
							</div>
							<p>{data?.time}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:flex items-center">
				<div className="py-8 lg:py-16 px-4 lg:w-[600px] mx-12">
					<p className="my-5 font-serif">Leave Your comments</p>
					<form action="#" className="space-y-8" onSubmit={handleComments}>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your Name
							</label>
							<input
								defaultValue={user?.displayName}
								type="text"
								name="name"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Your Name...."
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								defaultValue={user?.email}
								type="email"
								name="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Your Email...."
								required
							/>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Your Comment
							</label>
							<textarea
								name="comment"
								rows={6}
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Leave a comment..."
								required
							/>
						</div>
						<input
							type="submit"
							value="Submit"
							className="cursor-pointer py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						/>
					</form>
				</div>
				<div className="py-8 lg:py-16 px-4 lg:w-[600px] mx-12">
					<p className="my-5 font-serif ml-2 text-3xl">
						{allComments.length} Comments!
					</p>
					{allComments.map((comment) => (
						<div key={comment._id} className="font-serif border-b-2">
							<div className="flex items-center justify-between my-5">
								<div className="flex items-center gap-x-2 mb-">
									<img
										className="w-10 h-10 rounded-full ring-2 ring-cyan-600"
										src={comment.img}
										alt="userProfile"
									/>
									<p className="text-cyan-500">{comment.name}</p>
								</div>
								<p className="flex items-center gap-x-2 mt-4 ml-10">
									<FaRegComment className="text-cyan-500" size={24} />
									<span>{comment.comment}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default BlogPage;
