import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Premium Domain + Website Design | 1 Year Offer',
  description: 'Get a premium .com domain FREE for 1 year with any website design package. Limited time offer for new clients. Professional web design + free domain included.',
  keywords: ['Free Domain', 'Domain Offer', 'Website Design', 'Free .com Domain', 'Web Design Package', 'Domain Included'],
};

export default function FreeDomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
