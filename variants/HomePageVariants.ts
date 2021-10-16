export const slideshowVariants = {
  initial: {
    y: "-150%",
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 0
    }
  },
  exit: {
    y: "150%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 0
    }
  }
};