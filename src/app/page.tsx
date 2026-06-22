"use client";

import React, { useState } from 'react';
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
import VideoTestimonial from '../sections/home-one/VideoTestimonial';
import VideoOne from '../sections/home-one/VideoOne';
import WhychooseOne from '../sections/home-one/WhychooseOne';
import SearchSection from '../sections/common/Search';
import WelcomeSection from '../sections/common/Welcome';
import { listingData } from '@/all-content/listing/Lictingdata';
import type { ListingItem } from '@/all-content/listing/listType';

export interface SearchFilters {
  make: string;
  fuelType: string;
  transmission: string;
  minPrice: string;
  maxPrice: string;
}

const Page: React.FC = () => {
  const [filteredData, setFilteredData] = useState<ListingItem[]>(listingData);

  const handleSearch = (filters: SearchFilters) => {
    const results = listingData.filter((car) => {
      const matchMake = filters.make === "All Makes" || car.brand.toLowerCase() === filters.make.toLowerCase();
      const matchFuel = filters.fuelType === "All Fuel Types" || car.fuel.toLowerCase() === filters.fuelType.toLowerCase();
      const matchTransmission = filters.transmission === "All Transmissions" || car.transmission.toLowerCase() === filters.transmission.toLowerCase();
      
      const carPrice = car.pricePerDay;
      const min = filters.minPrice ? parseInt(filters.minPrice) : 0;
      const max = filters.maxPrice ? parseInt(filters.maxPrice) : Infinity;
      const matchPrice = carPrice >= min && carPrice <= max;

      return matchMake && matchFuel && matchTransmission && matchPrice;
    });

    setFilteredData(results);
  };

  return (
    <div className='page-wrapper'>
      <Header />
      <BannerOne />
      <BrandOne />
      <SearchSection onSearch={handleSearch} resultCount={filteredData.length} />
      <ListingOne filteredData={filteredData} />
      <WelcomeSection />
      <AboutOne />
      <WhychooseOne />
      <VideoTestimonial />
      <Gallery />
      <FaqOne />
      <OurBlog />
      <Footer />
      <StrickyHeader />
    </div>
  );
};

export default Page;