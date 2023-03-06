import Image from 'next/image';
import Layout from '../src/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout
      title='WeekGenz | 404'
      content='Create your dream Web apps with WeekGenz'
    >
      <section className='pageLost'>
        <div className='relative w-full h-1/2'>
          <Image
            src='/libraries/img/svg/404.svg'
            layout='fill'
            objectFit='contain'
            className=''
            alt='icon-notfound'
          />
        </div>
      </section>
    </Layout>
  );
}
