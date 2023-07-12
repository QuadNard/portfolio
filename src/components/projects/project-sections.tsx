'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/lib/animation';
import { ProjectSection } from '@/types/page-info';
import localFont from 'next/font/local';

const SubFont = localFont({
  src: '../../../public/fonts/sofiapro-light.woff2',
});

type ProjectSectionsProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {sections.map((section, i) => (
        <>
          <motion.div
            key={`section-${i}`}
            className="flex flex-col items-center gap-6 md:gap-12"
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-medium text-black md:text-3xl">
              {section.title}
            </h2>
            <Image
              width={950}
              height={300}
              className="aspect-auto w-full rounded-lg object-cover"
              alt={`Imagem da sessão ${section.title}`}
              src={section.image.url}
              unoptimized
            />
            <div className={SubFont.className}>
              <p className="my-6 max-w-[640px] text-center text-sm text-black sm:text-base">
                {section.text}
              </p>
            </div>
          </motion.div>
          <motion.div
            key={`section-${i}-feature`}
            className="flex flex-col items-center gap-6 md:gap-12"
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-medium text-black md:text-3xl">
              {section.subtitle}
            </h2>
            <Image
              width={980}
              height={300}
              className="aspect-auto w-full rounded-lg object-cover"
              alt={`Imagem da sessão ${section.title}`}
              src={section.featureImage.url}
              unoptimized
            />
            <div className={SubFont.className}>
              <p className="my-6 max-w-[640px] text-center text-sm text-black sm:text-base">
                {section.subtext}
              </p>
            </div>
          </motion.div>
        </>
      ))}
    </section>
  );
};
