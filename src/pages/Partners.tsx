import { motion } from "framer-motion";
import { Cloud, Github, Award, Globe } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "AWS Educate",
      description: "Cloud computing resources and training for students",
      icon: Cloud,
    },
    {
      name: "Google Cloud for Students",
      description: "Free credits and learning resources for GCP",
      icon: Cloud,
    },
    {
      name: "Microsoft Azure for Students",
      description: "Azure services and certifications for learners",
      icon: Cloud,
    },
    {
      name: "GitHub Campus",
      description: "Developer tools and GitHub Pro access",
      icon: Github,
    },
    {
      name: "CNCF",
      description: "Cloud Native Computing Foundation partnership",
      icon: Globe,
    },
    {
      name: "Docker Hub",
      description: "Container image registry and resources",
      icon: Award,
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
            Our <span className="text-primary">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with industry leaders to bring you the best learning resources
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 mb-16 border border-border text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Industry Collaborations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Through partnerships with leading cloud providers and tech organizations, we provide students
            with access to cutting-edge tools, certifications, and real-world project opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all text-center h-full flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <partner.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Want to Partner With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for new partnerships to enhance our student community.
            If you're interested in collaborating, reach out to us!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
