import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Presentation from "@/components/presentation";
import BureauExecutif from "@/components/bureauexecutif";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

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
