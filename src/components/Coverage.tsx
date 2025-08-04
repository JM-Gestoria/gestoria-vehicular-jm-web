import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Coverage = () => {
  const states = [
    "Jalisco",
    "Michoacán", 
    "Oaxaca",
    "Chiapas",
    "Guerrero",
    "Durango",
    "CDMX",
    "Estado de México",
    "Morelos",
    "Sinaloa",
    "Sonora"
  ];

  return (
    <section id="informacion" className="py-16 sm:py-20 bg-dark-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cobertura <span className="text-primary">Nacional</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendemos en los siguientes estados de la República Mexicana 
            con la misma calidad y profesionalismo.
          </p>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {states.map((state, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-card transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-4 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {state}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Servicio Remoto</h3>
              <p className="text-muted-foreground">
                Muchos de nuestros trámites se pueden realizar de forma remota, 
                ahorrándote tiempo y desplazamientos innecesarios.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Asesoría Personalizada</h3>
              <p className="text-muted-foreground">
                Cada estado tiene sus particularidades. Te asesoramos específicamente 
                según la normativa local correspondiente.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Red de Contactos</h3>
              <p className="text-muted-foreground">
                Contamos con una amplia red de contactos en oficinas gubernamentales 
                para agilizar tus trámites en cualquier estado.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 md:mt-16 bg-gradient-dark rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            ¿Tu estado no aparece en la lista?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contáctanos para conocer si podemos atender tu caso específico. 
            Constantemente expandimos nuestra cobertura para brindar mejor servicio.
          </p>
          <button 
            className="bg-primary hover:bg-metallic-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
          >
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
};

export default Coverage;