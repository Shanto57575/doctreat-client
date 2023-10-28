import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductTab from "../ProductTab/ProductTab";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Shop = () => {
	const [shops, setShops] = useState();
	const [loading, setLoading] = useState(true);
	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure("/shop").then((data) => {
			setShops(data.data);
			setLoading(false);
		});
	}, [axiosSecure]);

	const Devices = shops?.filter(
		(item) => item.category === "Monitoring Devices"
	);
	const Equipment = shops?.filter(
		(item) => item.category === "Respiratory Equipment"
	);

	const Tools = shops?.filter((item) => item.category === "Diagnostic Tools");
	const Aids = shops?.filter((item) => item.category === "Mobility Aids");
	const Supports = shops?.filter(
		(item) => item.category === "Support and Braces"
	);

	return (
		<>
			<Helmet>
				<title>Doctreat | Shop</title>
			</Helmet>

			<div className="w-full mx-auto">
				<div
					className="hero h-[650px]"
					style={{
						backgroundImage:
							"url(https://t3.ftcdn.net/jpg/05/99/10/78/240_F_599107807_kaOhz5mux2kdVfhKZzdnFeDPgZUSlL32.jpg)",
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-lg">
							<h1 className="mb-5 text-5xl font-bold font-serif">
								EPIC | <span className="text-blue-400">MED</span>
							</h1>
						</div>
					</div>
				</div>
				<div className=" bg-gray-100 font-serif">
					<Tabs>
						<TabList className="flex flex-wrap items-center p-2 gap-x-4 bg-blue-400 text-white border-2 rounded">
							<Tab className="px-4 py-2 cursor-pointer hover:bg-slate-800 transition duration-300">
								Monitoring Devices
							</Tab>
							<Tab className="px-4 py-2 cursor-pointer hover:bg-slate-800 transition duration-300">
								Respiratory Equipment
							</Tab>
							<Tab className="px-4 py-2 cursor-pointer hover:bg-slate-800 transition duration-300">
								Diagnostic Tools
							</Tab>
							<Tab className="px-4 py-2 cursor-pointer hover:bg-slate-800 transition duration-300">
								Mobility Aids
							</Tab>
							<Tab className="px-4 py-2 cursor-pointer hover:bg-slate-800 transition duration-300">
								Support and Braces
							</Tab>
						</TabList>
						<TabPanel>
							<ProductTab loading={loading} item={Devices} />
						</TabPanel>
						<TabPanel>
							<ProductTab loading={loading} item={Equipment} />
						</TabPanel>
						<TabPanel>
							<ProductTab loading={loading} item={Tools} />
						</TabPanel>
						<TabPanel>
							<ProductTab loading={loading} item={Aids} />
						</TabPanel>
						<TabPanel>
							<ProductTab loading={loading} item={Supports} />
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default Shop;
