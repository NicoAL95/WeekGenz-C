import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getHomeDataQuery = gql`
  query Home {
    trusteds(last: 9) {
      id
      trustedImage {
        url
      }
      linkClient
    }
    portfolios(last: 3) {
      slug
      thumbnail {
        url
      }
    }
    testimonials(last: 9) {
      id
      name
      rolePosition
      testimonialText
      testimonialImage {
        url
      }
    }
  }
`;

async function getHomeData() {
  const { trusteds, portfolios, testimonials } = await graphcmsClient.request(
    getHomeDataQuery
  );

  return {
    trusteds,
    portfolios,
    testimonials,
  };
}

export default getHomeData;
