/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import Typeit animation
import TypeIt from 'typeit-react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WorkFlow() {
  // AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // UI Animation Interval
  const [counter, setCounter] = useState(true);
  let hitung = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (hitung % 2 == 1) {
        setCounter(true);
      } else {
        setCounter(false);
      }
      hitung++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='workFlow'>
      <div className='splitSuperTitle'>
        <h1>Everything,</h1>
        <h1>simple.</h1>
      </div>
      <div className='workSuperDesc'>
        <h1>
          Build a special website, Grow your business, reach new audiences and
          hit your goals without wasting your time. This is how we work.
        </h1>
      </div>
      <div className='workFlex'>
        <div
          className='workCode'
          data-aos='fade-right'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='300'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
        >
          <div className='workBox'>
            <div className='uiBox'>
              <div className={`${counter ? 'miniUna' : 'miniAct'} miniSide`}>
                <div className='miniFlex'>
                  <ul className='miniUl'>
                    <li className='miniLi flex justify-between'>
                      <h1 className='uiLogo font-[600] text-[13px]'>
                        WeekShion
                      </h1>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#0E0E0E'
                        className='wiIcon'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </li>
                    <li className='miniLi bg-mainBlack text-mainWhite font-[500]'>
                      <h1>Home</h1>
                    </li>
                    <li className='miniLi border-b border-[#444]/30'>
                      <h1>About</h1>
                    </li>
                    <li className='miniLi border-b border-[#444]/30'>
                      <h1>Contact us</h1>
                    </li>
                  </ul>
                  <div className='miniFooter'>
                    <h1>Powered by WeekGenz</h1>
                  </div>
                </div>
              </div>
              <div className='uiHead'>
                <div className='uiLogo'>
                  <h1>WeekShion</h1>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#0E0E0E'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
                  />
                </svg>
              </div>
              <div className='uiBody'>
                <div className='uiCont'>
                  <h1 className='uiDate'>18 Aug 22 • 10 min read</h1>
                  <h1 className='uiMainText'>
                    Designing
                    <TypeIt
                      options={{
                        loop: true,
                        speed: 130,
                        waitUntilVisible: true,
                      }}
                      getBeforeInit={(instance) => {
                        instance

                          .type(' user interface')
                          .pause(1200)
                          .type(' aesthetics that sync')
                          .pause(1500)
                          .type(' with the natural environment.')
                          .pause(2000)
                          .delete(51);

                        return instance;
                      }}
                    />
                  </h1>
                  <h1 className='uiDesc'>
                    Understanding the nuances of how lights effects can be
                    realised in modern user interface design
                  </h1>
                </div>
                <div className='uiImg'></div>
              </div>
            </div>
          </div>
          <div className='engQuote'>
            <h1>
              ❝ All super website application starts from here, the prototype ❞
            </h1>
          </div>
          <div className='engCom'>
            <h1 className='engAuth'>
              <span className='authBold'>Nico Abel Laia</span> — UI/UX Designer
            </h1>
            <div className='engPict'>
              <Image
                src='/libraries/img/png/nico.png'
                alt=''
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
        <div
          className='lineDotWrap'
          data-aos='fade-bottom'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='0'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
        >
          <span className='lineBullet'>
            <div className='relative w-full h-full'>
              <span className='lineBulletSolid'></span>
            </div>
          </span>
          <span className='block w-full h-full dotted-spaced left'></span>
        </div>
        <div className='workCont'>
          <div
            data-aos='fade-left'
            data-aos-anchor-placement='top-bottom'
            data-aos-delay='300'
            data-aos-duration='750'
            data-aos-easing='ease-in-out'
          >
            <div className='workImg'>
              <div className='workImgBox'>
                <Image
                  src='/libraries/img/svg/ui.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='workMiniTitle'>UI/UX</h1>
            <h1 className='workMiniDesc'>
              UI Design is the first step when we want to create a super
              website. We create a prototype before we hit the code, and we can
              pour our idea here. This is one of the challenging parts to choose
              perfection.
            </h1>
          </div>
        </div>
      </div>
      <div className='workFlex'>
        <div
          className='workCode'
          data-aos='fade-right'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='300'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
        >
          <div className='codeBox'>
            <div className='codeLeft'>
              <div className='codeLeftTop'>
                <div className='codeLeftButton'>
                  <div className='smallBulBut bg-[#F0534A]'></div>
                  <div className='smallBulBut bg-[#EDC049]'></div>
                  <div className='smallBulBut bg-[#96D372]'></div>
                </div>
                <div className='codeLeftFile'>
                  <h1>File Exploler</h1>
                </div>
                <div className='codeLeftBox'>
                  <div className='newFile'>
                    <h1>New File...</h1>
                  </div>
                </div>
                <div className='codeLeftFolder'>
                  <div className='headFolder'>
                    <div className='topFolder'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#3B2A64'
                        className='wiIcon'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#6D7081'
                        className='wiIcon ml-[0.05rem]'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776'
                        />
                      </svg>
                      <h1 className='folderTitle'>weekgenz</h1>
                    </div>
                    <div className='topFile'>
                      <div className='fileFlex pl-[10px]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#6D7081'
                          className='wiIcon'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
                          />
                        </svg>
                        <h1 className='fileName'>app.js</h1>
                      </div>
                      <div className='fileFlex pl-[10px] bg-[#281E40]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#6D7081'
                          className='wiIcon'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
                          />
                        </svg>
                        <h1 className='fileName'>index.js</h1>
                      </div>
                      <div className='fileFlex pl-[10px]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#6D7081'
                          className='wiIcon'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
                          />
                        </svg>
                        <h1 className='fileName'>design.js</h1>
                      </div>
                      <div className='fileFlex pl-[10px]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#6D7081'
                          className='wiIcon'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
                          />
                        </svg>
                        <h1 className='fileName'>layout.js</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='codeLeftBot'></div>
            </div>
            <div className='codeRight'>
              <div className='codeRightTop'>
                <h1>index.js</h1>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
              <div className='codeRightBody'>
                <div className='codeNumberMini'>
                  <ul className='ulMiniCode'>
                    <li>
                      <h1 className='miniLine'>1</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>2</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>3</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>4</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>5</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>6</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>7</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>8</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>9</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>10</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>11</h1>
                    </li>
                    <li>
                      <h1 className='miniLine'>12</h1>
                    </li>
                  </ul>
                </div>
                <div className='codeBlockMini'>
                  <h1>
                    <span className='codeYellow'>import</span>{' '}
                    <span className='codeRed'>Layout</span>{' '}
                    <span className='codeYellow'>from</span>{' '}
                    <span className='codeGreen'>'./Layout';</span>
                  </h1>
                  <h1>
                    <span className='codeYellow'>import</span>{' '}
                    <span className='codeRed'>Design</span>{' '}
                    <span className='codeYellow'>from</span>{' '}
                    <span className='codeGreen'>'./Design';</span>
                  </h1>
                  <br />
                  <h1>
                    <span className='codeYellow'>export default </span>
                    <span className='codeEgg'>function</span>{' '}
                    <span className='codeBlue'>WeekGenz</span>{' '}
                    <span className='codeYellow'>
                      &#40;
                      <span className='text-mainWhite'>
                        &#123;{' WeekGenz '}&#125;
                      </span>
                      &#41; &#123;
                    </span>
                  </h1>
                  <h1 className='text-mainWhite'>return &#40;</h1>
                  <TypeIt
                    options={{
                      loop: true,
                      speed: 130,
                    }}
                    getBeforeInit={(instance) => {
                      instance

                        .type(
                          "&emsp;&#60;<span className='bluCode'>Layout</span>&#62;"
                        )
                        .pause(1500)
                        .type(
                          "&#60;&#47;<span className='bluCode'>Layout</span>&#62;"
                        )
                        .pause(1500)
                        .move(-9)
                        .type('<br>')
                        .type('&emsp;')
                        .move(-1)
                        .type('<br>')
                        .move(-1)
                        .pause(1500)
                        .type(
                          "&emsp;&emsp;&#60;<span className='bluCode'>Design</span> &#47;&#62;"
                        )
                        .pause(1000)
                        .move(-3)
                        .type(' details=')
                        .pause(1500)
                        .type(
                          "&#123; <span className='codeEgg'>WeekGenz</span> &#125;"
                        )
                        .pause(2000)
                        .move(3)
                        .type('<br>')
                        .type(
                          "&emsp;&emsp;&#60;<span className='bluCode'>h1</span>&#62;"
                        )
                        .type(
                          "&#60;&#47;<span className='bluCode'>h1</span>&#62;"
                        )
                        .pause(2000)
                        .move(-5)
                        .type(
                          "<span className='text-mainWhite'>Hi it's me Nico from WeekGenz!</span>"
                        )
                        .pause(2000)
                        .move(16)
                        .pause(5000)
                        .delete(95);

                      return instance;
                    }}
                  />
                  <h1 className='text-mainWhite'>&#125;&#41;;</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='engQuote'>
            <h1>
              ❝ It‘s time to convert our super prototype into a website with
              code ❞
            </h1>
          </div>
          <div className='engCom'>
            <h1 className='engAuth'>
              <span className='authBold'>Nico Abel Laia</span> — Front End
              Developer
            </h1>
            <div className='engPict'>
              <Image
                src='/libraries/img/png/nico.png'
                alt=''
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
        <div
          className='lineDotWrap'
          data-aos='fade-bottom'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='0'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
        >
          <span className='lineBullet'>
            <div className='relative w-full h-full'>
              <span className='lineBulletSolid'></span>
            </div>
          </span>
          <span className='block w-full h-full dotted-spaced left'></span>
        </div>
        <div className='workCont'>
          <div
            data-aos='fade-left'
            data-aos-anchor-placement='top-bottom'
            data-aos-delay='300'
            data-aos-duration='750'
            data-aos-easing='ease-in-out'
          >
            <div className='workImg'>
              <div className='workImgBox'>
                <Image
                  src='/libraries/img/svg/converter.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='workMiniTitle'>Front End Development</h1>
            <h1 className='workMiniDesc'>
              This is one of the best parts before we see our website online. We
              convert our super UI design into a code, this looks like a puzzle
              because we have to imagine how to make a design using a code until
              it becomes to super Website Design.
            </h1>
          </div>
        </div>
      </div>
      <div className='workFlex'>
        <div
          className='workCode'
          data-aos='fade-right'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='300'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
        >
          <div className='workBox'>
            <div className='gitHead'>
              <h1 className='gitHeadTitle'>WeekGenz</h1>
              <h1 className='gitHeadAuth'>bot</h1>
              <h1 className='gitHeadCom'>commented 3 minutes ago</h1>
            </div>
            <div className='gitBody'>
              <div className='gitBodyTop'>
                <h1>
                  <span className='gitBodyBold'>
                    The latest updates on your project.{' '}
                  </span>
                  Learn more about
                  <span className='gitBodyLink'>
                    {' '}
                    WeekGenz for Git &#129125;
                  </span>
                </h1>
              </div>
              <table className='gitTable'>
                <thead className='border border-[#30363d]'>
                  <tr>
                    <th className='taPad text-left'>
                      <span className='font-[700] text-[.75rem]'>Name</span>
                    </th>
                    <th className='taPad text-left'>
                      <span className='font-[700] text-[.75rem]'>Status</span>
                    </th>
                    <th className='taPad text-left'>
                      <span className='font-[700] text-[.75rem]'>Preview</span>
                    </th>
                    <th className='taPad text-left'>
                      <span className='font-[700] text-[.75rem]'>Updated</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='taBor'>
                    <td className='taPad'>
                      <span className='font-[600]'>Store</span>
                    </td>
                    <td className='taPad'>
                      ✅ Ready (<span className='tabBlue'>Inspect</span>)
                    </td>
                    <td className='taPad tabBlue'>Visit Preview</td>
                    <td className='taPad'>Aug 18, 2022 at 11:40 AM</td>
                  </tr>
                  <tr className='taBor'>
                    <td className='taPad'>
                      <span className='font-[600]'>Side</span>
                    </td>
                    <td className='taPad'>
                      <span className='animate-pulse'>🔄</span> Building (
                      <span className='tabBlue'>Inspect</span>)
                    </td>
                    <td className='taPad tabBlue'></td>
                    <td className='taPad'>Aug 18, 2022 at 12:15 PM</td>
                  </tr>
                  <tr className='taBor'>
                    <td className='taPad bg-[#161b22]'>
                      <span className='font-[600]'>Admin</span>
                    </td>
                    <td className='taPad bg-[#161b22]'>
                      ✅ Ready (<span className='tabBlue'>Inspect</span>)
                    </td>
                    <td className='taPad tabBlue bg-[#161b22]'>
                      Visit Preview
                    </td>
                    <td className='taPad bg-[#161b22]'>
                      Aug 18, 2022 at 18:18 PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='engQuote'>
            <h1>
              ❝ This is how I create a super system and deploying your app ❞
            </h1>
          </div>
          <div className='engCom'>
            <h1 className='engAuth'>
              <span className='authBold'>Rico</span> — Back End Developer
            </h1>
            <div className='engPict'>
              <Image
                src='/libraries/img/png/rico.png'
                alt=''
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
        <div
          className='lineDotWrap'
          data-aos='fade-bottom'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay='0'
          data-aos-duration='600'
          data-aos-easing='ease-in-out'
        >
          <span className='lineBullet'>
            <div className='relative w-full h-full'>
              <span className='lineBulletSolid'></span>
            </div>
          </span>
          <span className='block w-full h-full dotted-spaced left'></span>
        </div>
        <div className='workCont'>
          <div
            data-aos='fade-left'
            data-aos-anchor-placement='top-bottom'
            data-aos-delay='300'
            data-aos-duration='750'
            data-aos-easing='ease-in-out'
          >
            <div className='workImg'>
              <div className='workImgBox'>
                <Image
                  src='/libraries/img/svg/backend.svg'
                  alt=''
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
            <h1 className='workMiniTitle'>Back End Development</h1>
            <h1 className='workMiniDesc'>
              The last chapter is always a moment of truth. In this part, we
              will integrate and merge our super system into our super website
              design. There're so many bugs waiting for us if we make it wrong.
              After that our Super Website Application is ready.
            </h1>
          </div>
        </div>
      </div>
      <div className='bigHeadBut text-center'>
        <a href='mailto:weekgenz@gmail.com'>
          <span className='solBut'>Start Project</span>
        </a>
      </div>
    </section>
  );
}
