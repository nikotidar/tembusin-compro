import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/about/Banner";
import OurValue from "@/components/about/OurValue";
import SecurityExcellent from "@/components/about/SecurityExcellent";
import Collaboration from "@/components/home/Collaboration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Tembusin",
  description: "Meet Tembusin Cyber Security for your business.",
  openGraph: {
    title: "About - Tembusin",
    description: "Meet Tembusin Cyber Security for your business.",
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
