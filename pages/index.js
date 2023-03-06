import Layout from '../src/components/layout/Layout';
import { AboutHigh } from '../src/components/about';
import { HeadcodeHome } from '../src/components/home';
import {
  ServicesHigh,
  SplitWeb,
  WorkFlow,
  PricingHigh,
  PortofolioHigh,
  TestiSlider,
  SuperMan,
  CollabHigh,
  TrustedCust,
} from '../src/components/reusable';

// import SplineDesign from '../src/components/spline/SplineDesign';

import { NextSeo } from 'next-seo';

import getHomeData from '../src/utils/global/get-home-data';

export default function Home({ trusteds, portfolios, testimonials }) {
  return (
    <Layout title='WeekGenz | Website Developer Agency'>
      <NextSeo
        openGraph={{
          title: 'WeekGenz | Website Developer Agency',
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
      <HeadcodeHome />
      <ServicesHigh />
      <TrustedCust trusteds={trusteds} />
      <PortofolioHigh portfolios={portfolios} />
      <SplitWeb />
      <AboutHigh />
      <WorkFlow />
      <PricingHigh />
      {/* <SplineDesign/> */}
      <TestiSlider testimonials={testimonials} />
      <SuperMan />
      <CollabHigh />
    </Layout>
  );
}

// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const { trusteds, portfolios, testimonials } = await getHomeData();

  return {
    props: {
      trusteds,
      portfolios,
      testimonials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
