import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function ContentDetail({ aboutPortfolio }) {
  return (
    <section className='contentDetail'>
      <div className='condetTitle'>
        <h1>About Project:</h1>
      </div>
      <div className='condetMain'>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={aboutPortfolio}
          components={{
            p: ({ children }) => <p className='condetPar'>{children}</p>,
            img: ({ src }) => (
              <div className='condetImg'>
                <Image
                  src={src}
                  layout='fill'
                  objectFit='cover'
                  alt='weekgenz-image'
                />
              </div>
            ),
            ul: ({ children }) => (
              <ul className='list-disc pl-5'>{ children }</ul>
            ),
            li: ({ children }) => (
              <li className='listDesc font-publicsans'>{ children }</li>
            ),
          }}
        />
      </div>
    </section>
  );
}
