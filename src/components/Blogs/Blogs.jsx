/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const [visibleBlogs, setVisibleBlog] = useState(3);

	useEffect(() => {
		fetch("http://localhost:5000/blogs")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	const handleShowAll = () => {
		setVisibleBlog(blogs.length);
	};

	return (
		<div className="text-center space-y-3 my-10 md:mx-8 lg:mx-12">
			<h4 className="font-semibold text-3xl text-cyan-600 font-serif">
				Health & Wellness Blog
			</h4>
			<p>Stay Informed, Stay Healthy</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{blogs.slice(0, visibleBlogs).map((blog) => (
					<Zoom key={blog._id}>
						<div className="rounded-tr-2xl h-[500px] rounded-es-2xl w-72 glass md:w-[350px] font-serif mx-auto bg-gray-100 hover:shadow hover:shadow-slate-500 border-x-2 border-gray-300">
							<figure>
								<img
									src={blog.aboutImg}
									alt="Shoes"
									className="w-96 h-52 group rounded-tr-2xl rounded-es-2xl"
								/>
							</figure>
							<div className="flex items-center gap-2 p-2">
								<img
									className="w-12 h-12 rounded-tr-2xl rounded-es-2xl border-2 border-blue-500"
									src={blog.personImg}
								/>
								<div className="text-left">
									<h1 className="font-extrabold text-sm">{blog.Name}</h1>
									<div className="flex items-center justify-between gap-5">
										<p>{blog.time}</p>
										<p className="flex items-center gap-2">
											<BsBookmark /> {blog.reading_time}
										</p>
									</div>
								</div>
							</div>
							<div className="p-3">
								<h2 className="card-title font-serif text-gray-700 mb-3">
									{blog.title}
								</h2>
								<p className="text-justify text-sm md:text-base">
									{blog.article.slice(0, 120)}......
									<Link
										to={`/${blog._id}`}
										className="text-cyan-500 cursor-pointer text-right"
									>
										read more
									</Link>
								</p>
							</div>
							<div className="flex items-center justify-between border-t-2 border-white p-5 font-semibold">
								<p className="flex items-center gap-x-1">
									<AiOutlineLike size={20} className="text-cyan-400" /> 66
								</p>
								<p className="flex items-center gap-x-1">
									<AiOutlineEye size={18} className="text-cyan-400" /> 3675
								</p>
								<p className="flex items-center gap-x-1">
									<BiComment size={18} className="text-cyan-400" /> 9
								</p>
							</div>
						</div>
					</Zoom>
				))}
			</div>
			{visibleBlogs < blogs.length && (
				<button
					onClick={handleShowAll}
					type="button"
					className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
				>
					See More
				</button>
			)}
		</div>
	);
};

export default Blogs;
