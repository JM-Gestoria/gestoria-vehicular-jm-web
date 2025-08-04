import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpg" 
              alt="Gestoría Vehicular JM" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Gestoría Vehicular JM</h1>
              <p className="text-sm text-muted-foreground">Trámites Vehiculares</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('informacion')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Información
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-metallic-hover text-primary-foreground font-semibold"
              onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('informacion')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Información
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-metallic-hover text-primary-foreground font-semibold self-start"
                onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contáctanos
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;