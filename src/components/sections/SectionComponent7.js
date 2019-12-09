import React from 'react';

// import Image from '../../img/'

const SectionComponent7 = () => {
    return (
        <section id="section-7" className="scrollsections home-section">
            <div className="home-section-background hide-sm" style={{backgroundImage:
            "url(" + require('../../img/Hugeinc_PHelemtHugeinc_1920x1080_Hemelt-b__1_.png')}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#000000"}}>
                    06
                    .<span className="home-section-background__line" style={{borderColor:"#000000"}}></span>
                </div>
            </div>
            <div className="home-section-background hide-md-up" style={{backgroundImage:"url(" + require('../../img/Hugeinc_PHelemtHugeinc.com_750x1334_Helmet-b__1_.png') +")"}}>
                <div aria-hidden="false" className="home-section-background__index" style={{color:"#000000"}}>
                    06
                    .<span className="home-section-background__line" style={{borderColor:"#000000"}}></span>
                </div>
            </div>
            <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow" style={{color:"#000000"}}>Work. </h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            <a href="/" target="_blank" style={{color:"#000000"}}>A Better Helmet. </a>
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator" style={{color:"#000000"}}/>
                                <a href="/" rel="noopener noreferrer" target="_blank" style={{color:"#000000"}}>Huge Toronto designed a new cycling helmet in partnership with Scott Sports. </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"></div>
            </div>
        </section>
    )
}

export default SectionComponent7;