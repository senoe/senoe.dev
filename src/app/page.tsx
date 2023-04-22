import CLink from '@senoe/components/clink';
import NextjsIcon from '@senoe/components/icons/nextjs-icon';
import ReactIcon from '@senoe/components/icons/react-icon';
import TRPCIcon from '@senoe/components/icons/trpc-icon';
import ProjectList from '@senoe/components/project-list';
import { ExternalLinkIcon } from 'lucide-react';

export const metadata = {
  title: 'Home • senoe.dev'
};

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          👋 Hey! I'm senoe.
        </h2>
        <div className="space-y-4 text-slate-300">
          <p>
            I'm an ambitious 18-year-old self-taught developer with a knack for
            creating web and desktop applications.
          </p>
          <p>
            Welcome to my personal corner of the internet, where I share
            information on projects and experiences as a young developer
            balancing coding and school life.
          </p>
          <p>
            As of recently I've been experimenting with different JS
            technologies such as{' '}
            <CLink
              className="relative top-0.5 inline-flex items-center space-x-1"
              href="https://react.dev"
              target="_blank"
            >
              <ReactIcon /> <span>React</span>
            </CLink>
            ,{' '}
            <CLink
              className="relative top-0.5 inline-flex items-center space-x-1"
              href="https://nextjs.org"
              target="_blank"
            >
              <NextjsIcon /> <span>Next.js</span>
            </CLink>
            , and{' '}
            <CLink
              className="relative top-0.5 inline-flex items-center space-x-1"
              href="https://trpc.io"
              target="_blank"
            >
              <TRPCIcon /> <span>tRPC</span>
            </CLink>
            . I also hope to explore languages like Rust and C++ in the near
            future!
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold tracking-tight">📝 Projects</h3>
        <p className="mb-2 text-sm text-slate-400">
          Stuff I've been working on recently!
        </p>
        <ProjectList />
      </div>
      <blockquote className="!mb-5">
        <span className="font-semibold">Fun fact: </span>
        This site is open-source!{' '}
        <CLink
          className="inline-flex items-center space-x-1"
          href="https://github.com/senoe/senoe.dev"
          target="_blank"
        >
          <span>Source code</span>
          <ExternalLinkIcon className="h-4 w-4" />
        </CLink>
      </blockquote>
    </div>
  );
}
