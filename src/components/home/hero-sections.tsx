/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../button';
import { AiOutlineDownload } from 'react-icons/ai';
import useDownloader from 'react-use-downloader';
import { TechBadge } from '../badge';
// import { Tooltip } from '@nextui-org/react'
import localFont from 'next/font/local';
import { HomePageInfo } from '@/types/page-info';
import { Tooltip } from '../tooltip';
import React from 'react';
import { techBadgeAnimation } from '@/lib/animation';

// Font files can be colocated inside of `pages`
const TitleFont = localFont({
  src: '../../../public/font/Matter/Matter-Bold.woff2',
});

const SubFont = localFont({
  src: '../../../public/font/Matter/Matter-Regular.woff2',
});

interface HeroSectionProps {
  homeInfo: HomePageInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ homeInfo }) => {
  const { download } = useDownloader();
  const fileUrl = '/Justin-Tulloch-SWE-Resume.pdf';
  const fileName = 'Justin-Tulloch-SWE-Resume.pdf';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="bg-hero-image flex w-full flex-col justify-end bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="matter text-cyan-200">Hi, my name is</p>
          <div className={TitleFont.className}>
            <h2 className="mt-2 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-700 via-sky-300 to-indigo-700 bg-clip-text text-7xl text-transparent">
              Justin Tulloch
            </h2>
          </div>

          <div className="my-6 text-sm text-gray-400 sm:text-base">
            <h2 className={SubFont.className}>Notable Technical Skills</h2>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                icon={tech.icon}
                name={tech.name}
                key={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button
              className="shadow-button w-max"
              onClick={() => download(fileUrl, fileName)}
            >
              Get My Resume/CV
              <AiOutlineDownload size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {homeInfo.socials.map((contact, i) => (
                <a
                  href={contact.url}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:bg-glass-gradient rounded-md transition-colors"
                  rel="noreferrer"
                >
                  <Tooltip position="top" content={`${contact.title}`}>
                    <Image
                      src={contact.iconSvg}
                      alt={''}
                      width={40}
                      height={55}
                    />
                  </Tooltip>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Justin Tulloch Profile Picture"
          />
        </motion.div>
      </div>
    </section>
  );
};
