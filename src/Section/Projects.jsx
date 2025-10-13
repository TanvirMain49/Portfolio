/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { myProjects } from "../Constant/project";
import Project from "../Components/Project";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Projects() {
  const X = useMotionValue(0);
  const Y = useMotionValue(0);
  const springX = useSpring(X, { damping: 10, stiffness: 50 });
  const springY = useSpring(Y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    X.set(e.clientX + 20);
    Y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing mb-[584px] md:mb-0"
    >
      <p className="subtext mb-2">Showcase Highlights</p>
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 t0-transparent mt-12 h-[1px] w-full">
        {myProjects.map((project) => (
          <Project key={project.id} project={project} setPreview={setPreview} />
        ))}
      </div>
      {preview && (
        <motion.img
          src={preview}
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
}
