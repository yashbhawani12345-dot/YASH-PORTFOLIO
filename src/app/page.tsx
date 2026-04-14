import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero — scroll sequence */}
      <section id="home">
        <ScrollyCanvas>
          <Overlay />
        </ScrollyCanvas>
      </section>

      {/* About Me section */}
      <section id="about">
        <About />
      </section>

      {/* Selected Works */}
      <section id="works">
        <Projects />
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center bg-[#121212]">
        <p className="text-white/20 tracking-[0.3em] text-sm font-light">yashbhawani</p>
      </footer>
    </main>
  );
}
