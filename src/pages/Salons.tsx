import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Search } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const mockSalons = [
  {
    id: 1,
    name: "Tranquil Touch Spa",
    location: "Downtown, 2.3 km",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    services: ["Massage", "Facial", "Manicure"],
    openNow: true
  },
  {
    id: 2,
    name: "Serenity Salon & Spa",
    location: "Midtown, 3.1 km",
    rating: 4.9,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=300&fit=crop",
    services: ["Hair Styling", "Spa", "Waxing"],
    openNow: true
  },
  {
    id: 3,
    name: "Glow Beauty Lounge",
    location: "Uptown, 4.5 km",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=300&fit=crop",
    services: ["Facial", "Body Treatment", "Nails"],
    openNow: false
  },
  {
    id: 4,
    name: "Zen Wellness Center",
    location: "West End, 5.2 km",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    services: ["Massage", "Yoga", "Meditation"],
    openNow: true
  }
];

const Salons = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-5xl font-display font-bold text-foreground mb-4">
              Find Your Perfect Salon
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse premium spas and beauty salons near you
            </p>
            
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search by location, service, or salon name..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mockSalons.map((salon) => (
              <Card key={salon.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={salon.image} 
                    alt={salon.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {salon.openNow && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Open Now
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{salon.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{salon.rating}</span>
                      <span className="text-muted-foreground">({salon.reviews})</span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {salon.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {salon.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <NavLink to={`/salon/${salon.id}`}>
                    <Button className="w-full">View Details & Book</Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salons;
