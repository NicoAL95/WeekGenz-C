import { BsArrowRight } from 'react-icons/bs';
import moment from 'moment';

// only work on div:idTimeline and ol:olTime
export default function TimeItem({ title, date, desc, preview, rev }) {
  return (
    <li className='olPush'>
      <div className={rev ? rev : 'olBull'} />
      <h1 className='olTitle'>
        {title.includes('UI_UX')
          ? title.replace('_', '/')
          : title.replace('_', ' ')}
      </h1>
      <h2 className='olDate'>{moment(date).format('DD MMMM YYYY')}</h2>
      <p className='olDesc'>{desc}</p>
      {preview && (
        <a href={preview} target='_blank' className='olLink' rel='noreferrer'>
          <span>Preview</span>
          <BsArrowRight />
        </a>
      )}
    </li>
  );
}
