'use client';

import { getRelativeTimeString } from '@/utils/get-relative-time';
import { KnownTech as IKnownTech } from '@/types/page-info';

import { motion } from 'framer-motion';
import { SectionTitle } from '../title';
import { knownTechs as techs } from '@/lib/data';
import Image from 'next/image';

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Tech Stack" title="Tech Stack Exp." />
      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

type KnownTechProps = {
  tech: IKnownTech;
};

const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'en-US',
  ).replace('ago ', '');
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="bg-bubbleSecondary-100 flex flex-col gap-2 rounded-lg p-6 text-black transition-all hover:bg-blue-200/30 hover:text-blue-500">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <Image src={tech.iconSvg} alt={''} width={100} height={95} />
      </div>

      <span>{relativeTime}</span>
    </div>
  );
};
