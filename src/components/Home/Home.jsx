import { Helmet } from "react-helmet-async";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Doctor from "../Doctors/Doctor";
import Feedback from "../Feedback/Feedback";
import OurServices from "../ourServices/OurServices";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Doctreat | Home</title>
			</Helmet>
			<Banner />
			<OurServices />
			<Doctor />
			<Blogs />
			<Feedback />
			<Contact />
		</div>
	);
};

export default Home;
