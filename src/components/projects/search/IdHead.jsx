import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';

export default function IdHead({
  clientName,
  projectTitle,
  status,
  pid,
  revisionLeft,
  preview,
}) {
  const handleCopy = () => {
    toast('Project ID Copied!', {
      icon: '✨',
    });
  };

  return (
    <div className='idHead'>
      <div className='idOwner'>
        <h1 className='clName'>{clientName}</h1>
        <h1 className='clTitle'>{projectTitle}</h1>
      </div>
      <div className='idLinks'>
        <div className='idLinksItem'>
          <h1 className='linkTitle'>Status:</h1>
          <h1 className={`linkContent ${status.toLowerCase()}`}>{status}</h1>
        </div>
        <div className='idLinksItem'>
          <h1 className='linkTitle'>Project ID:</h1>
          <h1 className='linkContent uppercase'>
            <span className='mr-[10px]'>#{pid}</span>
            <CopyToClipboard text={pid} onCopy={handleCopy}>
              <button type='submit'>
                <div
                  className='relative w-[16px] h-[16px]'
                  title='copy to clipboard'
                >
                  <Image
                    src='/libraries/img/svg/copy.svg'
                    layout='fill'
                    objectFit='contain'
                    className=''
                    alt=''
                  />
                </div>
              </button>
            </CopyToClipboard>
          </h1>
        </div>
        <div className='idLinksItem'>
          <h1 className='linkTitle'>Revision:</h1>
          <h1 className='linkContent '>{revisionLeft} | 3</h1>
        </div>
        <div className='idLinksItem'>
          <h1 className='linkTitle'>Preview:</h1>
          <h1 className='linkContent lowercase'>
            <a
              href={preview.includes('http') ? preview : `https://${preview}`}
              target='_blank'
              className='hover:underline hover:underline-offset-1 transition-all'
              rel='noreferrer'
            >
              {preview}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
