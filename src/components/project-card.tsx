import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  href: string;
  description: string;
}

export default function ProjectCard({
  title,
  href,
  description
}: ProjectCardProps) {
  return (
    <Link href={href} target="_blank">
      <div className="rounded-md bg-zinc-950 p-6 ring-1 ring-[#222] transition-colors hover:bg-[#111]">
        <div className="flex justify-between">
          <h4 className="font-semibold">{title}</h4>
          <div className="inline-flex items-center space-x-1 text-sm text-sky-500">
            <LinkIcon className="h-3.5 w-3.5" />
            <span>{href.replace(/^https?:\/\//, '')}</span>
          </div>
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>
    </Link>
  );
}
