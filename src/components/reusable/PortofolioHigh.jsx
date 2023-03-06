import Image from 'next/image';
import Link from 'next/link';
import { FiEye } from 'react-icons/fi';

import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PortofolioHigh({ portfolios }) {
  
  // AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='portofolio'>
      <div className='aboutTitle'>
        <h1 className='littleTitle'>Our Portofolio</h1>
        <h1 className='mainTitle'>What do we do</h1>
        <h1 className='descTitle'>
          all projects that we have already done, proven can help to grow
          business,
          <br />
          and connect people around the world
        </h1>
      </div>
      <div className='aboutPorto'>
        {/* dinamis */}
        {portfolios &&
          portfolios.map((portfolio, index) => {
            const { slug, thumbnail } = portfolio;
            let i = 0;
            return (
              <div className={`${index === 2 ? 'portoCol portoColLast' : 'portoCol'}`} key={index}>
                <div className='portoImg'
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay={`${ 
                        index === 0 ? 0 : 
                        index === 1 ? 150 : 
                        300}`}
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out">
                  <Image
                    src={`${thumbnail.url}`}
                    layout='fill'
                    objectFit='cover'
                    className='imgPorto'
                    alt={`${slug}-portfolio-weekgenz`}
                  />
                  <div className='portoOverlay' />
                  <div className='portoName'>
                    <Link href={`/projects/${slug}`}>
                      <a className='prevPorto'>
                        <span className='flex items-center space-x-2'>
                          <FiEye />
                          <h1>Preview</h1>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className='portoMore mt-[35px] flex justify-center'>
        <Link href='/projects'>
          <span className='outBut'>See All Portofolio</span>
        </Link>
      </div>
    </section>
  );
}
