import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import About from "../../Shared/About/About";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>PrimeDiag</title>
      </Helmet>
            <Banner></Banner>
            <About></About>
           
        </div>
    );
};

export default Home;