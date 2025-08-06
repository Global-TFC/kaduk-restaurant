import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Multiple Locations", "Kerala, India"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 123 456 7890", "+91 098 765 4321"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@kadukrestaurant.com", "reservations@kadukrestaurant.com"]
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sun: 11:00 AM - 11:00 PM", "Holidays: 12:00 PM - 10:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            We'd love to hear from you. Visit us, call us, or reach out online for reservations and inquiries.
          </p>
        </div>
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-card border-border shadow-warm hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-playfair font-semibold text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground font-inter">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-primary shadow-glow">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold">
                Ready to Experience Kaduk?
              </h3>
              <p className="text-lg font-inter text-gray-500 max-w-2xl mx-auto">
                Join us for an unforgettable family dining experience that celebrates tradition, 
                quality, and the finest flavors crafted with love and care.
              </p>
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg" 
                  variant={"outline"}
                  className="bg-white text-primary cursor-pointer font-medium px-8 py-3 text-lg"
                >
                  Make Reservation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;