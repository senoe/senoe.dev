import ProjectCard, {
  type ProjectCardProps
} from '@senoe/components/project-card';

const projects: ProjectCardProps[] = [
  {
    title: 'LookupTools',
    href: 'https://lookup.tools',
    description:
      'Lookup WHOIS records, emails, IP addresses, and much more. Releasing soon!'
  },
  {
    title: 'Mailero',
    href: 'https://mailero.io',
    description:
      'User-friendly temp mail using email addresses from popular providers.'
  },
  {
    title: 'SendDrop',
    href: 'https://senddrop.app',
    description:
      'D2D file transfer — development currently paused, but is planned to resume in the future.'
  },
  {
    title: 'cheatin.gg',
    href: 'https://cheatin.gg',
    description:
      'The ultimate marketplace for top-tier utility software. Coming soon!'
  }
];

export default function ProjectList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
