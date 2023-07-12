import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FcTreeStructure } from 'react-icons/fc';
import { usePathname } from 'next/navigation';

type NavItemProps = {
  href: string;
  label: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-black flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-300',
      )}
    >
      <span>
        <FcTreeStructure />
      </span>
      {label}
    </Link>
  );
};
