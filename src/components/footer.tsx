/* eslint-disable tailwindcss/no-custom-classname */
import { IoMdHeart } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className="bg-bubbleSecondary-100 flex h-14 w-full items-center justify-center">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        Made with
        <IoMdHeart size={13} className="text-emerald-500" />
        by
        <strong className="font-medium">Justin Kinard Tulloch</strong>
      </span>
    </footer>
  );
};
