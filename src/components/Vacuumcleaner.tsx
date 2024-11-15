import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const Vacuumcleanerrobot = (props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }) => {
  const { className, children, animate = false } = props;
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        let newX = positions.x + (Math.random() - 0.5) * 200;
        let newY = positions.y + (Math.random() - 0.5) * 200;

        // Kollisionserkennung mit Bildschirmrändern
        if (newX > window.innerWidth / 2 || newX < -window.innerWidth / 2) {
          newX = positions.x - (Math.random() - 0.5) * 20;
        }
        if (newY > window.innerHeight / 2 || newY < -window.innerHeight / 2) {
          newY = positions.y - (Math.random() - 0.5) * 20;
        }

        const angle = Math.atan2(newY - positions.y, newX - positions.x) * (180 / Math.PI); // Winkelberechnung
        setPositions({ x: newX, y: newY });
        setRotation(angle);
        controls.start({ x: newX, y: newY, opacity: 0.7, rotate: angle }); // Rotation in controls.start
      }, 2000); // Update position every 2 seconds

      return () => clearInterval(interval);
    }
  }, [animate, controls, positions]);

  return (
    <div
      className={twMerge(
        "size-[240px] inline-flex items-center justify-center rounded-full relative",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{
          ease: "linear",
          duration: 4,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent",
          animate && "border-t-fuchsia-500/30"
        )}
      ><img src="/assets/images/Vacuumcleanerrobot.png" alt="Vacuum Cleaner Robot" className="w-full h-full object-cover rounded-full" /></motion.div>
      {children}
    </div>
  );
};
