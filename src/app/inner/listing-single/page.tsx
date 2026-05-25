import CarListingSingleMain from '@/sections/car-list-single/CarListingSingleMain';
import Banner from '@/sections/common/Banner';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Listing Single' />
            <CarListingSingleMain />
        </>
    );
};

export default page;