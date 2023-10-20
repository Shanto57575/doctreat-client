import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Doctor from "../Doctors/Doctor";
import VideoSection from "../VideoSection/VideoSection";
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
			<VideoSection />
			<Doctor />
			<Blogs />
			<Contact />
		</>
	);
};

export default Home;
