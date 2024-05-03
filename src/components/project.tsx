import Image from 'next/legacy/image';

import { Project } from '@/types/content-items';

export const ProjectItem = (project: Project) => {
  return (
    <a
      href={project.link}
      className="bg-card-custom p-8 rounded-2xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between gap-5 w-full"
    >
      <div className="w-full h-40 relative">
        <Image
          src={project.image}
          alt={project.title}
          priority
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div>
        <h3 className="text-base md:text-lg font-medium text-center truncate w-full text-accent-custom mb-2">
          {project.techStack}
        </h3>
        <h3 className="text-lg md:text-2xl font-semibold text-center truncate w-full">
          {project.title}
        </h3>
      </div>
      <p className="flex-1 mt-2 text-center">{project.description}</p>
    </a>
  );
};
