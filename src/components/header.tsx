'use client';
import { motion } from 'framer-motion';
import { NavItem } from './nav';

import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

const SubFont = localFont({
  src: '../../public/fonts/sofiapro-light.woff2',
});

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
];

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className={SubFont.className}>
          <Image
            width={55}
            height={49}
            src="/profile.jpg"
            alt="Logo"
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="drop-shadow-l aspect-square w-10 rounded-lg border-2 border-gray-400 bg-transparent"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
