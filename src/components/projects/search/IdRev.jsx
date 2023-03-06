import TimeItem from './TimeItem';

export default function IdRev({ revisions }) {
  return (
    <div className='idDesc'>
      <h1 className='idDescTitle'>Revision:</h1>
      {revisions.length > 0 ? (
        revisions.map((revision, index) => {
          const { type, dateRevision, description } = revision;
          return (
            <div className='idTimeline' key={index}>
              <ol className='olTimeRev'>
                <TimeItem
                  title={type}
                  date={dateRevision}
                  desc={description}
                  rev='olBullRev'
                />
              </ol>
            </div>
          );
        })
      ) : (
        <div>
          <h1 className='greyMsg'>There’s no revision right now.</h1>
        </div>
      )}
    </div>
  );
}
