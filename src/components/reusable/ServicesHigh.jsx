/* eslint-disable react/no-unknown-property */
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesHigh() {
  // useRouter
  const router = useRouter();

  // AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='servicesHigh'>
      <div className='servHighHead'>
        <h1 className='littleTitle'>Our Specialist</h1>
        <h1 className='mainTitle'>Web Services</h1>
        <h1 className='descTitle font-[700] tracking-[0.2rem] uppercase'>
          weekgenz always perfect for you to develop your own app
        </h1>
      </div>
      <div className='servicesGrid'>
        <div className='servHighMini'>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='0'
            data-aos-duration='600'
            data-aos-easing='ease-in-out'
          >
            <div className='servHighImg'>
              <div className='servHighImgBox'>
                <Image
                  src='/libraries/img/svg/development.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='servHighMiniTitle'>Web Developer Specialist</h1>
            <h1 className='servHighMiniDesc'>
              Creating and developing your idea is our passion, and we will
              develop your idea to become a super website that suits you. It
              will help you to reach your goal
            </h1>
            <div className={`${router.pathname === '/services' ? 'hidden' : 'servCon'}`}>
              <Link href={'/services'}>
                <span className='servBut'>
                  <h1>Explore More</h1>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='servHighMini'>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='150'
            data-aos-duration='600'
            data-aos-easing='ease-in-out'
          >
            <div className='servHighImg'>
              <div className='servHighImgBox'>
                <Image
                  src='/libraries/img/svg/application.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='servHighMiniTitle'>Web Application Specialist</h1>
            <h1 className='servHighMiniDesc'>
              Application is the most powerful technology that can help your
              business to grow and reach its goal. We will help you to do that
              with our super experience and technology
            </h1>
            <div className={`${router.pathname === '/services' ? 'hidden' : 'servCon'}`}>
              <Link href={'/services'}>
                <span className='servBut'>
                  <h1>Explore More</h1>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='servHighMini'>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='150'
            data-aos-duration='600'
            data-aos-easing='ease-in-out'
          >
            <div className='servHighImg'>
              <div className='servHighImgBox'>
                <Image
                  src='/libraries/img/svg/hosting.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='servHighMiniTitle'>Web Hosting Specialist</h1>
            <h1 className='servHighMiniDesc'>
              Never feel a slow website loading anymore with our super hosting.
              We are using the latest and the best technology in the world,
              which makes your website fastest than other
            </h1>
            <div className={`${router.pathname === '/services' ? 'hidden' : 'servCon'}`}>
              <Link href={'/services'}>
                <span className='servBut'>
                  <h1>Explore More</h1>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='servHighMini'>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='300'
            data-aos-duration='600'
            data-aos-easing='ease-in-out'
          >
            <div className='servHighImg'>
              <div className='servHighImgBox'>
                <Image
                  src='/libraries/img/svg/converter.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='servHighMiniTitle'>Web Converter Specialist</h1>
            <h1 className='servHighMiniDesc'>
              UI Design is one of the best things in the world. We will convert
              your super UI design into a code that can run on the browser, and
              it will help you to share your portfolio
            </h1>
            <div className={`${router.pathname === '/services' ? 'hidden' : 'servCon'}`}>
              <Link href={'/services'}>
                <span className='servBut'>
                  <h1>Explore More</h1>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-span-12'>
          <div className='bigHeadBut text-center'>
            <a href='mailto:weekgenz@gmail.com'>
              <span className='solBut'>Start Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
