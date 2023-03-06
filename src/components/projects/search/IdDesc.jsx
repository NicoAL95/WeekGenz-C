export default function IdDesc({ desc }) {
  return (
    <div className='idDesc'>
      <h1 className='idDescTitle'>Description:</h1>
      <div className='idDescCon'>
        <p>{desc}</p>
      </div>
    </div>
  );
}
