import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Coverage from '@/components/Coverage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;