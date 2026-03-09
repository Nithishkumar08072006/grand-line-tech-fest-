import { Github, Linkedin, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Developers = () => {
  const developers = [
    {
      name: "Franky Cyborg",
      role: "Lead Developer",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      linkedin: "https://linkedin.com/in/franky",
      github: "https://github.com/franky"
    },
    {
      name: "Tony Tony Chopper",
      role: "UI/UX Designer",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      linkedin: "https://linkedin.com/in/chopper",
      github: "https://github.com/chopper"
    },
    {
      name: "Usopp Sniper",
      role: "Frontend Developer",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
      linkedin: "https://linkedin.com/in/usopp",
      github: "https://github.com/usopp"
    },
    {
      name: "Brook Soul King",
      role: "Backend Developer",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
      linkedin: "https://linkedin.com/in/brook",
      github: "https://github.com/brook"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-ocean-deep/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            The Shipwrights
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented crew who built this digital vessel
          </p>
        </div>
      </section>

      {/* Developers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="card-pirate text-center group opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Photo */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-treasure-gold/50 group-hover:border-treasure-gold transition-colors">
                    <img
                      src={dev.photo}
                      alt={dev.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-ocean-light to-secondary rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl text-treasure-gold mb-1">
                  {dev.name}
                </h3>
                <p className="text-ocean-light text-sm mb-4">
                  {dev.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#0077B5] hover:text-foreground transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-pirate-dark transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="card-pirate max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Built with ❤️ and the spirit of adventure.<br />
              <span className="text-treasure-gold font-display">
                "I'm gonna be King of the Pirates!" - Monkey D. Luffy
              </span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
