import graphcmsClient, { gql } from '../../config/Graphcms.config';

const getProjectWithPIDQuery = gql`
  query Project($pid: String!) {
    project(where: { projectId: $pid }) {
      clientName
      projectTitle
      projectId
      revisionLeft
      statusProject
      preview
      description
      requirement
      timeline {
        type
        estimation
        description
        preview
      }
      revision {
        type
        dateRevision
        description
      }
      information
    }
  }
`;

async function getProjectWithPID({ pid }) {
  const { project } = await graphcmsClient.request(getProjectWithPIDQuery, {
    pid,
  });

  return {
    project,
  };
}

export default getProjectWithPID;
