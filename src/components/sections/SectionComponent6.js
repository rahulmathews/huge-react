import React from 'react';

// import Image from '../../img/'

const SectionComponent6 = () => {
    return (
        <section id="section-6" className="scrollsections home-section">
            <div className="home-section-background hide-sm" style={{backgroundImage:"url(" + require('../../img/andriod-homepage.jpg') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#000000"}}>
                    05
                    .<span className="home-section-background__line" style={{borderColor:"#000000"}}></span>
                </div>
            </div>
            <div className="home-section-background hide-md-up" style={{backgroundImage:"url(" +require('../../img/android-homepage-mobile-2.jpg')}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#000000"}}>
                    05
                    .<span className="home-section-background__line" style={{borderColor:"#000000"}}></span>
                </div>
            </div>
            <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow" style={{color:"#000000"
                    }}>Work.</h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            <a style={{color:"#000000"}} href="/work/android">
                                Hello <br />Android.
                            </a>
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator" style={{color:"#000000"}}/>
                                <a style={{color:"#000000"}} href="/work/android">A brand refresh for the world’s most popular operating system.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"></div>
            </div>
        </section>
    )
}

export default SectionComponent6;