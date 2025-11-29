import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Clock, Phone, Mail, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockServices = [
  { id: 1, name: "Swedish Massage", duration: "60 min", price: "$80" },
  { id: 2, name: "Deep Tissue Massage", duration: "90 min", price: "$120" },
  { id: 3, name: "Aromatherapy Facial", duration: "75 min", price: "$95" },
  { id: 4, name: "Hot Stone Therapy", duration: "90 min", price: "$130" },
  { id: 5, name: "Body Scrub & Wrap", duration: "120 min", price: "$150" },
];

const SalonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleBooking = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "Select services",
        description: "Please select at least one service to continue",
        variant: "destructive"
      });
      return;
    }
    navigate("/booking", { state: { services: selectedServices, salonId: id } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Salons
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop"
                  alt="Tranquil Touch Spa"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-display font-bold text-foreground mb-2">
                      Tranquil Touch Spa
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>123 Wellness Ave, Downtown</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-semibold">4.8</span>
                        <span>(124 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Open Now</Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Experience ultimate relaxation at Tranquil Touch Spa. Our expert therapists 
                  combine ancient wellness techniques with modern treatments to provide you 
                  with a transformative spa experience. From rejuvenating massages to 
                  revitalizing facials, we're dedicated to your well-being.
                </p>
              </div>

              <Tabs defaultValue="services" className="w-full">
                <TabsList>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="services" className="mt-6">
                  <div className="space-y-4">
                    {mockServices.map((service) => (
                      <Card 
                        key={service.id}
                        className={`cursor-pointer transition-all ${
                          selectedServices.includes(service.id) 
                            ? 'ring-2 ring-primary bg-primary/5' 
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{service.name}</CardTitle>
                              <CardDescription className="flex items-center gap-2 mt-1">
                                <Clock className="h-4 w-4" />
                                {service.duration}
                              </CardDescription>
                            </div>
                            <div className="text-2xl font-semibold text-primary">
                              {service.price}
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Opening Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                          <p>Saturday: 10:00 AM - 6:00 PM</p>
                          <p>Sunday: 11:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>(555) 123-4567</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            <span>info@tranquiltouch.com</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">Reviews coming soon...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book Your Experience</CardTitle>
                  <CardDescription>
                    {selectedServices.length > 0 
                      ? `${selectedServices.length} service(s) selected`
                      : 'Select services to continue'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleBooking}
                    disabled={selectedServices.length === 0}
                  >
                    Continue to Booking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetail;
