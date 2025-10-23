import { motion } from "framer-motion";
import { Cloud, Server, Cpu, Database, GitBranch, Container } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1: Pilot",
      period: "Months 1-6",
      items: [
        { icon: Container, text: "Docker & Containerization workshops" },
        { icon: Cloud, text: "Introduction to Cloud Computing (AWS, GCP, Azure)" },
        { icon: GitBranch, text: "Git, GitHub, and Version Control mastery" },
        { icon: Server, text: "Basic CI/CD pipelines with GitHub Actions" },
      ],
    },
    {
      phase: "Phase 2: Expansion",
      period: "Months 7-12",
      items: [
        { icon: Cpu, text: "Kubernetes orchestration and deployment" },
        { icon: Database, text: "Infrastructure as Code (Terraform, Ansible)" },
        { icon: Cloud, text: "Advanced cloud services and architecture" },
        { icon: Server, text: "Guest lectures from industry DevOps experts" },
      ],
    },
    {
      phase: "Phase 3: Scaling",
      period: "Year 2+",
      items: [
        { icon: Cloud, text: "MLOps: ML model deployment and monitoring" },
        { icon: Server, text: "Production-grade project deployments" },
        { icon: GitBranch, text: "Open-source contributions and hackathons" },
        { icon: Cpu, text: "CNCF/IEEE affiliation and Annual Cloud Summit" },
      ],
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
            Our <span className="text-primary">Roadmap</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured journey from fundamentals to industry-level expertise
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phaseIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: phaseIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              <div className="md:flex md:items-start md:gap-8">
                {/* Phase number indicator */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 -ml-6 bg-background border-4 border-primary rounded-full flex items-center justify-center text-primary font-bold z-10">
                  {phaseIndex + 1}
                </div>

                {/* Content - alternating sides on desktop */}
                <div className={`ml-24 md:ml-0 md:w-1/2 ${phaseIndex % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                    <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-primary font-semibold mb-6">{phase.period}</p>
                    
                    <div className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: phaseIndex % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-muted-foreground pt-2">{item.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Objectives Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-border"
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Key <span className="text-primary">Objectives</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Hands-on workshops on Cloud & DevOps tools",
              "Guest lectures by industry experts",
              "Certification guidance (AWS, GCP, CKA)",
              "Deploying real-world student projects",
              "Open-source contributions",
              "Inter-college hackathons and competitions",
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-card/50 rounded-xl p-4 border border-border/50"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-muted-foreground">{objective}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;
