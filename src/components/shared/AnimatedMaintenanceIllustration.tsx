import { RefreshCw, Wrench, Sprout } from "lucide-react";
import { motion } from "motion/react";

export const AnimatedMaintenanceIllustration = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-2xl h-[280px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--vegrin-green-50)] to-white border border-[var(--vegrin-green-200)]">
        {/* rotating gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute left-24 top-20"
        >
          <RefreshCw className="w-16 h-16 text-[var(--vegrin-green-500)] opacity-70" />
        </motion.div>

        {/* floating wrench */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute right-24 top-16"
        >
          <Wrench className="w-16 h-16 text-[var(--vegrin-green-600)]" />
        </motion.div>

        {/* main sprout icon */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="relative z-10"
        >
          <div className="absolute inset-0 bg-[var(--vegrin-green-400)] blur-3xl opacity-20 rounded-full" />
          <Sprout className="w-28 h-28 text-[var(--vegrin-green-600)] relative z-10" />
        </motion.div>

        {/* bottom status text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-8 text-sm font-medium text-[var(--vegrin-green-700)]"
        >
          Optimizing your farming experience...
        </motion.div>
      </div>
    </div>
  );
};
