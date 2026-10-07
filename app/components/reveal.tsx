"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  entrance?: boolean;
};

export function Reveal({ children, className, delay = 0, entrance = false }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const target = { opacity: 1, y: 0 };

  return (
    <motion.div
      animate={entrance ? target : undefined}
      className={["motion-reveal", className].filter(Boolean).join(" ")}
      initial={reducedMotion ? false : { opacity: entrance ? 1 : 0, y: 16 }}
      transition={{
        duration: reducedMotion ? 0 : 0.62,
        delay: reducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ amount: 0.15, once: true }}
      whileInView={entrance ? undefined : target}
    >
      {children}
    </motion.div>
  );
}
