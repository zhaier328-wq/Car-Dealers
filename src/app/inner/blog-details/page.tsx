import BlogDetailsMain from '@/sections/blog/BlogDetailsMain';
import Banner from '@/sections/common/Banner';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Blog Details' />
            <BlogDetailsMain />
        </>
    );
};

export default page;