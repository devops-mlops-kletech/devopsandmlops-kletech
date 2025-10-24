import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const facultyAdvisor = {
    name: "Dr. Narayan D G",
    role: "Head of the Department",
    department: "Computer Science & Engineering (AI)",
    image: "",
  };

  const coreMembers = [
    {
      name: "Rishi Kulkarni",
      role: "",
      year: "Third Year",
      image: "",
    },
    {
      name: "Sparsh Naik",
      role: "",
      year: "Third Year",
      image: "",
    },
    {
      name: "Amaan Ali Doddamani",
      role: "",
      year: "Third Year",
      image: "",
    },
    {
      name: "Simran Kalkeri",
      role: "",
      year: "Third Year",
      image: "",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate individuals driving the cloud-native revolution at KLE Tech
          </p>
        </motion.div>

        {/* Faculty Advisor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Faculty Advisor</h2>
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50"></div>
              <img
                src={facultyAdvisor.image}
                alt={facultyAdvisor.name}
                className="relative w-32 h-32 rounded-full mx-auto border-4 border-primary/20"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{facultyAdvisor.name}</h3>
            <p className="text-primary font-semibold mb-1">{facultyAdvisor.role}</p>
            <p className="text-muted-foreground mb-6">{facultyAdvisor.department}</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Core Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all h-full flex flex-col">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-24 h-24 rounded-full mx-auto border-2 border-border group-hover:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1 leading-tight min-h-[3rem] flex items-center justify-center">
                        <span className="break-words">{member.name}</span>
                      </h3>
                      <p className="text-primary font-semibold text-sm mb-1 min-h-[1.25rem]">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.year}</p>
                    </div>
                    <div className="flex justify-center gap-2 mt-auto">
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
