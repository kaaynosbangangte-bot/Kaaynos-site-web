import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Training from './components/Training';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Training />
        <Portfolio />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
