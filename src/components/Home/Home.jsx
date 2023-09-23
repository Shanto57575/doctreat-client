import Banner from "../Banner/Banner";
import Doctor from "../Doctors/Doctor";
import Search from "../Search/Search";
import ImgAndDesc from "../imgAndDes/ImgAndDesc";
import OurServices from "../ourServices/OurServices";

const Home = () => {
	return (
		<div className="">
			<Search></Search>
			<Banner></Banner>
			<ImgAndDesc></ImgAndDesc>
			<OurServices></OurServices>
			<Doctor></Doctor>
		</div>
	);
};

export default Home;
