import React from 'react';

// import Image from '../../img/'

const SectionComponent5 = () => {
    return (
        <section id="section-5" className="scrollsections home-section">
            <div className="home-section-background hide-sm" style={{backgroundImage:
                "url(" + require('../../img/Hugeinc_PHelemtHugeinc_1920x1080_MAGTeaches.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#FFFFFF"}}>
                    04
                    .<span className="home-section-background__line" style={{borderColor:"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section-background hide-md-up" style={{backgroundImage: "url(" + require('../../img/Hugeinc_PHelemtHugeinc.com_750x1334_AdvertisingWeek-.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#FFFFFF"}}>
                    04
                    .<span className="home-section-background__line" style={{borderColor:"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow" style={{color:"#FFFFFF"}}>Events.</h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            <a href="/" rel="noopener noreferrer" target="_blank" style={{color:"#FFFFFF"}}>#AW2019</a>
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator" style={{color:"#FFFFFF"}}/>
                                <a href="#" rel="noopener noreferrer" target="_blank" style={{color:"#FFFFFF"}}>Huge’s Global CEO Pete Stein was joined by Brooks Running’s CMO Melanie Allen for an intimate fireside chat as they discussed the advertising industry’s next frontier: bringing emotions to brand experiences.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"></div>
            </div>
        </section>
    )
}

export default SectionComponent5;