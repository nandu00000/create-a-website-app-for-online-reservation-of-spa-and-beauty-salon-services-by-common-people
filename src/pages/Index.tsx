import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin, Sparkles, Star, Clock } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-spa.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                Your Wellness,
                <br />
                <span className="text-primary">Simplified</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Book spa and beauty services at premium salons near you. 
                Simple, elegant, and designed for your peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <NavLink to="/salons">
                  <Button size="lg" className="text-base px-8">
                    Explore Salons
                  </Button>
                </NavLink>
                <NavLink to="/how-it-works">
                  <Button size="lg" variant="outline" className="text-base px-8">
                    Learn More
                  </Button>
                </NavLink>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img 
                src={heroImage} 
                alt="Luxury spa experience" 
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
              Why Choose Serenity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a new way to book wellness services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Find Nearby",
                description: "Discover premium salons and spas in your area with our intelligent location search"
              },
              {
                icon: Calendar,
                title: "Easy Booking",
                description: "Select your preferred service, date, and time in just a few clicks"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "All partner salons are verified and reviewed by our community"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-card border-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
              Simple Steps to Serenity
            </h2>
            <p className="text-xl text-muted-foreground">
              Book your perfect spa day in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Browse & Select",
                description: "Explore salons near you and choose your desired services"
              },
              {
                step: "02",
                title: "Pick Your Time",
                description: "Select a convenient date and time that works for you"
              },
              {
                step: "03",
                title: "Relax & Enjoy",
                description: "Show up and enjoy your premium wellness experience"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-display font-semibold flex items-center justify-center mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Ready to Transform Your Wellness Routine?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who have discovered a better way to book spa and beauty services
          </p>
          <NavLink to="/signup">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Create Free Account
            </Button>
          </NavLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-display font-semibold">
              <Sparkles className="h-5 w-5 text-primary" />
              Serenity
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Serenity. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
