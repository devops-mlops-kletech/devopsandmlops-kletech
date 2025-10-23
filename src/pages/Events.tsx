import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Docker Deep Dive Workshop",
      date: "March 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Auditorium, KLE Tech",
      description: "Learn container fundamentals, Docker Compose, and multi-stage builds",
      status: "Registrations Open",
    },
    {
      title: "Cloud Architecture Masterclass",
      date: "March 28, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Online (Zoom)",
      description: "Industry expert session on designing scalable cloud infrastructure",
      status: "Coming Soon",
    },
    {
      title: "Kubernetes Hands-On Lab",
      date: "April 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 3",
      description: "Deploy, scale, and manage containerized applications with K8s",
      status: "Coming Soon",
    },
  ];

  const pastEvents = [
    {
      title: "Club Inauguration & Git Workshop",
      date: "January 20, 2025",
      attendees: 150,
      description: "Official launch with Git and GitHub fundamentals",
    },
    {
      title: "Introduction to DevOps",
      date: "February 5, 2025",
      attendees: 120,
      description: "Overview of DevOps practices and CI/CD pipelines",
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
            Events & <span className="text-primary">Workshops</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our hands-on workshops, guest lectures, and community events
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full flex flex-col">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 self-start">
                    {event.status}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  
                  <Button className="w-full group/btn bg-primary hover:bg-primary/90">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                <p className="text-muted-foreground mb-3">{event.description}</p>
                <div className="text-sm text-primary font-semibold">
                  {event.attendees} attendees
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
