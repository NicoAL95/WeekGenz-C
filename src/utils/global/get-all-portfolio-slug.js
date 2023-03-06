import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getAllPortfolioSlugQuery = gql`
  query Portfolio {
    portfolios {
      slug
    }
  }
`;

async function getAllPortfolioSlug() {
  const { portfolios } = await graphcmsClient.request(getAllPortfolioSlugQuery);

  return {
    portfolios,
  };
}

export default getAllPortfolioSlug;
