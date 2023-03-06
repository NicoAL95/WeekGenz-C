import Layout from '../../../src/components/layout/Layout';
import Searchproj from '../../../src/components/projects/search/Searchproj';

// for project search page
export default function Search() {
  return (
    <Layout
      title='WeekGenz | Search Project'
      content="Search your's Web apps with WeekGenz"
    >
      <Searchproj />
    </Layout>
  );
}
