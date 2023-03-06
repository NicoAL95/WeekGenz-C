import { GraphQLClient, gql } from 'graphql-request';

export default new GraphQLClient(process.env.GRAPH_CLIENT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_TOKEN}`,
  },
});

export { gql };
