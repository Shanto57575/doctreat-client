import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Doctor from "../Doctors/Doctor";
import Feedback from "../Feedback/Feedback";
import OurServices from "../ourServices/OurServices";

const Home = () => {
	return (
		<>
			<Banner />
			<OurServices />
			<Doctor />
			<Blogs />
			<Feedback />
			<Contact />
		</>
	);
};

export default Home;
