import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Tembusin",
  description: "More information? Please contact us",
  openGraph: {
    title: "Contact - Tembusin",
    description: "More information? Please contact us",
    url: "https://tembusin.id",
    siteName: "Tembusin",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactForm />
      <Footer />
    </main>
  );
}
