import type { Variants } from "framer-motion";

const calmEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const duration = (reduceMotion: boolean, base = 0.7) =>
  reduceMotion ? 0 : base;

export const createPageFadeVariants = (reduceMotion: boolean): Variants => ({
  initial: {
    opacity: reduceMotion ? 1 : 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: duration(reduceMotion, 0.35),
      ease: calmEase,
    },
  },
  exit: {
    opacity: reduceMotion ? 1 : 0,
    transition: {
      duration: duration(reduceMotion, 0.25),
      ease: calmEase,
    },
  },
});

export const createFadeUpVariants = (
  reduceMotion: boolean,
  delay = 0,
  lift = 12,
): Variants => ({
  hidden: {
    opacity: reduceMotion ? 1 : 0,
    y: reduceMotion ? 0 : lift,
    filter: reduceMotion ? "none" : "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration(reduceMotion, 0.8),
      delay: reduceMotion ? 0 : delay,
      ease: calmEase,
    },
  },
});

export const createStaggerContainerVariants = (
  reduceMotion: boolean,
  delay = 0,
  stagger = 0.08,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: reduceMotion ? 0 : delay,
      staggerChildren: reduceMotion ? 0 : stagger,
      when: "beforeChildren",
    },
  },
});

export const createStaggerItemVariants = (
  reduceMotion: boolean,
  lift = 10,
): Variants => ({
  hidden: {
    opacity: reduceMotion ? 1 : 0,
    y: reduceMotion ? 0 : lift,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration(reduceMotion, 0.55),
      ease: calmEase,
    },
  },
});

export const createTextRevealVariants = (
  reduceMotion: boolean,
  delay = 0,
): Variants => ({
  hidden: {
    opacity: reduceMotion ? 1 : 0,
    y: reduceMotion ? 0 : 10,
    filter: reduceMotion ? "none" : "blur(3px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: duration(reduceMotion, 0.55),
      delay: reduceMotion ? 0 : delay,
      ease: calmEase,
    },
  },
});
