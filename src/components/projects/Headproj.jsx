import Image from 'next/image';
import { FiEye } from 'react-icons/fi';

export default function Headproj({ portos }) {
  return (
    <section className='headProj'>
      <div className='headProject'>
        <div className='headProjTitle'>
          <div className='centerHead'>
            <h1 className='littleTitlePro'>Our Portofolio</h1>
            <h1 className='mainTitlePro'>
              Perfect Projects
              <br />
              is Our DNA
            </h1>
            <h1 className='descTitlePro'>
              Right now every people need a website to fight in Digital Market.
              All projects that we have already done, proven can help to grow
              business, and connect people around the world.
            </h1>
          </div>
        </div>
        <div className='headProjCont'>
          <div className='headProjGrid'>
            {/*  */}
            {portos &&
              portos.map((porto) => (
                <div className='portoHead' key={porto.slug}>
                  <Image
                    src={porto.thumbnail.url}
                    layout='fill'
                    objectFit='cover'
                    className=''
                    alt=''
                  />
                  <div className='portoOverlay'></div>
                  <div className='portoName rounded-none'>
                    <a href={`/projects/${porto.slug}`} className='prevPorto'>
                      <span className='flex items-center space-x-2'>
                        <FiEye />
                        <h1>Preview</h1>
                      </span>
                    </a>
                  </div>
                </div>
              ))}

            <div className='projRight'>
              <div className='botHeadProj'>
                <h1>WeekGenz Showcase</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
