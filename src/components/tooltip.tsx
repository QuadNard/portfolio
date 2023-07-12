import { cn } from '@/lib/utils';
import React from 'react';

interface TooltipProps {
  position: 'top';
  content: React.ReactNode;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  position,
  content,
}: TooltipProps) => (
  <div id="tooltip" className="group relative cursor-pointer">
    <div className="mx-2 my-1">{children}</div>
    <span
      className={cn(
        'absolute hidden group-hover:inline-block bg-bubble-100 text-white text-xs p-2 whitespace-nowrap rounded-lg',
        position === 'top'
          ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]'
          : '',
      )}
    >
      {content}
    </span>
    <span
      className={cn(
        'absolute hidden group-hover:inline-block border-[6px]',
        position === 'top'
          ? 'left-1/2 -translate-x-1/2 bottom-full border-1-transparent border-r-transparent border-b-0 border-t-bubble-100'
          : '',
      )}
    ></span>
  </div>
);
