import { Link } from "react-router-dom";
import { Anchor, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pirate-dark border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Anchor className="w-8 h-8 text-treasure-gold" />
              <span className="font-display text-2xl text-gradient-gold">Grand Line Fest</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Embark on an epic adventure of knowledge, creativity, and competition. 
              The treasure awaits those who dare to participate!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-treasure-gold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-muted-foreground hover:text-treasure-gold transition-colors">Events</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-treasure-gold transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-treasure-gold transition-colors">Contact</Link></li>
              <li><Link to="/developers" className="text-muted-foreground hover:text-treasure-gold transition-colors">Developers</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg text-treasure-gold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-treasure-gold hover:text-pirate-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-treasure-gold hover:text-pirate-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-treasure-gold hover:text-pirate-dark transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="text-center text-muted-foreground text-sm">
          <p>© 2024 Grand Line Fest. All rights reserved. Set sail for adventure!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
