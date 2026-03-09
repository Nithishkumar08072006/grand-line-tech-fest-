import { useState } from "react";
import { Code, Palette, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCarousel from "@/components/EventCarousel";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const technicalEvents = [
    {
      id: 1,
      name: "Code Pirates",
      description: "Battle it out in an intense coding competition. Solve algorithmic challenges and prove your programming mastery.",
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500"
    },
    {
      id: 2,
      name: "Web Warriors",
      description: "Design and develop a stunning website within the time limit. Creativity meets functionality!",
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
    },
    {
      id: 3,
      name: "Bug Hunt",
      description: "Find and fix bugs in the given codebase. The fastest debugger wins the treasure!",
      duration: "1.5 hours",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
    },
    {
      id: 4,
      name: "Tech Quiz",
      description: "Test your knowledge across various technical domains. From OS to AI, cover it all!",
      duration: "1 hour",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
    }
  ];

  const nonTechnicalEvents = [
    {
      id: 1,
      name: "Treasure Art",
      description: "Express your creativity through art. Draw, paint, or sketch your way to glory!",
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500"
    },
    {
      id: 2,
      name: "Pirate's Got Talent",
      description: "Showcase your unique talents on stage. Singing, dancing, magic - anything goes!",
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500"
    },
    {
      id: 3,
      name: "Treasure Hunt",
      description: "Follow the clues scattered across campus to find the hidden treasure!",
      duration: "1.5 hours",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=500"
    },
    {
      id: 4,
      name: "Photography Quest",
      description: "Capture the essence of the symposium through your lens. Best shots win!",
      duration: "Full Day",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500"
    }
  ];

  const groupEvents = [
    {
      id: 1,
      name: "Ship Building",
      description: "Work together as a crew to build the best miniature pirate ship. Teamwork is key!",
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=500"
    },
    {
      id: 2,
      name: "Quiz Battle Royale",
      description: "Teams compete in an epic quiz showdown covering various topics. Unite your nakama!",
      duration: "2 hours",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500"
    },
    {
      id: 3,
      name: "Hackathon",
      description: "24-hour coding marathon. Build innovative solutions with your crew!",
      duration: "24 hours",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500"
    },
    {
      id: 4,
      name: "Drama Pirates",
      description: "Stage a theatrical performance with your team. Best drama crew wins!",
      duration: "30 mins/team",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=500"
    }
  ];

  const categories = [
    {
      id: "technical",
      name: "Technical Events",
      icon: <Code className="w-8 h-8" />,
      color: "from-ocean-light to-secondary",
      events: technicalEvents
    },
    {
      id: "non-technical",
      name: "Non-Technical Events",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pirate-red to-straw-hat",
      events: nonTechnicalEvents
    },
    {
      id: "group",
      name: "Group Events",
      icon: <Users className="w-8 h-8" />,
      color: "from-treasure-gold to-treasure-shine",
      events: groupEvents
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-ocean-deep/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            Choose Your Adventure
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your path and embark on exciting challenges. Every event is a new island to conquer!
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`card-pirate text-center group transition-all duration-300 ${
                  activeCategory === category.id ? "border-treasure-gold ring-2 ring-treasure-gold/30" : ""
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-pirate-dark group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-xl text-treasure-gold">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click to {activeCategory === category.id ? "hide" : "explore"}
                </p>
              </button>
            ))}
          </div>

          {/* Event Carousels */}
          {categories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 overflow-hidden ${
                activeCategory === category.id
                  ? "max-h-[800px] opacity-100 mb-12"
                  : "max-h-0 opacity-0"
              }`}
            >
              <EventCarousel events={category.events} title={category.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Chief Guest Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
              Chief Guest
            </h2>
            <div className="section-divider" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-pirate flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-treasure-gold shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300"
                    alt="Chief Guest"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-treasure-gold rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-pirate-dark" />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-display text-2xl text-treasure-gold mb-2">
                  Dr. Shanks Redfield
                </h3>
                <p className="text-ocean-light font-medium mb-3">
                  CEO, New World Technologies
                </p>
                <p className="text-muted-foreground">
                  A visionary leader in the tech industry with over 20 years of experience. 
                  Known for inspiring the next generation of innovators and explorers in the digital sea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
