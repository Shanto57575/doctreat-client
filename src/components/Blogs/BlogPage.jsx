import { useLoaderData } from "react-router-dom";

const BlogPage = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<div className="mt-12 rounded-xl">
				<h2 className="text-3xl text-center text-cyan-600 font-serif font-bold underline">
					{data?.title}
				</h2>
				<div className="card card-side bg-base-100 m-12 rounded-xl shadow-2xl">
					<img src={data.aboutImg} className="w-1/2 h-96" />
					<div className="mx-6">
						<p className="text-justify text-sm font-serif">{data?.article}</p>
						<div className="flex items-center justify-between font-semibold">
							<div className="flex items-center font-semibold">
								<img
									src={data.personImg}
									className="rounded-tr-2xl rounded-es-2xl w-16 h-16 m-2 border-2 border-slate-500"
									alt=""
								/>
								<p>{data?.Name}</p>
							</div>
							<p>{data?.time}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="py-8 lg:py-16 px-4 max-w-screen-sm mx-12">
				<p className="my-5 font-serif">Leave Your comments</p>
				<form action="#" className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Your Name
						</label>
						<input
							type="text"
							id="Name"
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
							type="email"
							id="email"
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
							id="message"
							rows={6}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Leave a comment..."
							required
						/>
					</div>
					<button
						type="submit"
						className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default BlogPage;
