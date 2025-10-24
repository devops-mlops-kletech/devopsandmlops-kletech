import { motion } from "framer-motion";

const DevOpsInfinity = () => {
  return (
    <div className="relative w-80 h-48 mx-auto">
      <svg
        viewBox="0 0 240 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main cloud shape - much bigger and bulkier */}
        <motion.path
          d="M 20 75 Q 10 55, 30 45 Q 45 35, 65 45 Q 85 25, 110 35 Q 135 15, 160 35 Q 185 25, 205 45 Q 220 35, 230 55 Q 235 70, 220 80 Q 200 90, 180 80 Q 160 95, 140 80 Q 120 95, 100 80 Q 80 95, 60 80 Q 40 90, 20 75 Z"
          fill="url(#cloudGradient)"
          stroke="url(#cloudStroke)"
          strokeWidth="3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />

        {/* Floating particles around the cloud - repositioned for bigger cloud */}
        <motion.circle
          cx="70"
          cy="50"
          r="3"
          fill="hsl(190 100% 60%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-8, 8, -8], opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0,
          }}
        />
        
        <motion.circle
          cx="170"
          cy="55"
          r="2.5"
          fill="hsl(270 80% 70%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-6, 10, -6], opacity: [0, 1, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.circle
          cx="120"
          cy="40"
          r="3.5"
          fill="hsl(320 100% 70%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-7, 9, -7], opacity: [0, 1, 0] }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.5,
          }}
        />

        <motion.circle
          cx="90"
          cy="85"
          r="2.8"
          fill="hsl(200 90% 65%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-9, 6, -9], opacity: [0, 1, 0] }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1.5,
          }}
        />

        <motion.circle
          cx="150"
          cy="90"
          r="3.2"
          fill="hsl(250 85% 65%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-8, 8, -8], opacity: [0, 1, 0] }}
          transition={{
            duration: 3.8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />

        <motion.circle
          cx="50"
          cy="70"
          r="2.6"
          fill="hsl(210 95% 60%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-7, 7, -7], opacity: [0, 1, 0] }}
          transition={{
            duration: 4.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2.5,
          }}
        />

        <motion.circle
          cx="190"
          cy="75"
          r="2.4"
          fill="hsl(300 90% 65%)"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-6, 9, -6], opacity: [0, 1, 0] }}
          transition={{
            duration: 3.6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
        />

        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(190 100% 50%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(270 80% 60%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(320 100% 60%)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="cloudStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190 100% 50%)" />
            <stop offset="50%" stopColor="hsl(270 80% 60%)" />
            <stop offset="100%" stopColor="hsl(320 100% 60%)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DevOpsInfinity;
