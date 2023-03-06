import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { navbarLinks } from '../../utils/local/navbar-links';
import { useRef } from 'react';

export default function Navbar() {
  // useRouter
  const router = useRouter();

  // useState Hooks
  const [showNavbar, setShowNavbar] = useState(false);
  const [navWalk, setnavColor] = useState('navStop');

  // animation
  const listenScrollEvent = () => {
    window.scrollY > 50 ? setnavColor('navMove') : setnavColor('navStop');
  };

  // useEffect Hooks
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  // Close navbar outside
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNavbar(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <section className='navMain' ref={menuRef}>
      <div className={`${navWalk} navbar`}>
        <div className='navLogo text-mainWhite'>
          <Link href='/'>
            <div className='w-[110px] h-[35px] relative cursor-pointer'>
              <Image
                src='/libraries/img/svg/weekgenz.svg'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
              />
            </div>
          </Link>
        </div>
        <div className={`${showNavbar ? 'navOn' : 'navOff'} navWrapLinks`}>
          <ul className='navLinks'>
            <li className='navWeekHide'>
              <Link href='/'>
                <div className='relative w-[80px] h-[50px] cursor-pointer'>
                  <Image
                    src='/libraries/img/svg/weekgenz.svg'
                    layout='fill'
                    objectFit='contain'
                    className=''
                    alt=''
                  />
                </div>
              </Link>
              <button
                onClick={() => setShowNavbar(false)}
                className='cursor-pointer'
              >
                <VscChromeClose />
              </button>
            </li>
            <li className='navLinks mt-5 mz:mt-0'>
              {/* render navbar links */}
              {navbarLinks &&
                navbarLinks.map((navbarLink) => {
                  const { name, link, pathName } = navbarLink;
                  return (
                    <Link href={link} key={name}>
                      <span
                        className={`${
                          router.pathname === pathName ? 'navActive' : ''
                        } navItem`}
                      >
                        {name}
                      </span>
                    </Link>
                  );
                })}
              <div className='navFoot'>
                <h1>
                  Made with ❣️ by <span className='fooBold'>WeekGenz</span>
                </h1>
              </div>
            </li>
          </ul>
        </div>
        <div className='hidden mz:block'>
          <a href='mailto:weekgenz@gmail.com'>
            <span className='navBut'>Contact Us</span>
          </a>
        </div>
        <button onClick={() => setShowNavbar(true)} className='navBurger'>
          <div className='w-[35px] h-[35px] relative cursor-pointer'>
            <Image
              src='/libraries/img/svg/burger.svg'
              layout='fill'
              objectFit='contain'
              className=''
              alt='icon-burger'
            />
          </div>
        </button>
      </div>
    </section>
  );
}
