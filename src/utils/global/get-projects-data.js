import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getProjectsDataQuery = gql`
  query Portfolios {
    topProjects: portfolios(
      where: {
        portfolioTitle_in: ["JebePulsa Web Apps", "New Jerusalem Web Apps"]
      }
    ) {
      slug
      thumbnail {
        url
      }
    }
    portfolios(
      orderBy: publishedAt_DESC
      last: 9
      where: {
        portfolioTitle_not_in: ["JebePulsa Web Apps", "New Jerusalem Web Apps"]
      }
    ) {
      slug
      thumbnail {
        url
      }
    }
    portInfo: portfoliosConnection(first: 9, skip: 0, orderBy: createdAt_DESC) {
      pageInfo {
        hasNextPage
      }
    }
  }
`;

async function getProjectsData() {
  const { topProjects, portfolios, portInfo } = await graphcmsClient.request(
    getProjectsDataQuery
  );

  return {
    topProjects,
    portfolios,
    portInfo,
  };
}

export default getProjectsData;
