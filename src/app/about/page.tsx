import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Collaboration from "@/components/home/Collaboration";

export default function About() {
  return (
    <main>
      <Header />
      <div className="md:pb-[80px] md:pt-[120px]">
        <Collaboration />
      </div>
      <Footer />
    </main>
  );
}
