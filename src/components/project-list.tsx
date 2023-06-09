import ProjectCard, {
  type ProjectCardProps
} from '@senoe/components/project-card';

const projects: ProjectCardProps[] = [
  {
    title: 'Mailero',
    href: 'https://mailero.io',
    description:
      'User-friendly temp mail using email addresses from popular providers like Gmail and Outlook.'
  },
  {
    title: 'cheatin.gg',
    href: 'https://cheatin.gg',
    description:
      'The #1 marketplace built for top-tier game cheating software. Coming very soon!'
  },
  {
    title: 'Tenacity',
    href: 'https://tenacity.dev',
    description:
      'The best multi-server client with beautiful visuals and amazing bypasses at an affordable price.'
  },
  {
    title: 'joke.dad',
    href: 'https://joke.dad',
    description:
      'Open source — a simple website with a collection of dad jokes you can vote on!'
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
