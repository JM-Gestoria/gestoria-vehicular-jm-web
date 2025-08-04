import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Users, 
  ShieldCheck, 
  Star 
} from 'lucide-react';

const AboutUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "+10 años de experiencia",
      description: "Más de una década brindando servicios especializados en gestión vehicular"
    },
    {
      icon: Users,
      title: "Atención personalizada",
      description: "Cada cliente recibe atención individual y seguimiento personal de su trámite"
    },
    {
      icon: ShieldCheck,
      title: "Trámites con garantía",
      description: "Todos nuestros servicios incluyen garantía y respaldo legal completo"
    },
    {
      icon: Star,
      title: "Profesionales calificados",
      description: "Equipo certificado con amplio conocimiento en normativas vehiculares"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestra misión, visión y los valores que nos han convertido 
            en líderes en gestión vehicular.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Misión</h3>
                <div className="w-16 h-1 bg-primary rounded"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Brindar soluciones integrales en gestión vehicular que simplifiquen y optimicen 
                los procesos para nuestros clientes, garantizando atención personalizada, 
                transparencia en cada paso y construyendo relaciones basadas en la confianza 
                y la honestidad.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Visión</h3>
                <div className="w-16 h-1 bg-primary rounded"></div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser la empresa líder en gestión vehicular reconocida a nivel nacional por 
                nuestra excelencia en el servicio, compromiso ético y la confianza que 
                generamos en cada cliente.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-dark-section border-border text-center group hover:shadow-card transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Values */}
        <div className="mt-16 bg-gradient-dark rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Nuestros <span className="text-primary">Valores</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Transparencia</h4>
              <p className="text-muted-foreground">
                Comunicación clara y honesta en cada proceso y etapa del trámite.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Confianza</h4>
              <p className="text-muted-foreground">
                Construimos relaciones duraderas basadas en la credibilidad y el respaldo.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Excelencia</h4>
              <p className="text-muted-foreground">
                Compromiso constante con la calidad y mejora continua en nuestros servicios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;