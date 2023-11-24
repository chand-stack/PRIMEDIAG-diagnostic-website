import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import About from "../../Shared/About/About";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>PrimeDiag</title>
      </Helmet>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;