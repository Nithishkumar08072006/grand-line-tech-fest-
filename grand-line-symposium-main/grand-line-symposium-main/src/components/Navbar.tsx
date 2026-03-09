import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Anchor } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Developers", path: "/developers" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pirate-dark/90 backdrop-blur-md border-b border-treasure-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Anchor className="w-8 h-8 text-treasure-gold group-hover:animate-wave" />
            <span className="font-display text-2xl text-gradient-gold">Grand Line Fest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link font-medium ${
                  isActive(item.path) ? "text-treasure-gold after:w-full" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/events" className="btn-treasure text-sm py-2 px-6">
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-pirate-dark/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(item.path) ? "text-treasure-gold" : "text-foreground/80 hover:text-treasure-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              className="block btn-treasure text-center text-sm py-3"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
