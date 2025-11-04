import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Category from "../../components/category/Category";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";


const HomePage = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Category/>
        <HomePageProductCard />
        <Track/>
        <Testimonial/>
      </Layout>
    </div>
  );
};

export default HomePage;
