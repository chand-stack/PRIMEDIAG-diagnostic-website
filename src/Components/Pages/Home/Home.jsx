import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>PrimeDiag</title>
      </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;