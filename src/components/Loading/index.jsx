/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { ThreadsLogo } from "@/components/Icons/ThreadsLogo";

export const Loading = () => {
  return (
    <div className="bg-primary-foreground fixed inset-0 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ scale: 2.5, opacity: 0 }}
        exit={{ scale: 1, opacity: 0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <ThreadsLogo className="text-foreground size-20" />
      </motion.div>
      <div className="absolute bottom-10 flex flex-col items-center">
        <span className="text-sm font-semibold text-gray-400">form</span>
        <span className="text-foreground font-semibold">YoungTobi 💖</span>
      </div>
    </div>
  );
};
