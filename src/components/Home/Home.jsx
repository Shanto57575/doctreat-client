import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Doctor from "../Doctors/Doctor";
import Work from "../Work/Work";
import ImgAndDesc from "../imgAndDes/ImgAndDesc";
import OurServices from "../ourServices/OurServices";
import Stat from "./../Stat/Stat";

const Home = () => {
	return (
		<div className="">
			<Banner />
			<ImgAndDesc />
			<Stat />
			<Work />
			<OurServices />
			<Doctor />
			<Blogs />
			<Contact />
		</div>
	);
};

export default Home;
