import { cn } from '@senoe/lib/utils';
import Link, { type LinkProps } from 'next/link';
import { AnchorHTMLAttributes, type PropsWithChildren } from 'react';

interface CLinkProps
  extends LinkProps,
    PropsWithChildren,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  className?: string;
}

export default function CLink({ className, children, ...props }: CLinkProps) {
  return (
    <Link
      className={cn(
        'font-medium text-sky-500 transition-colors hover:text-sky-400 hover:underline',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
