import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getPortfolioWithSlugQuery = gql`
  query Portfolio($slug: String!) {
    portfolio(where: { slug: $slug }) {
      clientName
      projectRole
      portfolioTitle
      duration
      preview
      created
      type
      aboutProject
      bannerImage {
        url
      }
      timelineWork {
        type
        workDuration
      }
    }
  }
`;

async function getPortfolioWithSlug({ slug }) {
  const { portfolio } = await graphcmsClient.request(
    getPortfolioWithSlugQuery,
    {
      slug,
    }
  );

  return {
    portfolio,
  };
}

export default getPortfolioWithSlug;
