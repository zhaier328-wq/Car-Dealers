import Booking from '../sections/common/Booking';
import DownloadApp from '../sections/common/DownloadApp';
import Footer from '../sections/common/Footer';
import Gallery from '../sections/common/Gallery';
import Header from '../sections/common/Header';
import LetsTalk from '../sections/common/LetsTalk';
import OurBlog from '../sections/common/OurBlog';
import SlidingText from '../sections/common/SlidingText';
import StrickyHeader from '../sections/common/StrickyHeader';
import AboutOne from '../sections/home-one/AboutOne';
import BannerOne from '../sections/home-one/BannerOne';
import BrandOne from '../sections/home-one/BrandOne';
import FaqOne from '../sections/home-one/FaqOne';
import ListingOne from '../sections/home-one/ListingOne';
import PricingOne from '../sections/home-one/PricingOne';
import ProcessOne from '../sections/home-one/ProcessOne';
import ServiceOne from '../sections/home-one/ServiceOne';
import TeamOne from '../sections/home-one/TeamOne';
import TestimonialOne from '../sections/home-one/TestimonialOne';
import VideoOne from '../sections/home-one/VideoOne';
import WhychooseOne from '../sections/home-one/WhychooseOne';
import React from 'react';
import SearchSection from '../sections/common/Search';
import WelcomeSection from '../sections/common/Welcome';

const page: React.FC = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <BannerOne />
       <BrandOne />
         <SearchSection />
        <ListingOne />
  <WelcomeSection />
        <AboutOne />
         <WhychooseOne />
           <TestimonialOne /> 
            <Gallery />
             <FaqOne />
              <OurBlog />
              

      {/* <ServiceOne /> 
           <SlidingText />    
      <ProcessOne />
      <VideoOne />
     <LetsTalk />  */}
     
      <Footer />
      <StrickyHeader />
    </div>
  );
};

export default page;