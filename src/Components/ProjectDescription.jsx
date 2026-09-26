/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { images } from "../Constant/image";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto p-4 backdrop-blur-sm">
      <motion.div
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 rounded-sm bg-midnight p-2 hover:bg-gray-500 sm:right-5 sm:top-5"
        >
          <img src={images.close} alt="" className="size-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={`${title}-${index}`} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex max-w-full flex-wrap gap-2 sm:gap-3">
              {tags.map((tag) => (
                <img
                  key={`${tag.name}-${tag.id}`}
                  src={tag.path}
                  alt={tag.name}
                  className="size-8 rounded-lg object-contain hover-animation sm:size-10"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-fit items-center gap-1 font-medium cursor-pointer hover-animation sm:shrink-0"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" alt="" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
