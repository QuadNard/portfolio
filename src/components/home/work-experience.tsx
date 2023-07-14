'use client';

import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animation';
import { WorkExperience } from '@/types/page-info';
import { SectionTitle } from '../title';
import { TechBadge } from '../badge';

type ExperienceItemProps = {
  experience: WorkExperience;
};

type WorkExperienceProps = {
  experiences: WorkExperience[];
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    technologies,
  } = experience;

  const startDate = new Date(experience.startDate);

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR });
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'Present';

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} year${years > 1 ? 's' : ''}${monthsRemaining > 0
        ? ` and ${monthsRemaining} month${monthsRemaining > 1 ? 's' : ''}`
        : ''
      }`
      : `${months} month${months > 1 ? 's' : ''}`;

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo.url}
            width={40}
            height={40}
            className="rounded-full"
            alt={`Logo da empresa ${companyName}`}
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-700 via-sky-300 to-indigo-700 bg-clip-text text-transparent transition-colors hover:text-blue-500"
            rel="noreferrer"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-black">
            <h1>{description.rawText} </h1>
          </div>
        </div>

        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Tech Stack
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {technologies.map((tech, i) => (
            <TechBadge
              icon={tech.icon}
              name={tech.name}
              key={`experience-${companyName}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const WorkExp = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="Experience" title="Professional Experience" />
        <p className="mt-6 text-black">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
