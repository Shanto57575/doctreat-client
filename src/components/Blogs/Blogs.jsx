/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Fade } from "react-awesome-reveal";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [visibleBlogs, setVisibleBlog] = useState(3);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://doctreat-server.vercel.app/blogs")
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data);
				setLoading(false);
			});
	}, []);

	const handleShowAll = () => {
		setVisibleBlog(blogs.length);
	};

	return (
		<div className="text-center space-y-3 my-10 md:mx-8 lg:mx-12">
			<div className="my-10">
				<h4 className="font-semibold text-3xl text-blue-500 font-serif">
					LATEST NEWS
				</h4>
				<p className="border-b-2 border-blue-400 w-24 mx-auto my-3"></p>
				<p className="w-1/2 mx-auto font-serif">
					Read our latest news from the company or general medical news. Feel
					free to ask questions in comments for any news you find interesting.
				</p>
			</div>
			{loading ? (
				<Loader />
			) : (
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
						{blogs.slice(0, visibleBlogs).map((blog) => (
							<div
								key={blog._id}
								className="text-black mb-6 md:w-96 border shadow shadow-gray-600 rounded-none font-serif"
							>
								<figure className="border-b-4 border-blue-400">
									<Fade>
										<img className="w-full h-60" src={blog.aboutImg} alt="" />
									</Fade>
								</figure>
								<div className="flex items-center justify-between p-5">
									<div className="flex items-center">
										<img
											alt="tania andrew"
											src={blog.personImg}
											className="relative inline-block h-14 w-14 border-2 border-cyan-600 object-cover object-center rounded-tr-2xl rounded-es-2xl"
										/>
										<div className="text-left ml-2">
											<h1 className="font-bold text-lg">{blog.Name}</h1>
											<p>{blog.time}</p>
										</div>
									</div>
									<p className="flex items-center gap-2">
										<BsBookmark /> {blog.reading_time}
									</p>
								</div>
								<div className="px-5">
									<h2 className="text-start text-xl font-bold">{blog.title}</h2>
									<p className="text-start pt-5 pb-10">
										{blog.article.slice(0, 100)}....
										<Link
											to={`/${blog._id}`}
											className="text-blue-500 cursor-pointer text-right hover:underline"
										>
											read more
										</Link>
									</p>
								</div>
							</div>
						))}
					</div>
					{visibleBlogs < blogs.length && (
						<button
							onClick={handleShowAll}
							type="button"
							className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
						>
							See More
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Blogs;
