import ReactMarkdown from 'react-markdown';

export default function IdReq({ req }) {
  return (
    <div className='idDesc'>
      <h1 className='idDescTitle'>Requirements:</h1>
      <div className='idList'>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={req}
          components={{
            ul: ({ ordered, ...props }) => (
              <ul className='list-disc' {...props} />
            ),
            li: ({ ordered, ...props }) => (
              <li className='listDesc' {...props} />
            ),
          }}
        />
      </div>
    </div>
  );
}
