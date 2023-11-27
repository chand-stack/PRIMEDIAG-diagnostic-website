import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import About from "../../Shared/About/About";
import Recommendation from "../../Shared/Recommend/Recommendation";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Brands from "../../Shared/Brands/Brands";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PrimeDiag</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Brands></Brands>
      <Recommendation></Recommendation>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
