import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getPorjectsMoreQuery = gql`
  query Portfolios($limit: Int, $skip: Int) {
    portfolios(
      first: $limit
      skip: $skip
      orderBy: createdAt_DESC
      where: { portfolioTitle_not_in: ["JebePulsa Web Apps"] }
    ) {
      slug
      thumbnail {
        url
      }
    }
    portfoInfo: portfoliosConnection(first: $limit, skip: $skip) {
      pageInfo {
        hasNextPage
      }
    }
  }
`;

async function getPorjectsMore(limit = 9, skip = 0) {
  const { portfolios, portfoInfo } = await graphcmsClient.request(
    getPorjectsMoreQuery,
    { limit: Number(limit), skip: Number(skip) }
  );

  return {
    portfolios,
    portfoInfo,
  };
}

export default getPorjectsMore;
