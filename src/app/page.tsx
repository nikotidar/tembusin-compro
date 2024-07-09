import BannerBottom from "@/components/BannerBottom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import Collaboration from "@/components/home/Collaboration";
import OurValue from "@/components/home/OurValue";
import Services from "@/components/home/Services";
import WhoWeAre from "@/components/home/WhoWeAre";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Tembusin",
  description:
    "Empowering Security, Ensuring Trust. Focus on your business and let us protect your company's cyber space.",
  openGraph: {
    title: "Home - Tembusin",
    description:
      "Empowering Security, Ensuring Trust. Focus on your business and let us protect your company's cyber space.",
    url: "https://tembusin.id",
    siteName: "Tembusin",
    images: [
      {
        url: "https://tembusin.id/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Collaboration />
      <WhoWeAre />
      <OurValue />
      <Services />
      <BannerBottom />
      <Footer />
    </main>
  );
}
