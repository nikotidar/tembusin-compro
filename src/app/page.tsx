import BannerBottom from "@/components/BannerBottom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import Collaboration from "@/components/home/Collaboration";
import Services from "@/components/home/Services";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Collaboration />
      <WhoWeAre />
      <Services />
      <BannerBottom />
      <Footer />
    </main>
  );
}
