import Layout from '../../src/components/layout/Layout';
import { Headproj, Showproj } from '../../src/components/projects/';
import getProjectsData from '../../src/utils/global/get-projects-data';

import { NextSeo } from 'next-seo';

export default function Projects({ topProjects, portfolios, portInfo }) {
  return (
    <Layout title='WeekGenz Portfolios'>
      <NextSeo
        openGraph={{
          title: `WeekGenz Portfolios`,
          description:
            'Weekgenz always perfect for you to develop your own app. All projects that we have already done, proven can help to grow business, and connect people around the world',
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
      <Headproj portos={topProjects} />
      <Showproj portos={portfolios} pageInfo={portInfo.pageInfo} />
    </Layout>
  );
}

// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const { topProjects, portfolios, portInfo } = await getProjectsData();

  return {
    props: {
      topProjects,
      portfolios,
      portInfo,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
