'use client';

import { cn } from '@senoe/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
  { label: 'GitHub', href: 'https://github.com/senoe' }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="mb-4 flex justify-between border-b border-[#222] py-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">senoe.dev</h1>
        <div className="space-x-4">
          {links.map((link) => (
            <Link
              className={cn(
                'transition-colors',
                pathname === link.href
                  ? 'font-semibold text-sky-500 underline hover:text-sky-400'
                  : 'text-slate-400 hover:text-slate-300 hover:underline'
              )}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Image
          className="rounded-lg ring-1 ring-white/10"
          draggable={false}
          src="/icon.png"
          alt="Turtle"
          height={64}
          width={64}
        />
      </div>
    </header>
  );
}
