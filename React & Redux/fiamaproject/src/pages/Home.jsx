import { Fragment } from "react";
import HeroSlider from "../component/index/HeroSilder";
import FeatureSection from "../component/index/FeatureSection";
import NewItem from "../component/index/NewItem";
import { banners1, banners2 } from "../data/bannerdata";
import BannerSection from "../component/index/BannerSection";
import TopProduct from "../component/index/TopProduct";
import LatestNews from "../component/index/LatestNews";

function Home() {
    return (
        <Fragment>
            <HeroSlider />
            <FeatureSection />
            <BannerSection banners={banners1} />
            <NewItem />
            <BannerSection banners={banners2} largeBanner />
            <TopProduct />
            <LatestNews />
        </Fragment>
    );
}

export default Home;