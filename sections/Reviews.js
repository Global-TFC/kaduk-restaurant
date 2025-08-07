import { Card, CardContent } from "../components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const customerReviews = [
    {
      icon: Star,
      name: "Dev Krishna",
      review:
        "It was a great experience... Good foods and good service...Comparatively cheaper than other restaurants...Family atmosphere and good ambience too...",
      rating: 5,
      location: "Local Food Critic",
    },
    {
      icon: Quote,
      name: "Riswana Haneefa",
      review:
        "It was a good place for veriity chicken dishes.. And delicious food... Jst try it..",
      rating: 5,
      location: "Regular Customer",
    },
    {
      icon: Star,
      name: "Ali Juraiz O",
      review:
        "Great place for mandi, kanthari alfahm and beef usmania. Recommended dishes Chicken Pollichad, Kathari Chicken and Porotta",
      rating: 4,
      location: "Food Enthusiast",
    },
    {
      icon: Quote,
      name: "Risvana Padinharayil",
      review:
        "Good place for who searching variety and delicious foods.must try atleast once, you will be adicted to it.",
      rating: 5,
      location: "Regular Customer",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-primary">Customers</span>
          </h2>
          <h3 className="text-2xl text-gray-500 ">Are Saying</h3>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover why families choose Kaduk Restaurant for authentic flavors
            and memorable dining experiences.
          </p>
        </div>
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerReviews.map((review, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-warm hover:shadow-glow transition-all duration-300 group animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <review.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed italic">
                    "{review.review}"
                  </p>
                  <div className="border-t border-border pt-3">
                    <h4 className="text-sm font-playfair font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-inter">
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Customer Testimonial Banner */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="bg-primary text-primary-foreground shadow-glow max-w-4xl mx-auto hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Quote className="h-12 w-12 mx-auto opacity-50" />
                <h3 className="text-2xl md:text-3xl font-playfair font-bold">
                  Authentic Family Experience
                </h3>
                <p className="text-lg font-inter opacity-90">
                  "Kaduk Restaurant isn't just about food - it's about
                  preserving family traditions and creating new memories. Every
                  dish tells a story, every meal brings families closer
                  together."
                </p>
                <p className="text-sm opacity-85 font-inter">
                  - The Kaduk Family Legacy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
