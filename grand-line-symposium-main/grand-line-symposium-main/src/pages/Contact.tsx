import { Phone, Mail, MapPin, User, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const studentCoordinators = [
    {
      name: "Monkey D. Luffy",
      role: "Student Coordinator",
      phone: "+91 98765 43210",
      email: "luffy@grandlinefest.com"
    },
    {
      name: "Roronoa Zoro",
      role: "Technical Lead",
      phone: "+91 98765 43211",
      email: "zoro@grandlinefest.com"
    }
  ];

  const staffCoordinators = [
    {
      name: "Prof. Silvers Rayleigh",
      role: "Faculty Advisor",
      phone: "+91 98765 43212",
      email: "rayleigh@college.edu"
    },
    {
      name: "Dr. Nico Robin",
      role: "Event Coordinator",
      phone: "+91 98765 43213",
      email: "robin@college.edu"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-ocean-deep/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            Contact Us
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our crew is here to help you navigate!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Location */}
            <div className="card-pirate mb-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pirate-red to-straw-hat flex items-center justify-center text-foreground mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl text-treasure-gold mb-2">Event Location</h2>
              <p className="text-muted-foreground">
                New World Engineering College<br />
                123 Grand Line Avenue, Paradise District<br />
                East Blue City - 600001
              </p>
            </div>

            {/* Coordinators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Student Coordinators */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-ocean-light flex items-center justify-center text-pirate-dark">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-2xl text-gradient-ocean">Student Coordinators</h2>
                </div>
                
                <div className="space-y-4">
                  {studentCoordinators.map((coordinator, index) => (
                    <div key={index} className="card-pirate">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <User className="w-6 h-6 text-treasure-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-lg text-treasure-gold">{coordinator.name}</h3>
                          <p className="text-ocean-light text-sm mb-3">{coordinator.role}</p>
                          <div className="space-y-2">
                            <a
                              href={`tel:${coordinator.phone}`}
                              className="flex items-center gap-2 text-muted-foreground hover:text-treasure-gold transition-colors text-sm"
                            >
                              <Phone className="w-4 h-4" />
                              {coordinator.phone}
                            </a>
                            <a
                              href={`mailto:${coordinator.email}`}
                              className="flex items-center gap-2 text-muted-foreground hover:text-treasure-gold transition-colors text-sm"
                            >
                              <Mail className="w-4 h-4" />
                              {coordinator.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Coordinators */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-treasure-gold flex items-center justify-center text-pirate-dark">
                    <User className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-2xl text-gradient-gold">Staff Coordinators</h2>
                </div>
                
                <div className="space-y-4">
                  {staffCoordinators.map((coordinator, index) => (
                    <div key={index} className="card-pirate">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <User className="w-6 h-6 text-treasure-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-lg text-treasure-gold">{coordinator.name}</h3>
                          <p className="text-ocean-light text-sm mb-3">{coordinator.role}</p>
                          <div className="space-y-2">
                            <a
                              href={`tel:${coordinator.phone}`}
                              className="flex items-center gap-2 text-muted-foreground hover:text-treasure-gold transition-colors text-sm"
                            >
                              <Phone className="w-4 h-4" />
                              {coordinator.phone}
                            </a>
                            <a
                              href={`mailto:${coordinator.email}`}
                              className="flex items-center gap-2 text-muted-foreground hover:text-treasure-gold transition-colors text-sm"
                            >
                              <Mail className="w-4 h-4" />
                              {coordinator.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
