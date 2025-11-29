import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Sparkles } from "lucide-react";

const Navbar = () => {
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
            <NavLink to="/auth">
              <Button variant="ghost">Sign In</Button>
            </NavLink>
            <NavLink to="/auth?mode=signup">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
