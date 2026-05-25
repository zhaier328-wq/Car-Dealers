import Banner from '@/sections/common/Banner';
import ProductsMain from '@/sections/products/ProductsMain';
import React from 'react';

const page: React.FC = () => {
    return (
       <>
            <Banner breadcrumb='Products' />
            <ProductsMain />
        </>
    );
};

export default page;