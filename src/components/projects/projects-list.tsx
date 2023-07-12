/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Image from 'next/image';
import { fadeUpAnimation } from '@/lib/animation';
import { Project } from '@/types/page-info';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ');
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-white bg-white drop-shadow-lg transition-all hover:border-cyan-200  hover:opacity-100">
      <div className="h-96 w-full overflow-hidden">
        <Image
          width={380}
          height={200}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          alt={`Thumbnail do projeto ${project.title}`}
          src={project.thumbnail.url}
          unoptimized
        />
      </div>
      <div className="from transparent absolute inset-0 bg-gradient-to-b via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all group-hover:translate-y-0">
          <strong className="mb-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-700 via-sky-300 to-indigo-700 bg-clip-text text-3xl font-bold text-transparent">
            {project.title}
          </strong>
          <div className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="mb-3 text-gray-400">{project.shortDescription}</p>
            <button className="truncate rounded-lg bg-neutral-900 px-3.5 py-2 text-sm font-medium text-gray-400 shadow shadow-black/60">
              {technologies}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/project/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
