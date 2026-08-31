import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import BureauExecutif from "@/components/BureauExecutif";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <BureauExecutif />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
