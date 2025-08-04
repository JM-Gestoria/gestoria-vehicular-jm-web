import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Send
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    // Reset form
    setFormData({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 332 942 4140",
      action: () => window.open('tel:+5213329424140')
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      content: "gestoriavehicularjm@gmail.com",
      action: () => window.open('mailto:gestoriavehicularjm@gmail.com')
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Ver ubicación en Google Maps",
      action: () => window.open('https://maps.app.goo.gl/4V9kzLKLoGYF8Ps29', '_blank')
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun-Vie: 9:00 AM - 7:00 PM\nSáb: 9:00 AM - 2:00 PM\nDom: Cerrado",
      action: null
    }
  ];

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquier medio y 
            te brindaremos la atención personalizada que mereces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
              Información de Contacto
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className={`bg-card border-border hover:shadow-card transition-all duration-300 ${
                      info.action ? 'cursor-pointer hover:transform hover:scale-105' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-dark border-primary">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  ¿Necesitas ayuda inmediata?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Escríbenos por WhatsApp para atención directa y rápida
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-metallic-hover text-primary-foreground font-semibold w-full"
                  onClick={() => window.open('https://wa.me/5213329424140', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.facebook.com/share/1G4jakixHv/', '_blank')}
              >
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.instagram.com/jmgestoriavehicular', '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  Envíanos un Mensaje
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-foreground mb-2">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="correo"
                      name="correo"
                      type="email"
                      value={formData.correo}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-2">
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      placeholder="Asunto de tu consulta"
                      className="bg-input border-border text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Describe tu consulta o el trámite que necesitas..."
                      rows={5}
                      className="bg-input border-border text-foreground resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-metallic-hover text-primary-foreground font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4">
                  * Campos requeridos. Responderemos tu consulta a la brevedad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Nuestra Ubicación
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Haz clic para ver nuestra ubicación en Google Maps
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://maps.app.goo.gl/4V9kzLKLoGYF8Ps29', '_blank')}
                  >
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;