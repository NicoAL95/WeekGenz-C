import Image from 'next/image';

export default function SuperMan() {
  return (
    <section className='superman'>
      <div className='superTitle'>
        <h1 className='littleTitle'>Our Superman</h1>
        <h1 className='mainTitle'>WeekGenz Power</h1>
        <h1 className='descTitle'>
          Let&#8217;s meet WeekGenz super power. They created so many
          <br />
          greatest website in our universe
        </h1>
      </div>
      <div className='superFounder'>
        <div className='founderCard row-start-2 mx:row-start-1'>
          <div className='founderImg'>
            <Image
              src='/libraries/img/png/rico.png'
              layout='fill'
              objectFit='cover'
              className='imgFace'
              alt='profile-image'
            />
          </div>
          <div className='founderName'>
            <h1>Rico</h1>
          </div>
          <div className='founderRole'>
            <h1>WeekGenz | Back End Developer</h1>
          </div>
          <div className='founderQuotes'>
            <h1>
              &#8220; I always try my best to solve any problem, without
              problems our life will be nothing. That&#8217;s why I love to code
              &#8221;
            </h1>
          </div>
        </div>
        <div className='founderCard row-start-1 mx:row-start-1'>
          <div className='founderImg'>
            <Image
              src='/libraries/img/png/nico.png'
              layout='fill'
              objectFit='cover'
              className='imgFace'
              alt='profile-image'
            />
          </div>
          <div className='founderName'>
            <h1>Nico Abel Laia</h1>
          </div>
          <div className='founderRole'>
            <h1>WeekGenz | Front End Developer</h1>
          </div>
          <div className='founderQuotes'>
            <h1>
              &#8220; Improve every day, and create something new every day.
              I&#8217;m a Gen Z, that&#8217;s why I called this company WeekGenz
              &#8221;
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
