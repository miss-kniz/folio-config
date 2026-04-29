"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/helpers/merge-helper";
import {
  createFadeUpVariants,
  createPageFadeVariants,
  createStaggerContainerVariants,
  createStaggerItemVariants,
  createTextRevealVariants,
} from "./variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  lift?: number;
  amount?: number;
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
};

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          className="min-h-screen"
          variants={createPageFadeVariants(reduceMotion)}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  lift = 12,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={createFadeUpVariants(reduceMotion, delay, lift)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  amount = 0.2,
}: StaggerProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={createStaggerContainerVariants(reduceMotion, delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={createStaggerItemVariants(reduceMotion)}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  text,
  className,
  delay = 0,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const lines = text.split("\n");

  return (
    <span className={cn("inline-block", className)}>
      {lines.map((line, lineIndex) => {
        const tokens = line.split(/(\s+)/);

        return (
          <span
            key={`${line}-${lineIndex}`}
            className={lineIndex > 0 ? "block" : "inline"}
          >
            {tokens.map((token, tokenIndex) => {
              if (token.trim() === "") {
                return <span key={`${lineIndex}-${tokenIndex}`}>{token}</span>;
              }

              return (
                <motion.span
                  key={`${lineIndex}-${tokenIndex}`}
                  className="inline-block will-change-transform"
                  variants={createTextRevealVariants(
                    reduceMotion,
                    delay + lineIndex * 0.08 + tokenIndex * 0.03,
                  )}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {token}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
