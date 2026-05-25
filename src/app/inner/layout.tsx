import Footer from '@/sections/common/Footer';
import Gallery from '@/sections/common/Gallery';
import Header from '@/sections/common/Header';
import StrickyHeader from '@/sections/common/StrickyHeader';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='page-wrapper'>
            <Header />
            {children}
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default layout;