import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/about/Banner";
import OurValue from "@/components/about/OurValue";
import SecurityExcellent from "@/components/about/SecurityExcellent";
import Collaboration from "@/components/home/Collaboration";

export default function About() {
  return (
    <main>
      <Header />
      <Banner />
      <SecurityExcellent />
      <OurValue />
      <div className="md:pb-[80px] md:pt-[120px]">
        <Collaboration />
      </div>
      <Footer />
    </main>
  );
}
