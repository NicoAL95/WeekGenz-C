import Image from 'next/image';
import { useState } from 'react';
import { FiEye } from 'react-icons/fi';

export default function ShowProj({ portos, pageInfo }) {
  const [portfolios, setPortfolios] = useState(portos);
  const [skip, setSkip] = useState(12);
  const [hasMore, setHasMore] = useState(pageInfo.hasNextPage);
  const limit = 9;

  // onClick function
  const loadMore = async () => {
    setSkip(skip + limit);
    const { portfolios: portos, portfoInfo } = await fetch(
      `/api/more-projects?limit=${limit}&skip=${skip}`
    ).then((res) => res.json());

    setHasMore(portfoInfo.hasNextPage);
    setPortfolios([...portfolios, ...portos]);
  };

  return (
    <section className='showProj'>
      <div className='showLoop'>
        {portfolios &&
          portfolios.map((porto) => (
            <div className='portoCol' key={porto.slug}>
              <div className='portoImg'>
                <Image
                  src={porto.thumbnail.url}
                  layout='fill'
                  objectFit='cover'
                  className='imgPorto'
                  alt='weekgenz_cover_portfolio'
                />
                <div className='portoOverlay'></div>
                <div className='portoName'>
                  <a href={`/projects/${porto.slug}`} className='prevPorto'>
                    <span className='flex items-center space-x-2'>
                      <FiEye />
                      <h1>Preview</h1>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className='loadShow'>
        <button
          onClick={loadMore}
          className='outBut disabled:cursor-not-allowed'
          disabled={hasMore ? false : true}
        >
          {hasMore ? 'Load More' : 'No More Content'}
        </button>
      </div>
    </section>
  );
}
