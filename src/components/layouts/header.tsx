'use client';

import Link from 'next/link';

import { navItems } from '@/content/navigation';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export const Header = () => {
  const pathName = usePathname();

  return (
    <header className="container py-8">
      <nav className="flex items-center justify-center gap-2 md:gap-4">
        {navItems.map((item) => (
          <Button
            asChild
            key={item.label}
            variant="link"
            className={cn(
              'text-sm md:text-2xl font-normal uppercase p-1',
              pathName === item.href && 'text-primary-cta'
            )}
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  );
};
