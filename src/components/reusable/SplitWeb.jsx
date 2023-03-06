import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
  } from 'react-reflex'
  
  import 'react-reflex/styles.css'

export default function SplitWeb() {
  return (
    <section className='splitWeb'>
        <div className='splitSuperTitle'>
            <h1>Anywhere,</h1>
            <h1>anytime.</h1>
        </div>
        <div className='splitSuperDesc'>
            <h1>Grow your business, reach new audiences, and hit your goals with WeekGenz. Control responsive for stunning designs on every device.</h1>
            {/* <h1>Grow your business with High Quality website. WeekGenz always make your website responsive in every screen.</h1> */}
        </div>
        <div className='w-full h-[40px]'></div>
        <div className='splitEffect  background-animate'></div>
        <div className='splitBackground'></div>
        <div className='gapXas relative'>

        {/* <div className='absolute top-0 left-0 w-full h-full'>
            <div className='absolute bottom-0 inset-x-0 h-full w-full bg-blue-300 bg-bottom [mask-image:linear-gradient(0deg,black,transparent)] opacity-5'></div>
        </div> */}

        <ReflexContainer orientation="vertical" className='flexForce'>

            <ReflexElement className="left-pane min-w-full ms:min-w-[400px]">
            <div className="pane-content">
                <div className=''>
                    <div className='splitSuperHead'>
                    <ul className='editList list-none'>
                        <li className='bulHead bg-[#FF5F56]'></li>
                        <li className='bulHead bg-[#FFBD2E]'></li>
                        <li className='bulHead bg-[#27C93F]'></li>
                    </ul>
                    <div className='splitHeadCode'>
                        <h1 className='text-white/80'>WeekGenz Dynamic Screen</h1>
                    </div>
                    </div>
                    <div className='splitHeadRow'>
                        <div className='splitHeadTitle'>
                            <h1>zeecation.com</h1>
                        </div>
                    </div>
                    <iframe src="https://weekside.netlify.app/" title="description" className='w-full h-[30.625rem] rounded-b-[15px] border-x-[1px] border-b-[1px] border-mainGrey/40'></iframe>
                </div>
            </div>
            </ReflexElement>

            <ReflexSplitter className='my-auto animate-pulse hidden ms:block'/>

            <ReflexElement className="right-pane"
            minSize="0">
            <div className="pane-content w-full h-[30.625rem]">
            </div>
            </ReflexElement>

            </ReflexContainer>
        </div>
    </section>
  )
}
