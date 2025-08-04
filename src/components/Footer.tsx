import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram,
  MessageCircle 
} from 'lucide-react';


const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const services = [
    "Alta de Placas",
    "Cambios de Propietario", 
    "Legalización por Decreto",
    "Bajas",
    "Certificaciones",
    "Descuento en Multas",
    "Permisos para Circular",
    "Licencias"
  ];

  const quickLinks = [
    { label: "Inicio", id: "inicio" },
    { label: "Servicios", id: "servicios" },
    { label: "Sobre Nosotros", id: "sobre-nosotros" },
    { label: "Información", id: "informacion" },
    { label: "Contacto", id: "contacto" }
  ];

  return (
    <footer className="bg-dark-section border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpg" 
                alt="Gestoría Vehicular JM" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">Gestoría Vehicular JM</h3>
                <p className="text-sm text-muted-foreground">Trámites Vehiculares</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas en gestión vehicular con más de 10 años de experiencia. 
              Simplificamos tus trámites con eficiencia y transparencia en toda la República Mexicana.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <button
                className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors"
                onClick={() => window.open('https://www.facebook.com/share/1G4jakixHv/', '_blank')}
              >
                <Facebook className="h-5 w-5 text-primary" />
              </button>
              
              <button
                className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors"
                onClick={() => window.open('https://www.instagram.com/jmgestoriavehicular', '_blank')}
              >
                <Instagram className="h-5 w-5 text-primary" />
              </button>
              
              <button
                className="bg-card hover:bg-primary/20 p-3 rounded-lg transition-colors"
                onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
              >
                <MessageCircle className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    onClick={() => scrollToSection('servicios')}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto Rápido</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <button 
                    className="text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => window.open('tel:+5213329424140')}
                  >
                    +52 332 942 4140
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <button 
                    className="text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => window.open('mailto:gestoriavehicularjm@gmail.com')}
                  >
                    gestoriavehicularjm@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <button 
                    className="text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => window.open('https://maps.app.goo.gl/4V9kzLKLoGYF8Ps29', '_blank')}
                  >
                    Ver en Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Gestoría Vehicular JM. Todos los derechos reservados.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Especialistas en trámites vehiculares a nivel nacional.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                ¿Listo para simplificar tus trámites?
              </p>
              <button
                className="bg-primary hover:bg-metallic-hover text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
                onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
              >
                Contáctanos Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;