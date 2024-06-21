import BannerBottom from "@/components/BannerBottom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/services/Banner";
import OurServices from "@/components/services/OurServices";
import Overview from "@/components/services/Overview";

export default function Services() {
  return (
    <main>
      <Header />
      <Banner />
      <Overview />
      <OurServices />
      <BannerBottom />
      <Footer />
    </main>
  );
}
