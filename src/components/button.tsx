import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-whiteDark-100 py-3 px-4 rounded-lg text-black border-2 border-black flex justify-center items-center gap-2 hover:bg-bubble-100 hover:text-white transition-all disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
