import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

const MenuHighlights = () => {
  const specialties = [
    {
      title: "Thalassery Chicken Biryani",
      description: "Thalassery Chicken Biryani is a traditional North Kerala biryani made with rice, tender chicken, and mild aromatic spices.",
      highlight: "Heritage Flavors"
    },
    {
      title: "Kozhikoden Beef Biryani",
      description: "A spicy and flavorful Malabar biryani made with tender beef, rice, and traditional Kerala spices.",
      highlight: "Malabar Tastes"
    },
    {
      title: "Beef Usmani",
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