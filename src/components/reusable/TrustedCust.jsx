import Image from 'next/image';
import Marquee from "react-fast-marquee";

export default function TrustedCust({ trusteds }) {
  return (
    <section className='trusted'>
      <div className='trustedTitle'>
        <h1 className='littleTitle'>Our Super Projects</h1>
        <h1 className='mainTitle'>Trusted by</h1>
        <h1 className='descTitle font-[700] tracking-[0.2rem]'>
          THE BEST CUSTOMERS IN THE WORLD ALL THE TIME
        </h1>
      </div>
      <div className='mk:gapSide'>
        <Marquee className='marTrust' gradient={true} gradientColor={[0,0,0]} pauseOnHover={true} speed={30} gradientWidth={150}>
          {trusteds &&
              trusteds.map((trusted) => {
                const { id, trustedImage, linkClient } = trusted;
                return (
                  <div className='trustedImg' key={id}>
                      <a href={`${linkClient}`} target='_blank' rel='noreferrer'>
                        <Image
                          src={`${trustedImage.url}`}
                          layout='fill'
                          objectFit='contain'
                          className='imgPorto'
                          alt='trusted-logo'
                        />
                      </a>
                    </div>
                );
              })}
        </Marquee>
      </div>
    </section>
  );
}
