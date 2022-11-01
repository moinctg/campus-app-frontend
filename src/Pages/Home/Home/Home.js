import React from 'react';
import Banner from './Banner/Banner';
import Service from './Services/Services';

import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Promo from '../../Promo/Promo';
import Experts from '../../Exparts/Experts';
import Software from './Software/Software';

const Home = () => {
    return (
        <div>
            <Banner> </Banner>
            <Promo></Promo>
            <Service></Service>
            <Experts></Experts>
            <Software></Software>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;