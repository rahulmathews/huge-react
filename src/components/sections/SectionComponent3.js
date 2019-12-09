import React from 'react';

// import Image from '../../img/'

const SectionComponent3 = () => {
    return (
        <section id="section-3" className="scrollsections home-section">
            <div className="home-section-background hide-sm" style={{backgroundImage: "url(" + require('../../img/Hugeinc_JeepHugeinc_1920x1080_Jeep-a.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{"color":"#FFFFFF"}}>
                    02
                    .<span className="home-section-background__line" style={{"borderColor":"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section-background hide-md-up" style={{backgroundImage:"url(" + require('../../img/Hugeinc_JeepHugeinc.com_750x1334_Jeep.png') + ")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{"color":"#FFFFFF"}}>
                    02
                    .<span className="home-section-background__line" style={{"borderColor":"#FFFFFF"}}></span>
                </div>
            </div>
            <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow" style={{"color":"#FFFFFF"}}>Work. </h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            <a href="/" rel="noopener noreferrer" target="_blank" style={{"color":"#FFFFFF"}}>This is Not Jeep. </a>
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator" style={{"color":"#FFFFFF"}}/>
                                <a href="/" rel="noopener noreferrer" target="_blank" style={{"color":"#FFFFFF"}}>Jeep has released the #ThisIsNotJeep social campaign in partnership with Huge Detroit. </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"></div>
            </div>
        </section>
    )
}

export default SectionComponent3;