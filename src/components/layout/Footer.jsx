import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { footerLinks } from '../../utils/local/footer-links';

import moment from 'moment';

export default function Footer() {
  return (
    <section className='footer'>
      <div className='fooHead'>
        <div className='headFooLogo'>
          <embed src='/libraries/img/svg/weekgenz.svg' type='' />
        </div>
        <div className='headAct'>
          <div className='headText'>
            <h1>Ready to get started?</h1>
          </div>
          <a href='mailto:weekgenz@gmail.com' className='headBtn'>
            Get started
          </a>
        </div>
      </div>
      <div className='fooLine'></div>
      <div className='fooConn'>
        <div className='connDesc'>
          <h1>Let’s start your</h1>
          <h1>Digital Journey with us</h1>
          <p className='connGrey'>
            WeekGenz is the best partner for you to reach your
            <br />
            digital market with maximum potential
          </p>
        </div>
        <div className='connLink'>
          {/* render footer links */}
          {footerLinks &&
            footerLinks.map((footerLink) => {
              // destruct
              const { title, linksGo } = footerLink;
              // render title
              return (
                <div className='connLinkItem' key={title}>
                  <div className='connLinkTitle'>
                    <h1>{title}</h1>
                  </div>
                  {/* render linksGo */}
                  {linksGo &&
                    linksGo.map((linkGo) => {
                      // destruct
                      const { link, name } = linkGo;
                      // render list link
                      return (
                        <div className='connLinkGo' key={name}>
                          <h1>
                            <Link href={link}>{name}</Link>
                          </h1>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          {/* end render */}
        </div>
      </div>
      <div className='fooTerms'>
        <div className='termsLink'>
          <a href='#' className='termsHov'>
            Terms & Conditions
          </a>
          <a href='#' className='termsHov'>
            Privacy Policy
          </a>
        </div>
        <div className='termsIcon'>
          <a href='https://www.linkedin.com/company/weekgenz/' target='_blank' rel='noreferrer'>
            <FaLinkedin />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='https://www.instagram.com/weekgenz/' target='_blank' rel='noreferrer'>
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='fooBottom'>
        <h1>
          © {moment().format('YYYY')} All rights reserved | Made with ❣️ by{' '}
          <span className='fooBold'>WeekGenz</span>
        </h1>
      </div>
    </section>
  );
}
