import CLink from '@senoe/components/clink';
import { MailIcon, UserPlusIcon } from 'lucide-react';

export const metadata = {
  title: 'contact • senoe.dev'
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          📞 Get in touch
        </h2>
        <div className="space-y-4 text-slate-300">
          <p>
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me via email or social media!
          </p>
          <blockquote className="space-y-3 sm:space-y-0">
            <div className="leading-5 sm:flex sm:justify-between sm:leading-normal">
              <div className="inline-flex items-center space-x-1">
                <MailIcon className="h-4 w-4" />
                <span>Shoot me an email!</span>
              </div>
              <CLink href="mailto:me@senoe.dev" target="_blank">
                me@senoe.dev
              </CLink>
            </div>
            <div className="leading-5 sm:flex sm:justify-between sm:leading-normal">
              <div className="inline-flex items-center space-x-1">
                <UserPlusIcon className="h-4 w-4" />
                <span>Add me on Discord!</span>
              </div>
              <CLink
                href="https://discord.com/users/997767154483089408"
                target="_blank"
              >
                senoe#0001
              </CLink>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
