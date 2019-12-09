import React from 'react';
// import {ReactDOM} from 'react-dom';

//Import Local Styles here

import HomePageSectionToday from './HomePageSectionToday';
import SectionWrapper from './SectionWrapper';

const HomePageSection = () => {
    return (
        <main className="main home-page">
            <SectionWrapper />

            {/* Today Home Page Component*/}
            <HomePageSectionToday />
        </main>
    )
}

export default HomePageSection