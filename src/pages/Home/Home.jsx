import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import InfoSection from '../../components/InfoSection/InfoSection';
import Stats from '../../components/Stats/Stats';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InfoSection />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
