import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Doctor from "../Doctors/Doctor";
import Feedback from "../Feedback/Feedback";
import Work from "../Work/Work";
import ImgAndDesc from "../imgAndDes/ImgAndDesc";
import OurServices from "../ourServices/OurServices";
import Stat from "./../Stat/Stat";

const Home = () => {
	return (
		<>
			<Banner />
			<ImgAndDesc />
			<Stat />
			<Work />
			<OurServices />
			<Doctor />
			<Blogs />
			<Feedback />
			<Contact />
		</>
	);
};

export default Home;
