import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const MenuHighlights = () => {
  const specialties = [
    {
      title: "Authentic Family Recipes",
      description: "Savor traditional dishes made from time-honored family recipes passed down through generations.",
      highlight: "Heritage Flavors"
    },
    {
      title: "Multi-Cuisine Delights",
      description: "Experience a diverse menu featuring carefully crafted dishes from various culinary traditions.",
      highlight: "Global Tastes"
    },
    {
      title: "Fresh & Quality Ingredients",
      description: "Every dish is prepared with the finest ingredients and attention to detail for exceptional taste.",
      highlight: "Premium Quality"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Discover Our Unique{" "}
            <span className="text-primary">Flavors</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Experience culinary artistry where every dish is a specialty and every bite a taste of tradition.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-warm">
              <img
                src="/menu-spread.jpg"
                alt="Traditional Indian dishes"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          {/* Menu Highlights */}
          <div className="space-y-6">
            {specialties.map((item, index) => (
              <Card key={index} className="bg-card border-border shadow-warm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-inter font-medium">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            <div className="pt-6">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium shadow-glow"
              >
                View Full Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;