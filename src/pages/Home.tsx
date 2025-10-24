import { motion } from "framer-motion";
import { ArrowRight, Rocket, Users, Target, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DevOpsInfinity from "@/components/DevOpsInfinity";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card"></div>
        
        {/* Animated cloud background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating cloud icons */}
          <motion.div
            className="absolute top-20 left-10"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-16 h-16 text-primary/20" />
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-20"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-12 h-12 text-secondary/25" />
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-20"
            animate={{
              x: [0, 40, 0],
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-20 h-20 text-accent/15" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-10"
            animate={{
              x: [0, -35, 0],
              y: [0, 20, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-14 h-14 text-primary/30" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/3"
            animate={{
              x: [0, 20, 0],
              y: [0, -30, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-10 h-10 text-secondary/20" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/3"
            animate={{
              x: [0, -20, 0],
              y: [0, 25, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud className="w-18 h-18 text-accent/25" />
          </motion.div>

          {/* Subtle background blur effects */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <DevOpsInfinity />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Cloud-Native Future
              </span>
              <br />
              at KLE Tech
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Empowering students with real-world DevOps and MLOps skills.
              From Coding to Deployment — Bridging the Academic-Industry Gap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Join Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Join <span className="text-primary">DevOps and MLOps Club - KLETECH?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Become part of a thriving student-led ecosystem focused on cloud-native technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Hands-On Learning",
                description: "Master Docker, Kubernetes, CI/CD, and cloud platforms through real projects",
              },
              {
                icon: Users,
                title: "Industry Connect",
                description: "Learn from experts, attend workshops, and get certification guidance",
              },
              {
                icon: Target,
                title: "Real Impact",
                description: "Deploy live projects, contribute to open-source, and compete in hackathons",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Cloud Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the DevOps revolution at KLE Tech and become a globally competitive engineer
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
