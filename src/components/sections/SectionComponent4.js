import React from 'react';

// import Image from '../../img/'

const SectionComponent4 = () => {
    return (
        <section id="section-4" className="scrollsections home-section">
            <div className="home-section-background hide-sm" style={{backgroundImage:"url(" + require('../../img/Hugeinc_PHelemtHugeinc_1920x1080_MagentaTeaches.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#FFFFFF"}}>
                    03
                    .<span className="home-section-background__line" style={{borderColor:"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section-background hide-md-up" style={{backgroundImage:"url(" + require('../../img/Hugeinc_PHelemtHugeinc.com_750x1334_MAGTeaches.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#FFFFFF"}}>
                    03
                    .<span className="home-section-background__line" style={{borderColor:"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow" style={{color:"#FFFFFF"}}>Events.</h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            <a href="/" target="_blank" style={{color:"#FFFFFF"}}>Magenta Teaches.</a>
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator" style={{color:"#FFFFFF"}}/>
                                <a href="/" rel="noopener noreferrer" target="_blank" style={{color:"#FFFFFF"}}>Join us for Magenta Teaches, an open thought-leadership event series focused on teaching new ideas and skills to friends and fans of Huge.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"></div>
            </div>
        </section>
    )
}

export default SectionComponent4;