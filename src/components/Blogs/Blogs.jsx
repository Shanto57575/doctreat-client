/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
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
						<div className="relative h-80 md:w-96 rounded-xl bg-white">
							<div
								className="rounded-tr-3xl rounded-es-3xl absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-2xl shadow-black"
								style={{ backgroundImage: `url(${blog.aboutImg})` }}
							>
								<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50" />
							</div>
							<div className="relative p-6 px-6 py-14 md:px-12">
								<div className="p-3 text-white">
									<h2 className="underline text-xl text-center font-serif font-extrabold text-cyan-300 mb-3">
										{blog.title}
									</h2>
									<p className="text-justify text-sm md:text-base">
										{blog.article.slice(0, 50)}......
										<Link
											to={`/${blog._id}`}
											className="text-cyan-400 cursor-pointer text-right hover:underline"
										>
											read more
										</Link>
									</p>
								</div>

								<h5 className="text-white block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
									{blog.Name}
								</h5>
								<div className="flex items-center justify-center gap-x-5">
									<img
										alt="tania andrew"
										src={blog.personImg}
										className="relative inline-block h-16 w-16 border-2 border-cyan-600 object-cover object-center rounded-tr-2xl rounded-es-2xl"
									/>
									<div className="text-left text-white">
										<p>{blog.time}</p>
										<p className="flex items-center gap-2">
											<BsBookmark /> {blog.reading_time}
										</p>
									</div>
								</div>
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
