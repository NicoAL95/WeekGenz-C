import Spline from '@splinetool/react-spline';

export default function SplineDesign() {
  return (
    <>
      {/* <div className='aspect-w-2 h-[300px]'>
      <iframe src="https://www.gbiyerusalembaru.com/" title="W3Schools Free Online Web Tutorials"></iframe>
    </div> */}
      <div className='grid grid-rows-1 grid-cols-12'>
        <div className='col-span-12 mg:col-span-6'></div>
        <div className='col-span-12 mg:col-span-6'>
          <div className='aspect-w-1 aspect-h-1'>
          <Spline scene="https://prod.spline.design/ClTjF2yIYIxyRqIU/scene.splinecode" id='splineBeta' />
        </div>
          </div>
      </div>
    </>
  )
}
