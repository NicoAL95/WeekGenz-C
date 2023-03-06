import TimeItem from './TimeItem';

export default function IdTime({ timeLine }) {
  return (
    <div className='idDesc'>
      <h1 className='idDescTitle'>Timeline:</h1>
      <div className='idTimeline'>
        <ol className='olTime'>
          {timeLine &&
            timeLine.map((item, index) => {
              const { type, estimation, description, preview } = item;
              return (
                <TimeItem
                  key={index}
                  title={type}
                  date={estimation}
                  desc={description}
                  preview={preview}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
}
