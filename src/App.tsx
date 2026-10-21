import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Certifications from '@/sections/Certifications';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';

// App — the main application structure.
// What it controls: which sections appear on the page and their order.
// When to edit: when you want to add, remove, or reorder a major section.
// To add a new section: create it in src/sections/, import it here, and place it
// in the order you want. Also add it to src/data/navigation.ts so it appears in the navbar.
// To reorder: simply rearrange the components below.

function App() {
  return (
    <div className="min-h-screen bg-surface text-content">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
