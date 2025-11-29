import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Plus } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const mockBookings = [
  {
    id: 1,
    salon: "Tranquil Touch Spa",
    service: "Swedish Massage",
    date: "2024-12-05",
    time: "2:00 PM",
    status: "upcoming",
    location: "123 Wellness Ave"
  },
  {
    id: 2,
    salon: "Serenity Salon & Spa",
    service: "Hair Styling",
    date: "2024-11-28",
    time: "11:00 AM",
    status: "completed",
    location: "456 Beauty Blvd"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-display font-bold text-foreground mb-2">
                My Bookings
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your spa and beauty appointments
              </p>
            </div>
            <div className="flex gap-3">
              <NavLink to="/account">
                <Button variant="outline" size="lg">
                  Account Settings
                </Button>
              </NavLink>
              <NavLink to="/salons">
                <Button size="lg">
                  <Plus className="h-5 w-5 mr-2" />
                  New Booking
                </Button>
              </NavLink>
            </div>
          </div>

          <div className="grid gap-6">
            {mockBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-1">{booking.salon}</CardTitle>
                      <CardDescription className="text-base">{booking.service}</CardDescription>
                    </div>
                    <Badge 
                      variant={booking.status === "upcoming" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(booking.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                  
                  {booking.status === "upcoming" && (
                    <div className="flex gap-3">
                      <Button variant="outline">Reschedule</Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {mockBookings.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start your wellness journey by booking your first appointment
                </p>
                <NavLink to="/salons">
                  <Button>Browse Salons</Button>
                </NavLink>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
