import React from 'react';
// import {ReactDOM} from 'react-dom';

//Import Local Styles here

//Import All Sections here
import TitleSection from './TitleSection';
import SectionComponent2 from './SectionComponent2';
import SectionComponent3 from './SectionComponent3';
import SectionComponent4 from './SectionComponent4';
import SectionComponent5 from './SectionComponent5';
import SectionComponent6 from './SectionComponent6';
import SectionComponent7 from './SectionComponent7';

const SectionWrapper = () => {
    return (
        <div className="home-page__scroll-jacking home-page__scroll-jacking--locked-eyebrow">
            <TitleSection />
            <SectionComponent2 />
            <SectionComponent3 />
            <SectionComponent4 />
            <SectionComponent5 />
            <SectionComponent6 />
            <SectionComponent7 />
        </div>
    )
}

export default SectionWrapper