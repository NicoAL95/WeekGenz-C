// Import Typeit animation
import TypeIt from 'typeit-react';

import { FiShoppingCart } from 'react-icons/fi';

import Link from 'next/link';
import Image from 'next/image';

export default function HeadcodeHome() {
  return (
    <section className='headCode'>
      <div className='headTitle'>
        <div className='bigHeadTitle'>
          <h1>Make your dream</h1>
          <h1>Web apps come true</h1>
        </div>
        <div className='bigHeadDesc'>
          <h1>
          We are web developer specialists with a lot of experience to create your professional website and improve your business to reach its goal
          </h1>
        </div>
        <div className='bigHeadBut'>
          <a href='mailto:weekgenz@gmail.com'>
            <span className='solBut'>Start Project</span>
          </a>
        </div>
      </div>
      <div className='codeWrapper'>
        <div className='coders'>
          <div className='relative text-mainWhite h-full'>
            <div className='topCode'>
              <div className='codeRelative'>
                <div className='floatLeft'>
                  <div className='floatCard blueShad'>
                    <div className='floatCardHead'>
                      <div className='floatImg'>
                        <Image
                          src='/libraries/img/png/rico.png'
                          layout='fill'
                          objectFit='cover'
                          className='imgFace'
                          alt=''
                        />
                      </div>
                      <div className='floatTitle'>
                        <h1 className='text-[12px] text-mainWhite'>Rico</h1>
                        <h1 className='text-[10px] text-mainWhite/50'>
                          Back End Developer
                        </h1>
                      </div>
                    </div>
                    <div className='floatDesc'>
                      <h1>
                        &#8220; 404 Error is my super best
                        <br />
                        friend, but fixing a bug
                        <br />
                        is my super power.
                        <br />
                        That&#8217;s why I&#8217;m still alive
                        <br />
                        until now. &#8220;
                      </h1>
                    </div>
                  </div>
                </div>
                <div className='editHead'>
                  <ul className='editList list-none'>
                    <li className='bulHead bg-[#FF5F56]'></li>
                    <li className='bulHead bg-[#FFBD2E]'></li>
                    <li className='bulHead bg-[#27C93F]'></li>
                  </ul>
                </div>
                <div className='editBasis'>
                  <div className='editNums'>
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                    <h1>4</h1>
                    <h1>5</h1>
                    <h1>6</h1>
                    <h1>7</h1>
                  </div>
                  <div className='typeAni'>
                    <h1>
                      export default function &#40;&#123;{' '}
                      <span className='redCode'>WeekGenz</span> &#125;&#41;&#123;
                    </h1>
                    <h1>return &#40;</h1>
                    <div className='pl-[18px]'>
                      <TypeIt
                        options={{
                          loop: true,
                          speed: 130,
                        }}
                        getBeforeInit={(instance) => {
                          instance

                            .type("&#60;<span class='bluCode'>Layout</span>&#62;")
                            .pause(1500)
                            .type(
                              "&#60;&#47;<span class='bluCode'>Layout</span>&#62;"
                            )
                            .pause(1500)
                            .move(-9)
                            .type('<br><br>')
                            .move(-1)
                            .type(
                              "&emsp;&#60;<span class='bluCode'>Design</span> &#47;&#62;"
                            )
                            .pause(1000)
                            .move(-3)
                            .type(' details=')
                            .pause(1500)
                            .type(
                              "&#123; <span class='redCode'>WeekGenz</span> &#125;"
                            )
                            .pause(5000)
                            .move(13)
                            .delete(51);

                          return instance;
                        }}
                      />
                    </div>
                    <h1 className='pl-[6px]'>&#41;</h1>
                    <h1>&#125;</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='botCode'>
              <div className='codeRelative'>
                <div className='floatRight'>
                  <div className='floatCard purpleShad'>
                    <div className='floatCardHead'>
                      <div className='floatImg'>
                        <Image
                          src='/libraries/img/png/nico.png'
                          layout='fill'
                          objectFit='cover'
                          className='imgFace'
                          alt=''
                        />
                      </div>
                      <div className='floatTitle'>
                        <h1 className='text-[12px] text-mainWhite'>
                          Nico Abel Laia
                        </h1>
                        <h1 className='text-[10px] text-mainWhite/50'>
                          Front End Developer
                        </h1>
                      </div>
                    </div>
                    <div className='floatDesc'>
                      <h1>
                        &#8220; Creating an amazing
                        <br />
                        website is my passion.<br/>In fact,
                        you’re looking at it<br/>
                        right now😜. Just enjoy my
                        <br />
                        super design. &#8220;
                      </h1>
                    </div>
                  </div>
                </div>

                <div className='editHead'>
                  <ul className='editList list-none'>
                    <li className='bulHead bg-[#FF5F56]'></li>
                    <li className='bulHead bg-[#FFBD2E]'></li>
                    <li className='bulHead bg-[#27C93F]'></li>
                  </ul>
                </div>
                <div className='aniWrap'>
                  <div className='pictAni'>
                    <div className='aniLeftWrap'>
                      <div className='topAniLeft'>
                        <div className='aniCart'>
                          <FiShoppingCart />
                        </div>
                        <div className='aniLong'>
                          <div className='bg-mainWhite rounded-lg w-[40%] h-[13px]'></div>
                          <div className='bg-[#3E3E3E] rounded-lg w-full h-[13px]'></div>
                        </div>
                      </div>
                      <div className='w-full bg-[#252525] rounded-[15px]'>
                        <div className='relative aspect-w-1 aspect-h-1'>
                          <Image
                            src='/libraries/img/svg/bicycle.svg'
                            layout='fill'
                            objectFit='contain'
                            className=''
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='editWaffle'>
                      <div className='h-[50px] flex items-center'>
                        <ul className='aniMom'>
                          <li className='aniMini'></li>
                          <li className='aniMini'></li>
                          <li className='aniMini'></li>
                          <li className='aniMini'></li>
                          <li className='aniMini'></li>
                        </ul>
                      </div>
                      <div className='aniHeight'>
                        <div className='bg-[#3E3E3E] h-[40px] w-[45%] rounded-lg'></div>
                        <div className='bg-[#3E3E3E] h-[150px] w-full rounded-lg'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
