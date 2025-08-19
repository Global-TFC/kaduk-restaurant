import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

const MenuHighlights = () => {
  const specialties = [
    {
      title: "Kappa + Beef",
      description: "A classic Kerala combination of fluffy tapioca (kappa) served with a rich and spicy beef curry.",
      highlight: "Authentic Kerala Combo"
    },
    {
      title: "Kappa Fish Mulakittath",
      description: "Soft-cooked tapioca paired with a fiery red fish curry, a staple dish from the heart of Kerala.",
      highlight: "Spicy Seafood Delight"
    },
    {
      title: "Erachi Puttu",
      description: "Steamed rice cakes layered with a savory filling of spiced minced meat (beef, chicken, or shrimp).",
      highlight: "A Savory Twist"
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
                src="/biryani.jpeg"
                alt="Biryani"
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
                    <span className="hidden sm:inline text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-inter font-medium">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Link href={"/menu"} className="pt-6">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium shadow-glow  cursor-pointer"
              >
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;