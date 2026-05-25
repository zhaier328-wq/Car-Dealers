import CarsMain from '@/sections/cars/CarsMain';
import Banner from '@/sections/common/Banner';
import React from 'react';

const page: React.FC = () => {
    return (
         <>
            <Banner breadcrumb='Cars' />
            <CarsMain />
        </>
    );
};

export default page;