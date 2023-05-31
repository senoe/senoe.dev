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
    title: 'Sellbay',
    href: 'https://sellbay.io',
    description:
      'A platform for entrepreneurs to sell digital products with ease. Waitlist now!'
  },
  {
    title: 'joke.dad',
    href: 'https://joke.dad',
    description:
      'Open source — a simple website with a collection of dad jokes you can vote on!'
  },
  {
    title: 'cheatin.gg',
    href: 'https://cheatin.gg',
    description:
      'The #1 marketplace built for top-tier game cheating software. Coming very soon!'
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
