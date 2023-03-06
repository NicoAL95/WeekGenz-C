import {
  HeaderDetail,
  ContentDetail,
  TimelineDetail,
} from '../../src/components/detail/';
import Layout from '../../src/components/layout/Layout';

// query data
import getAllPortfolioSlug from '../../src/utils/global/get-all-portfolio-slug';
import getPortfolioWithSlug from '../../src/utils/global/get-portfolio-with-slug';

import { NextSeo } from 'next-seo';

export default function ProjectDetail({ portfolio }) {
  if (!portfolio) return <p>Loading...</p>;
  const { portfolioTitle, aboutProject, timelineWork } = portfolio;
  return (
    <Layout title={`WeekGenz | Detail Project ${portfolioTitle}`}>
      <NextSeo
        openGraph={{
          title: `WeekGenz | Detail Project ${portfolioTitle}`,
          description: `${portfolioTitle} | Weekgenz always perfect for you to develop your own app. All projects that we have already done, proven can help to grow business, and connect people around the world`,
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
      <HeaderDetail dataHeaders={portfolio} />
      <ContentDetail aboutPortfolio={aboutProject} />
      <TimelineDetail timelineWorks={timelineWork} />
    </Layout>
  );
}

// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { portfolio } = await getPortfolioWithSlug({ slug });

  return {
    props: {
      portfolio,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}

// the path has not been generated.
export async function getStaticPaths() {
  const { portfolios } = await getAllPortfolioSlug();

  // Get the paths we want to pre-render based on portfolios
  const paths = portfolios.map((portfolio) => ({
    params: { slug: portfolio.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: true };
}
