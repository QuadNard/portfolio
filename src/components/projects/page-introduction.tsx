'use client';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionTitle } from '../title';
import localFont from 'next/font/local';

const SubFont = localFont({
  src: '../../../public/fonts/sofiapro-light.woff2',
});

export const PageIntroduction = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section className="bg-hero-image flex h-[450px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-2 lg:h-[630px]">
      <SectionTitle
        subtitle="projects"
        title="Built with ❤️ for Engineering."
        className="items-center text-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <div className={SubFont.className}>
          <p className="my-6 max-w-[640px] text-center text-sm text-black sm:text-base">
            Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue
            à vontade e explore os projetos para ver como foram criados, as
            tecnologias utilizadas e as funcionalidades implementadas.
          </p>
        </div>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};
