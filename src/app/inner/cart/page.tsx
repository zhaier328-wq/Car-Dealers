import CartMain from '@/sections/cart/CartMain';
import Banner from '@/sections/common/Banner';
import React from 'react';

const page = () => {
    return (
        <>
            <Banner breadcrumb='Cart' />
            <CartMain />
        </>
    );
};

export default page;