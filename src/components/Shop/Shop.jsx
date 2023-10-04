import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductTab from "../ProductTab/ProductTab";

const Shop = () => {
	const [shops, setShops] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/shop")
			.then((res) => res.json())
			.then((data) => setShops(data));
	}, []);

	console.log(shops);

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
			<div className="w-full mx-auto">
				<div
					className="hero h-96"
					style={{
						backgroundImage:
							"url(https://t3.ftcdn.net/jpg/02/44/60/98/240_F_244609855_yUA8MEZL0iOxqcNg7t4GbPfgOLxYp3Ie.jpg)",
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-lg">
							<h1 className="mb-5 text-5xl font-bold font-serif">
								Epic |<span className="text-blue-400"> Store</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="p-4 bg-gray-100 font-serif">
					<Tabs>
						<TabList className="flex items-center p-2 gap-4 bg-gray-500 text-white border-2 rounded">
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
							<ProductTab item={Devices} />
						</TabPanel>
						<TabPanel>
							<ProductTab item={Equipment} />
						</TabPanel>
						<TabPanel>
							<ProductTab item={Tools} />
						</TabPanel>
						<TabPanel>
							<ProductTab item={Aids} />
						</TabPanel>
						<TabPanel>
							<ProductTab item={Supports} />
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default Shop;
