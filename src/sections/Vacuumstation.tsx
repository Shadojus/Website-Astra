import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import { Vacuumcleanerrobot } from "../components/Vacuumcleaner";

export const VacuumSection = () => {
  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [180, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [70, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [90, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Myself
        </p>

        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <Vacuumcleanerrobot className="absolute left-[-100px] -top-[-100px]" animate>
                <motion.img
                  ref={cubeRef}
                  src="/assets/images/Loadingstation.png"
                  alt="Cuboid image"
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Vacuumcleanerrobot>
              <Vacuumcleanerrobot className="absolute left-[-100px] -top-[-100px]" animate>
                <motion.img
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Vacuumcleanerrobot>
              <Vacuumcleanerrobot className="absolute left-[-100px] -top-[-100px]" animate>
                <motion.img
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Vacuumcleanerrobot>
              <Vacuumcleanerrobot className="absolute left-[240px] -top-[760px]" animate>
                <motion.img
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Vacuumcleanerrobot>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2 ">
            <motion.div
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-1 bg-fuchsia-500 rounded-full"
            ></motion.div>
          </div>
          <p className="uppercase text-zinc-500 font-extralight tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  );
};
