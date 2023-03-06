import Layout from '../../../src/components/layout/Layout';
import {
  IdHead,
  IdDesc,
  IdReq,
  IdTime,
  IdRev,
  IdInfo,
} from '../../../src/components/projects/search';
import { useRouter } from 'next/router';
import getProjectWithPID from '../../../src/utils/global/get-project-with-pid';

import { NextSeo } from 'next-seo';

export default function ProjectId({ project }) {
  const router = useRouter();
  // destructure
  const {
    clientName,
    projectTitle,
    projectId,
    revisionLeft,
    statusProject,
    preview,
    description,
    requirement,
    timeline,
    revision,
    information,
  } = project;

  return (
    <Layout title={`WeekGenz | Project ${router.query.pid}`}>
      <NextSeo
        openGraph={{
          title: `WeekGenz | Project ${router.query.pid}`,
          description: `${projectTitle} | Weekgenz always perfect for you to develop your own app. All projects that we have already done, proven can help to grow business, and connect people around the world`,
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
      <IdHead
        clientName={clientName}
        projectTitle={projectTitle}
        pid={projectId}
        status={statusProject}
        preview={preview}
        revisionLeft={revisionLeft}
      />
      <IdDesc desc={description} />
      <IdReq req={requirement} />
      <IdTime timeLine={timeline} />
      <IdRev revisions={revision} />
      <IdInfo info={information} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { pid } = params;
  const { project } = await getProjectWithPID({ pid });

  // check data
  if (!project) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }

  return {
    props: {
      project,
    }, // will be passed to the page component as props
  };
}
