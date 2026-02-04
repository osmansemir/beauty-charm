import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

function Home() {
  return (
    <main className="w-[768px] shadow-xl bg-[#fafafa] px-5 mx-auto">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
