import { motion } from "framer-motion";

const DevOpsInfinity = () => {
  return (
    <div className="relative w-64 h-32 mx-auto">
      <svg
        viewBox="0 0 200 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 50 50 Q 25 25, 50 10 Q 75 -5, 100 10 Q 125 25, 150 10 Q 175 -5, 150 50 Q 125 75, 100 90 Q 75 105, 50 90 Q 25 75, 50 50 Z"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        />
        
        <motion.circle
          r="4"
          fill="hsl(190 100% 50%)"
          initial={{ offsetDistance: "0%", opacity: 1 }}
          animate={{ offsetDistance: "100%", opacity: 1 }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            offsetPath: "path('M 50 50 Q 25 25, 50 10 Q 75 -5, 100 10 Q 125 25, 150 10 Q 175 -5, 150 50 Q 125 75, 100 90 Q 75 105, 50 90 Q 25 75, 50 50 Z')",
          }}
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
