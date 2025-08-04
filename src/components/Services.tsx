import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  FileText, 
  UserCheck, 
  Shield, 
  FileX, 
  Award, 
  CreditCard, 
  Car, 
  IdCard,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import servicesBackground from '@/assets/services-bg.jpg';

const Services = () => {
  const plateImages = [
    'IMG-20250803-WA0000.jpg',
    'IMG-20250803-WA0001.jpg',
    'IMG-20250803-WA0002.jpg',
    'IMG-20250803-WA0003.jpg',
    'IMG-20250803-WA0004.jpg',
    'IMG-20250803-WA0005.jpg',
    'IMG-20250803-WA0006.jpg',
    'IMG-20250803-WA0007.jpg',
    'IMG-20250803-WA0008.jpg',
    'IMG-20250803-WA0009.jpg',
    'IMG-20250803-WA0010.jpg',
    'IMG-20250803-WA0011.jpg',
    'IMG-20250803-WA0012.jpg',
    'IMG-20250803-WA0013.jpg',
  ];

  const services = [
    {
      icon: FileText,
      title: "Alta de Placas",
      description: "Registro de vehículos nuevos y obtención de placas oficiales con todos los documentos requeridos."
    },
    {
      icon: UserCheck,
      title: "Cambios de Propietario",
      description: "Transferencia legal de vehículos entre propietarios con documentación completa y válida."
    },
    {
      icon: Shield,
      title: "Legalización por Decreto",
      description: "Regularización de vehículos de procedencia extranjera bajo decretos gubernamentales vigentes."
    },
    {
      icon: FileX,
      title: "Bajas",
      description: "Proceso de baja definitiva de vehículos del registro vehicular oficial por diversos motivos."
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Emisión de certificados oficiales para vehículos incluyendo verificaciones y validaciones."
    },
    {
      icon: CreditCard,
      title: "Descuento en Multas",
      description: "Gestión de descuentos y negociación de multas de tránsito para reducir costos."
    },
    {
      icon: Car,
      title: "Permisos para Circular sin Placas",
      description: "Obtención de permisos temporales para circular mientras se tramitan las placas definitivas."
    },
    {
      icon: IdCard,
      title: "Licencias",
      description: "Tramitación de licencias de manejo en diferentes categorías y renovaciones."
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-20 bg-dark-section relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${servicesBackground})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados en gestión vehicular 
            para simplificar todos tus trámites oficiales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-card transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Carousel de Placas */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
            Resultados de Nuestros <span className="text-primary">Trámites</span>
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {plateImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-border hover:shadow-card transition-all duration-300">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img src={`/placas/${image}`} alt={`Placa de vehículo ${index + 1}`} className="rounded-lg object-cover w-full h-full" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="text-center space-y-4 mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-metallic-hover text-primary-foreground font-semibold px-8 py-4"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
              onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos por WhatsApp
            </Button>
          </div>
          
          <p className="text-muted-foreground text-sm">
            ¿No encuentras el servicio que necesitas? Contáctanos para asesoría personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;