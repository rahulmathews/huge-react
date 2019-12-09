import React from 'react';

// import Image from '../../img/'

const SectionComponent2 = () => {
    return (
        <section id="section-2" className="scrollsections home-section">
            <div className="home-section-background hide-sm" style={{backgroundImage:"url(" + require('../../img/Hugeinc_BrashHugeinc_1920x1080_BRASH-a.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{"color":"#FFFFFF"}}>
                    01
                    .<span className="home-section-background__line" style={{"borderColor":"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section-background hide-md-up" style={{backgroundImage:"url(" + require('../../img/Hugeinc_BrashHugeinc.com_750x1334_BRASH-a.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{"color":"#FFFFFF"}}>
                    01
                    .<span className="home-section-background__line" style={{"borderColor":"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow" style={{"color":"#FFFFFF"}}>Work.</h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            <a href="https://magenta.as/the-ar-infused-caf%C3%A9-of-the-future-efcdad5f427d" rel="noopener noreferrer" target="_blank" style={{"color":"#FFFFFF"}}>Connected coffee.</a>
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator" style={{"color":"#FFFFFF"}}/>
                                <a href="https://magenta.as/the-ar-infused-caf%C3%A9-of-the-future-efcdad5f427d" rel="noopener noreferrer" target="_blank" style={{"color":"#FFFFFF"}}>Huge partnered with BRASH Coffee to open a cafe and interactive R &amp;D development lab in Midtown Atlanta.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"></div>
            </div>
        </section>
    )
}

export default SectionComponent2;