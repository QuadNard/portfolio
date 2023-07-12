'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ComponentProps } from 'react';

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
  icon: string;
};

export const TechBadge = ({ name, icon, ...props }: TechBadgeProps) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="bg-bubble-100 flex justify-between space-x-1 rounded-lg px-3 py-1 text-sm text-white">
      <Image src={icon} alt={name} width={20} height={20} />
      <motion.span className="" {...props}>
        {name}
      </motion.span>
    </div>
  );
};
