import Image from "next/image"
import Link from "next/link"
import { AiOutlinePlayCircle} from 'react-icons/ai';

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useRef, useEffect } from "react";

export default function AboutHigh() {
    // gsap.registerPlugin(ScrollTrigger)
    // const secRef = useRef(null);
    // useEffect(() => {
    //     const el = secRef.current;
    //     gsap.fromTo(el, {opacity: 0}, {opacity: 1, duration: 3, scrollTrigger: {
    //         trigger: el
    //     }})
    // }, [])
  return (
    <section className="aboutUs">
        <div className="aboutTitle">
            <h1 className='littleTitle'>About Us</h1>
            <h1 className='mainTitle'>Our Professional</h1>
        </div>
        <div className="aboutCont">
            <div className="aboutPict">
                <Image src='/libraries/img/png/professional.png' layout="fill" objectFit="cover" className="imgPorto" alt="" />
            </div>
            <div className="aboutDesc">
                <div>
                    <div className="aboutWord">
                        <h1>
                        WeekGenz has more than 5 years of experience in Indonesia 🇮🇩 to create and deploy websites, with Very High Standard Quality and trusted by more than 100++ people and companies. We will always do our best to satisfy our customers and fulfill their needs.
                        </h1>
                        <br/>
                        <h1>
                        We always improve our services and love to make our customers happy. We will use the best technology for your website, and our website will always clean code and easy to maintain, so let’s start your digital journey with us.
                        </h1>
                    </div>
                    <div className="aboutBut">
                        <Link href="/about">
                            <span className="solBut">About Us</span>
                        </Link>
                        <Link href="/">
                            <span className="outBut">
                                <AiOutlinePlayCircle/>
                                <h1>Our Story</h1>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
