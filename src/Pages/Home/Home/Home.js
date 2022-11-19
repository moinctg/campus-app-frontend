import React from 'react';
import Banner from './Banner/Banner';
import Service from './Services/Services';

import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Promo from '../../Promo/Promo';
import Experts from '../../Experts/Experts';
import Software from './Software/Software';
import Process from './Process/Process';
import AboutUs from './AboutUs/AboutUs';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner> </Banner>
            <Promo></Promo>
            <Service></Service>
            <AboutUs></AboutUs>
            <Experts></Experts>
            <Process></Process>
            <Software></Software>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;