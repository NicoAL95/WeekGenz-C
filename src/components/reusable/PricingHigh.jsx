import Link from "next/link"

export default function PricingHigh() {
  return (
    <section className='pricingHigh'>
        <div className='splitSuperTitle'>
            <h1>Affordable,</h1>
            <h1>the best.</h1>
        </div>
        <div className='offerSuperDesc'>
            <h1>We always give the best offers to our customer. We will always give you a special website with an affordable price that you never have before.</h1>
        </div>
        <div className='pricingGrid'>
            <div className='pricingCol'>
                <div className='pricingWrapper rounded-lg xg:rounded-none xg:rounded-l-lg'>
                    <div className='pricingHeader'>
                        <div className='pricingIntro'>
                            <h1 className='pricingType'>Basic</h1>
                            <h1 className='pricingColorful'><span className='text-pink-500'>14+</span> Benefits</h1>
                        </div>
                        <h1 className="priceStart">Starting From</h1>
                        <div className='pricingTop'>
                            <div className='pricingCur'>
                                <h6 className='currency'>
                                    IDR
                                </h6>
                                <h2 className='curFront'>3</h2>
                                <div className='ml-2'>
                                    <p className='curBack'>000,000</p>
                                    <p className='curBackDet'>Billed per project</p>
                                </div>
                            </div>
                            <div className='pricingCta'>
                                <Link href={'/services'}>
                                    <h1 className="pricingBut">View Details</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='pricingComment'>
                        <h1 className='pricingRecom'>Beginers friendly</h1>
                    </div>
                </div>
            </div>
            <div className='pricingColWhite'>
                <div className='pricingHeader'>
                    <div className='pricingIntro'>
                        <h1 className='pricingType zincDark'>Personal</h1>
                        <h1 className='pricingColorful zincDark'><span className='text-pink-500'>16+</span> Benefits</h1>
                    </div>
                    <h1 className="priceStart slateSoft">Starting From</h1>
                    <div className='pricingTop'>
                        <div className='pricingCur'>
                            <h6 className='currency slateSoft'>
                                IDR
                            </h6>
                            <h2 className='curFront slateDark'>7</h2>
                            <div className='ml-2'>
                                <p className='curBack slateDark'>000,000</p>
                                <p className='curBackDet slateSoft'>Billed per project</p>
                            </div>
                        </div>
                        <div className='pricingCta'>
                            <Link href={'/services'}>
                                <h1 className="pricingButDark">View Details</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='pricingComment'>
                    <h1 className='pricingRecom slateSoft'>Personal Use</h1>
                </div>
            </div>
            <div className='pricingCol'>
                <div className='pricingWrapper rounded-lg xg:rounded-none'>
                    <div className='pricingHeader'>
                        <div className='pricingIntro'>
                            <h1 className='pricingType'>Business</h1>
                            <h1 className='pricingColorful'><span className='text-pink-500'>20+</span> Benefits</h1>
                        </div>
                        <h1 className="priceStart">Starting From</h1>
                        <div className='pricingTop'>
                            <div className='pricingCur'>
                                <h6 className='currency'>
                                    IDR
                                </h6>
                                <h2 className='curFront'>15</h2>
                                <div className='ml-2'>
                                    <p className='curBack'>000,000</p>
                                    <p className='curBackDet'>Billed per project</p>
                                </div>
                            </div>
                            <div className='pricingCta'>
                                <Link href={'/services'}>
                                    <h1 className="pricingBut">View Details</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='pricingComment'>
                        <h1 className='pricingRecom'>Business and etc</h1>
                    </div>
                </div>
            </div>
            <div className='pricingCol'>
                <div className='pricingWrapper rounded-lg xg:rounded-none xg:rounded-r-lg'>
                    <div className='pricingHeader'>
                        <div className='pricingIntro'>
                            <h1 className='pricingType'>Custom</h1>
                            <h1 className='pricingColorful'><span className='text-pink-500'>Unlimited</span> Benefits</h1>
                        </div>
                        <h1 className="priceStart">Starting From</h1>
                        <div className='pricingTop'>
                            <div className='pricingCur'>
                                <h6 className='currency'>
                                    IDR
                                </h6>
                                <h2 className='curFront'>?</h2>
                                <div className='ml-2'>
                                    <p className='curBack'>000,000</p>
                                    <p className='curBackDet'>Billed per project</p>
                                </div>
                            </div>
                            <div className='pricingCta'>
                                <Link href={'/services'}>
                                    <h1 className="pricingBut">View Details</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='pricingComment'>
                        <h1 className='pricingRecom'>Special order</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
