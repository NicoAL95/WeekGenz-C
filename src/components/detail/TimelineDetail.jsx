import React from 'react';

export default function TimelineDetail({ timelineWorks }) {
  return (
    <section className='timelineDetail'>
      <div className='timeTitle'>
        <h1>Timeline:</h1>
      </div>
      <div className='timeGrid'>
        {timelineWorks &&
          timelineWorks.map((time) => {
            return (
              <div className='timeItem' key={time.type}>
                <div className='timeWork'>
                  <h1>
                    {time.type.match(new RegExp('UI_UX'))
                      ? time.type.replace(/_/g, '/')
                      : time.type.replace(/_/g, ' ')}
                    :
                  </h1>
                </div>
                <div className='timeDays'>
                  <h1>{time.workDuration}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
