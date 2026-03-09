import { Target, Eye, Heart, Anchor, Compass, Map } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const reasons = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Learn & Grow",
      description: "Expand your knowledge through diverse events and workshops"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Network",
      description: "Connect with like-minded students and industry professionals"
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: "Compete",
      description: "Test your skills against the best and win exciting prizes"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Have Fun",
      description: "Create lasting memories with fellow adventurers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-ocean-deep/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            About Grand Line Fest
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The story behind the most epic student symposium on the seven seas
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-pirate mb-12">
              <h2 className="font-display text-2xl text-treasure-gold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Grand Line Fest is more than just a symposium – it's an adventure that brings together 
                the brightest minds from colleges across the region. Inspired by the spirit of exploration 
                and camaraderie from the legendary anime One Piece, we've created an event that celebrates 
                both technical excellence and creative expression.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded by a group of passionate students who believed that learning should be as exciting 
                as setting sail for the Grand Line, this symposium has grown into one of the most anticipated 
                student events of the year. We bring together technology, creativity, teamwork, and the 
                undying spirit of adventure.
              </p>
              <p className="text-muted-foreground">
                Whether you're a coding ninja, an artistic soul, or someone who thrives in team challenges, 
                Grand Line Fest has something special waiting for you. Join us as we embark on this 
                incredible journey together!
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card-pirate">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-ocean-light to-secondary flex items-center justify-center text-pirate-dark mb-4">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl text-treasure-gold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create a platform where students can discover their true potential, forge lasting 
                  friendships, and embark on a journey of innovation and creativity. We envision a community 
                  where every participant becomes the captain of their own destiny.
                </p>
              </div>

              <div className="card-pirate">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-treasure-gold to-treasure-shine flex items-center justify-center text-pirate-dark mb-4">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl text-treasure-gold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide students with opportunities to showcase their talents, learn from industry 
                  experts, and compete in a friendly yet challenging environment. We aim to bridge the 
                  gap between academic learning and real-world application.
                </p>
              </div>
            </div>

            {/* Why Participate */}
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-gradient-gold mb-4">
                Why Should You Join?
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="card-pirate flex items-start gap-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-treasure-gold shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-treasure-gold mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
