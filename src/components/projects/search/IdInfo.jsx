import ReactMarkdown from 'react-markdown';

export default function IdInfo({ info }) {
  return (
    <div className='idDesc pb-[30px]'>
      <h1 className='idDescTitle'>Information:</h1>
      {info !== null ? (
        // eslint-disable-next-line react/no-children-prop
        <ReactMarkdown children={info} />
      ) : (
        <h1 className='greyMsg'>There’s no important message right now.</h1>
      )}
    </div>
  );
}
