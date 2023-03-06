import Link from 'next/link';
import Image from 'next/image';

export default function CollabHigh() {
  return (
    <section className='collaborating'>
      <div className='collaWrap'>
        <div className='collaLeft'>
          <div>
            <div className='collaCont'>
              <div className='aboutTitle'>
                <h1 className='mainTitle'>Interesting </h1>
                <h1 className='mainTitle'>Collaboration</h1>
                <h1 className='mainTitle'>With Us?</h1>
                <h1 className='descTitle'>
                  Let’s create your dream website with us.
                </h1>
              </div>
            </div>
            <div className='collaBut'>
              <a href='mailto:weekgenz@gmail.com'>
                <span className='solBut'>Get Started</span>
              </a>
            </div>
          </div>
        </div>
        <div className='collaRight'>
          <div className='relative h-full w-full'>
            <div className='collaPict bottom-0 left-0 z-[5]'>
              <div className='collaImg'>
                <Image
                  src='/libraries/img/png/colOne.png'
                  layout='fill'
                  objectFit='cover'
                  alt='image-collab'
                  className='rounded-[16px]'
                />
              </div>
            </div>
            <div className='collaPict top-0 right-0 z-[4]'>
              <div className='collaImg'>
                <Image
                  src='/libraries/img/png/colTwo.png'
                  layout='fill'
                  objectFit='cover'
                  alt='image-collab'
                  className='rounded-[16px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
