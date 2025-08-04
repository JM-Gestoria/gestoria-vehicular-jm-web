import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Diagonal Lines Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg/70 via-transparent to-dark-section/50" />
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0">
        <div className="hidden md:block absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rotate-45 animate-pulse" />
        <div className="hidden md:block absolute bottom-20 right-10 w-40 h-40 border border-primary/10 rotate-12" />
        <div className="hidden md:block absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            Servicios Profesionales de{' '}
            <span className="bg-gradient-metallic bg-clip-text text-transparent">
              Gestión Vehicular
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Simplificamos tus trámites vehiculares con eficiencia y transparencia, 
            brindando seguridad y tranquilidad en cada servicio.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-metallic-hover text-primary-foreground font-semibold px-8 py-4 text-lg shadow-metallic"
              onClick={() => scrollToSection('servicios')}
            >
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos
            </Button>
          </div>

          {/* Features Highlights */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">+10</div>
              <div className="text-muted-foreground">Años de experiencia</div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Trámites garantizados</div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">11</div>
              <div className="text-muted-foreground">Estados atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;