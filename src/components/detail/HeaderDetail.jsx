import moment from 'moment/moment';
import Image from 'next/image';
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton
} from "react-share";
import { RWebShare } from 'react-web-share';

export default function HeaderDetail({ dataHeaders }) {
  const [urLink, setUrl] = useState("");
    useEffect(() => {
        const cu = window.location.href;
        setUrl(cu);
    }, []);

  if (!dataHeaders) return;
  const {
    clientName,
    projectRole,
    portfolioTitle,
    type,
    duration,
    preview,
    created,
    bannerImage,
  } = dataHeaders;
  const urlSanitize = preview.replace(/(^\w+:|^)\/\//, '');
  return (
    <section className='headerDetail'>
      <div className='imgTron'>
        <Image
          src={`${bannerImage.url}`}
          layout='fill'
          objectFit='cover'
          className=''
          alt='banner-image-weekgenz'
        />
      </div>
      <div className='detContent'>
        <div className='detTitle'>
          <h1>{portfolioTitle}</h1>
        </div>
        <div className='detDyna'>
          <div className='dynaChildLeft'>
            <div className='detRoles'>
              <div className='rolesTitle'>
                <h1>WeekGenz Roles:</h1>
              </div>
              {/* fix me! */}
              <ul className='rolesDet'>
                {projectRole &&
                  projectRole.map((role, index) => (
                    <li key={index} className='extraBorder' >
                      <h1 className='roleNext'>
                        {role.match(new RegExp('UI_UX'))
                          ? role.replace(/_/g, '/')
                          : role.replace(/_/g, ' ')}
                      </h1>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className='dynaChildRight'>
            <div className='detRoles'>
              <div className='rolesTitle'>
                <h1>Share</h1>
              </div>
              <div className='portShare'>
                <FacebookShareButton url={urLink} className='w-fit'>
                  <div className="iconFlex">
                      <Image src='/libraries/img/svg/share/facebook.svg' objectFit="contain" layout="fill" alt=""/>
                  </div>
                </FacebookShareButton>
                <LinkedinShareButton url={urLink} className='w-fit'>
                  <div className="iconFlex">
                      <Image src='/libraries/img/svg/share/linkedin.svg' objectFit="contain" layout="fill" alt=""/>
                  </div>
                </LinkedinShareButton>
                <TelegramShareButton url={urLink} className='w-fit'>
                  <div className="iconFlex">
                      <Image src='/libraries/img/svg/share/telegram.svg' objectFit="contain" layout="fill" alt=""/>
                  </div>
                </TelegramShareButton>
                <WhatsappShareButton url={urLink} className='w-fit'>
                  <div className="iconFlex">
                      <Image src='/libraries/img/svg/share/whatsapp.svg' objectFit="contain" layout="fill" alt=""/>
                  </div>
                </WhatsappShareButton>
                <RWebShare data={{}}
                >
                    <button className='w-fit'>
                        <div className="iconFlex">
                            <Image src='/libraries/img/svg/share/share.svg' objectFit="contain" layout="fill" alt=""/>
                        </div>
                    </button>
                </RWebShare>
              </div>
            </div>
          </div>
        </div>
        <div className='detStats'>
          <div className='statSpace'>
            <div className='statTitle'>
              <h1>Client:</h1>
            </div>
            <div className='statItem'>
              <h1>{clientName}</h1>
            </div>
          </div>
          <div className='statSpace'>
            <div className='statTitle'>
              <h1>Type:</h1>
            </div>
            <div className='statItem'>
              <h1>{type.replace(/_/g, ' ')}</h1>
            </div>
          </div>
          <div className='statSpace'>
            <div className='statTitle'>
              <h1>Created:</h1>
            </div>
            <div className='statItem'>
              <h1>{moment(created).format('L')}</h1>
            </div>
          </div>
          <div className='statSpace'>
            <div className='statTitle'>
              <h1>Duration:</h1>
            </div>
            <div className='statItem'>
              <h1>{duration}</h1>
            </div>
          </div>
          <div className='statBig'>
            <div className='statTitle'>
              <h1>Preview:</h1>
            </div>
            <div className='statItem lowercase'>
              <h1>
                <a
                  href={`${preview}`}
                  target='_blank'
                  className='hover:underline hover:underline-offset-2 transition-all'
                  rel='noreferrer'
                >
                  {urlSanitize}
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
