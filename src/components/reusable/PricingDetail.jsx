/* eslint-disable react/no-unknown-property */
import Link from "next/link"

export default function PricingDetail() {
  return (
    <section className='pricingDetail'>
        <div className='splitSuperTitle'>
            <h1>Affordable,</h1>
            <h1>the best.</h1>
        </div>
        <div className='offerSuperDesc'>
            <h1>We always give the best offers to our customer. We will always give you a special website with an affordable price that you never have before.</h1>
        </div>
        <div className='pricingGrid'>
            <div className='pricingCol'>
                <div className='pricingWrapper pricingWrapperLong rounded-lg xg:rounded-none xg:rounded-l-lg'>
                    <div className='pricingHeader'>
                        <div className='pricingIntro'>
                            <h1 className='pricingType'>Basic</h1>
                            <h1 className='pricingColorful'><span className='text-pink-500'>15+</span> Benefits</h1>
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
                                    <h1 className="pricingBut">Get Started</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='pricingComment'>
                        <h1 className='pricingRecom'>Beginers friendly</h1>
                    </div>
                    <ul className='pricingList'>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Free Domain</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>4 Pages</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>5 Sections</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>3 CRUD (Cread, Read, Update, Delete)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>SEO Friendly</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Traffic Analytics</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Limited Front End Features</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Content Entries (1.000 Content)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Assets Storage (5GB)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Users Access (3 users)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Bandwith database (5GB / month) | free 2 months</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Hosting website (4GB / month) | free 2 months</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Custom admin panel </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Custom admin panel domain with sub domain </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Backups </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Free SSL Certificate (only hosting with us)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Encryption database</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1> Access logs </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Custom Roles and Permissions </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Free maintenance 1 month</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Support Channels (email)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            <h1>Uptime SLA </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            <h1>Response SLA </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Source Code (Optional)</h1>
                        </li>
                    </ul>
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
                                <h1 className="pricingButDark">Get Started</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='pricingComment'>
                    <h1 className='pricingRecom slateSoft'>Personal Use</h1>
                </div>
                <ul className='pricingList'>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1>Free Domain</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>6 Pages</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>6 Sections per page</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>6 CRUD (Cread, Read, Update, Delete)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>SEO Friendly</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Traffic Analytics</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Limited Front End Features</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Content Entries (10.000 Content)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Assets Storage (5GB)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Users Access (3 users)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Bandwith database (10GB / month) | free 2 months</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Hosting website (5GB / month) | free 2 months</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                    <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1>Custom admin panel </h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1>Custom admin panel domain with sub domain </h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1>Backups </h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Free SSL Certificate (only hosting with us)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Encryption database</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1> Access logs </h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h1>Custom Roles and Permissions </h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Free maintenance 2 months</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Support Channels (email, telegram, whatsapp)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Uptime SLA (95%)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Response SLA (2-4 hours)</h1>
                    </li>
                    <li className='pricingItem pricingDark'>
                        <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <h1>Source Code (Optional)</h1>
                    </li>
                </ul>
            </div>
            <div className='pricingCol'>
                <div className='pricingWrapper pricingWrapperLong rounded-lg xg:rounded-r-lg'>
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
                                    <h1 className="pricingBut">Get Started</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='pricingComment'>
                        <h1 className='pricingRecom'>Business and etc</h1>
                    </div>
                    <ul className='pricingList'>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Free domain (.com .org .co .id) - 1 year</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>14 Pages</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>8 Sections</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>10 CRUD (Cread, Read, Update, Delete)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>SEO Friendly</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Traffic Analytics</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>medium front end features</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Content Entries (unlimited)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Assets Storage (45GB+)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Users Access (unlimited)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Bandwith database (100GB / month) | free 5 months</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Hosting website (10GB / month) | free 5 months</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Custom admin panel domain with sub domain</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Custom admin panel</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Backups </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Free SSL Certificate (only hosting with us)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Encryption database</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1> Access logs </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-500 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <h1>Custom Roles and Permissions </h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Free maintenance 5 months</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Support Channels (email, telegram, whatsapp)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Uptime SLA (98%)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Response SLA (under 90 minutes)</h1>
                        </li>
                        <li className='pricingItem'>
                            <svg class="text-zinc-200 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <h1>Source Code (Optional)</h1>
                        </li>
                    </ul>
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
                                    <h1 className="pricingBut">Get Started</h1>
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
