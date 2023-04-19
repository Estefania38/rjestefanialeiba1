import 'bootstrap/dist/css/bootstrap.min.css';
import '@mui/icons-material';
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner.jsx";


const Home = () => {
    return (
        <div>
        <Navbar/>
        <Banner/>                     
        </div>
    );
};

export default Home;