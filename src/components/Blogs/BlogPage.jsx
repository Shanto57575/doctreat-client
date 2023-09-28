import { useLoaderData } from "react-router-dom";

const BlogPage = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<div className="mt-12 rounded-xl">
			<h2 className="text-3xl text-center text-cyan-600 font-serif font-bold underline">
				{data?.title}
			</h2>
			<div className="card card-side bg-base-100 m-12 rounded-xl shadow-2xl">
				<img src={data.aboutImg} className="w-1/2 h-96" />
				<div>
					<p className="text-justify text-sm font-serif">{data?.article}</p>
					<img
						src={data.personImg}
						className="rounded-full w-20 h-20 m-2 border-2 border-slate-500"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
