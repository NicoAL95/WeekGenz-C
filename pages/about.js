import Layout from '../src/components/layout/Layout';
import { HeadAbout } from '../src/components/about/';
import { SuperMan, WorkFlow, CollabHigh } from '../src/components/reusable';
import { NextSeo } from 'next-seo';

export default function about() {
  return (
    <Layout title='About WeekGenz'>
      <NextSeo
        openGraph={{
          title: 'About WeekGenz',
          description:
            'WeekGenz has more than 5 years of experience in Indonesia 🇮🇩 to create and deploy websites, with Very High Standard Quality and trusted by more than 100++ people and companies. We will always do our best to satisfy our customers and fulfill their needs.',
          url: 'https://www.weekgenz.com/about',
          type: 'profile',
          profile: {
            username: 'WeekGenz',
          },
          images: [
            {
              url: 'https://media.graphassets.com/nHAV6QcbRgihWKae0MfS',
              width: 850,
              height: 650,
              alt: 'WeekGenz Profile Photo',
            },
          ],
        }}
      />
      <HeadAbout />
      <SuperMan />
      <WorkFlow />
      <CollabHigh />
    </Layout>
  );
}
