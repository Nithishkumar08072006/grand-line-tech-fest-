import { Link } from "react-router-dom";
import { Calendar, Compass, Sparkles, Users, Trophy, Anchor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Technical Events",
      description: "Showcase your coding prowess and problem-solving skills"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Non-Technical Events",
      description: "Express your creativity through art, music, and more"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Events",
      description: "Team up with your nakama for exciting group challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-pirate-dark/70 via-pirate-dark/50 to-pirate-dark" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="animate-float mb-6">
            <Anchor className="w-16 h-16 md:w-20 md:h-20 text-treasure-gold mx-auto" />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-gold mb-4 animate-fade-in">
            Grand Line Fest
          </h1>
          
          <p className="text-xl md:text-2xl text-treasure-shine font-medium mb-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            🏴‍☠️ The Ultimate Technical Symposium 🏴‍☠️
          </p>
          
          <div className="flex items-center justify-center gap-2 text-foreground/90 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Calendar className="w-5 h-5 text-treasure-gold" />
            <span className="text-lg">March 25-26, 2024</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Set sail on an epic adventure of innovation, creativity, and competition. 
            Discover the treasure of knowledge that awaits!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link to="/events" className="btn-treasure inline-flex items-center justify-center gap-2">
              <Compass className="w-5 h-5" />
              Register Now
            </Link>
            <Link to="/events" className="btn-ocean inline-flex items-center justify-center gap-2">
              Explore Events
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-treasure-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-treasure-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
              Your Adventure Awaits
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join fellow pirates from across the seas in an unforgettable journey of learning and competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-pirate text-center group opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-treasure-gold to-treasure-shine flex items-center justify-center text-pirate-dark group-hover:animate-pulse-glow transition-all">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl text-treasure-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-light/20 to-ocean-deep opacity-50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Ready to Become the <span className="text-gradient-gold">Pirate King</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Don't miss this chance to prove your worth and claim the ultimate treasure of victory!
          </p>
          <Link to="/events" className="btn-treasure inline-flex items-center gap-2">
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
