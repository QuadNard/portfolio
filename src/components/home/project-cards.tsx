'use client';

import { Link } from '@/components/link';
import { TechBadge } from '@/components/badge';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Project } from '@/types/page-info';

import { HorizontalDivider } from '../divider';
import { SectionTitle } from '../title';
import { fadeUpAnimation } from '@/lib/animation';

type ProjectCardProps = {
  proj: Project;
};

type HighlightedProjectsProps = {
  projects: Project[];
};

const ProjectCard = ({ proj }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="h-[200px] w-full sm:h-[300px] lg:min-h-full lg:w-[420px]"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={proj.thumbnail.url}
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${proj.title}`}
          className="h-full w-full rounded-lg object-cover"
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-700 via-sky-300 to-indigo-700 bg-clip-text text-lg font-medium text-transparent"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {proj.title}
        </motion.h3>

        <motion.p
          className="my-6 text-gray-400"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {proj.shortDescription}
        </motion.p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {proj.technologies.map((tech, i) => (
            <TechBadge
              icon={tech.icon}
              name={tech.name}
              key={`${proj.title}-tech-${tech.name}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/project/${proj.id}`} className="text-black">
          View project
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="List" title="List of Projects" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.id}>
            <ProjectCard proj={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Interested?</span>
          <Link href="/projects" className="inline-flex">
            View projects list
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
