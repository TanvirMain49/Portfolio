import React, { useState } from "react";
import { images } from "../Constant/image";
import ProjectDescription from "./ProjectDescription";

export default function Project({ project, setPreview }) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap in-checked: justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(project.image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-lg sm:text-xl md:text-2xl">{project.title}</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 mt-2 text-xs sm:text-sm md:text-base text-sand">
            {project.tags.map((tag) => (
              <span key={tag.name}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src={images.arrowRight} alt="arrow right" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDescription
          title={project.title}
          description={project.description}
          subDescription={project.subDescription}
          image={project.image}
          tags={project.tags}
          href={project.href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
}
