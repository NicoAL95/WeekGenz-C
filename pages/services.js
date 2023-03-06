import Layout from '../src/components/layout/Layout';
import {
  SplitWeb,
  TrustedCust,
  ServicesHigh,
  PricingDetail,
  PortofolioHigh,
  WorkFlow,
  CollabHigh,
} from '../src/components/reusable';

import getHomeData from '../src/utils/global/get-home-data';

import { NextSeo } from 'next-seo';

export default function services({ trusteds, portfolios }) {
  return (
    <Layout title='WeekGenz Services'>
      <NextSeo
        openGraph={{
          title: 'WeekGenz Services',
          description:
            'Create your dream web apps with WeekGenz. We are web developer specialists with a lot of experience to create your professional website and improve your business to reach its goal.',
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
      <h1 className='gapSects py-[80px] mainTitle text-center'>
        WeekGenz Services
      </h1>
      <ServicesHigh />
      <PricingDetail />
      <TrustedCust trusteds={trusteds} />
      <PortofolioHigh portfolios={portfolios} />
      <SplitWeb />
      <WorkFlow />
      <CollabHigh />
    </Layout>
  );
}

// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const { trusteds, portfolios } = await getHomeData();

  return {
    props: {
      trusteds,
      portfolios,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
