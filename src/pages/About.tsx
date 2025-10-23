import { motion } from "framer-motion";
import { Cloud, Code, Rocket, Globe } from "lucide-react";

const About = () => {
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
            About <span className="text-primary">Our Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a cloud-native student community that bridges academics with real-world industry practices
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To create a thriving student-led ecosystem that empowers learners with hands-on skills
              in cloud computing, DevOps, and reliability engineering. We bridge the gap between
              theoretical knowledge and practical industry experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To establish KLE Tech as a recognized hub for cloud-native education, producing
              globally competitive engineers who are ready to tackle real-world challenges in
              DevOps, MLOps, and cloud infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Why Cloud & DevOps Matter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Why <span className="text-primary">Cloud & DevOps</span> Matter
          </h2>
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In today's technology landscape, cloud computing and DevOps practices are no longer optional—they're
              fundamental to building scalable, reliable, and efficient systems. The industry demands engineers who
              can not only write code but also understand the entire software delivery lifecycle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to tech giants like Google, Amazon, and Microsoft, every organization relies on cloud
              infrastructure and DevOps practices. By mastering these skills, you're not just learning tools—you're
              preparing for the future of software engineering.
            </p>
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            From Coding to Deployment
          </h2>
          <p className="text-xl text-primary font-semibold mb-6">
            Bridging the Academic-Industry Gap
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlike traditional clubs that focus solely on coding competitions or theory, we emphasize the complete
            software development lifecycle. You'll learn to build, test, deploy, and monitor applications just like
            professional DevOps engineers do in the industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
