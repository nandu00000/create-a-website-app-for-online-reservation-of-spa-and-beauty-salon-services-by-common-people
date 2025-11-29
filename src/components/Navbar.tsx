import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Sparkles, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const Navbar = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-2xl font-display font-semibold text-foreground">
            <Sparkles className="h-6 w-6 text-primary" />
            Serenity
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/salons" 
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Browse Salons
            </NavLink>
            <NavLink 
              to="/how-it-works" 
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              How It Works
            </NavLink>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <NavLink to="/dashboard">
                  <Button variant="ghost">My Bookings</Button>
                </NavLink>
                <NavLink to="/account">
                  <Button variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signin">
                  <Button variant="ghost">Sign In</Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button>Get Started</Button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
