import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Searchproj() {
  const [input, setInput] = useState('');
  const router = useRouter();

  // function handle search
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/projects/search/${input.toLowerCase()}`);
  };

  return (
    <section className='searchProj'>
      <div>
        <div className='searchTitle'>
          <div className='topSearchTitle'>
            <Image
              src='/libraries/img/svg/weekgenz.svg'
              layout='fill'
              objectFit='contain'
              className=''
              alt=''
            />
          </div>
          <h1 className='botSearchTitle'>Search Project</h1>
        </div>
        <div className='searchDesc'>
          <h1 className='shortSearch'>
            To our WeekGenz valued customers, Thank you for using WeekGenz
            services. Please enter your Project ID to view your order details
            Thank you.
          </h1>
        </div>
        <div className='searchInput'>
          <div className='searchHide' />
          <div className='searchSpan'>
            <div className='formInput'>
              <form>
                <input
                  className='searchInputForm'
                  placeholder='Type Your Project ID'
                  type='text'
                  maxLength={6}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className='searchBut'>
                  <button
                    type='submit'
                    className='butSearch'
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='searchHide' />
        </div>
      </div>
    </section>
  );
}
