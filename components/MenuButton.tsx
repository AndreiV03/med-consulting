import { motion } from "framer-motion";

type Props = {
  isMenuOpen: boolean;
};

const topLineVariants = {
  closed: {
    rotate: 0,
    translateY: 0,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  },
  opened: {
    rotate: 45,
    translateY: 8,
    stroke: "var(--background)",
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  }
};

const middleLineVariants = {
  closed: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  },
  opened: {
    opacity: 0,
    stroke: "var(--background)",
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  }
};

const bottomLineVariants = {
  closed: {
    rotate: 0,
    translateY: 0,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  },
  opened: {
    rotate: -45,
    translateY: -8,
    stroke: "var(--background)",
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  }
};

const MenuButton = ({ isMenuOpen }: Props): JSX.Element => {
  return (
    <motion.svg viewBox="0 0 20 16" preserveAspectRatio="none" initial="initial">
      <motion.line x1="0" x2="20" y1="0" y2="0" animate={isMenuOpen ? "opened" : "closed"} variants={topLineVariants} />
      <motion.line x1="0" x2="20" y1="8" y2="8" animate={isMenuOpen ? "opened" : "closed"} variants={middleLineVariants} />
      <motion.line x1="0" x2="20" y1="16" y2="16" animate={isMenuOpen ? "opened" : "closed"} variants={bottomLineVariants} />
    </motion.svg>
  );
}

export default MenuButton;