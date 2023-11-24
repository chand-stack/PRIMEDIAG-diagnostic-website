import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>PrimeDiag</title>
      </Helmet>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;