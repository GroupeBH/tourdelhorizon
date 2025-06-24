import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string; // Add this line
}

export default function RevealOnScroll({ 
  children, 
  width = "fit-content", 
  delay = 0,
  direction = "up",
  className // Add this line
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  
  // Définir les animations selon la direction
  const getDirectionAnimation = () => {
    switch (direction) {
      case "up":
        return { y: 75 };
      case "down":
        return { y: -75 };
      case "left":
        return { x: 75 };
      case "right":
        return { x: -75 };
      case "none":
        return {};
      default:
        return { y: 75 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}> // Add className here
      <motion.div
        variants={{
          hidden: { opacity: 0, ...getDirectionAnimation() },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}