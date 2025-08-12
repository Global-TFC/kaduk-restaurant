import { Card, CardContent } from "../components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground leading-tight">
                About Kaduk <span className="text-primary">Restaurant</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-inter font-medium text-gray-500">
                Authentic Family Recipes & Culinary Excellence
              </h3>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground font-inter leading-relaxed">
              <p>
                Kaduk Restaurant brings you authentic family recipes passed down through generations.
                From traditional dishes to innovative culinary creations, we take pride in delivering
                exceptional flavors that celebrate our rich culinary heritage.
              </p>
              <p>
                Our commitment to quality ingredients and time-honored cooking techniques has made us a beloved
                destination for food enthusiasts. We combine traditional flavors with modern presentation
                to create unforgettable dining experiences.
              </p>
            </div>
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <Card className="bg-card/50 border-border shadow-warm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary font-playfair">50+</div>
                  <div className="text-sm text-muted-foreground font-inter">Family Recipes</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border shadow-warm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary font-playfair">★★★★★</div>
                  <div className="text-sm text-muted-foreground font-inter">Customer Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-warm">
              <img
                src="/restaurant-interior.jpg"
                alt="Kaduk Restaurant Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <Card className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground shadow-glow">
              <CardContent className="p-6 text-center text-primary">
                <div className="text-2xl font-bold">Family</div>
                <div className="text-sm font-inter">Restaurant</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;