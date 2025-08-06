import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import MenuHighlights from "@/sections/MenuHighlights"; 
import Reviews from "@/sections/Reviews";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import WhatsAppFloat from "@/sections/WhatsappFloat";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuHighlights />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
