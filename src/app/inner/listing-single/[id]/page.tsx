import CarListingSingleMain from '@/sections/car-list-single/CarListingSingleMain';
import Banner from '@/sections/common/Banner';
import React from 'react';

interface PageProps {
    params: Promise<{ id: string }>;
}

const ListingSinglePage = async ({ params }: PageProps) => {
    const { id } = await params;

    return (
        <>
            <Banner breadcrumb='Listing Single' />
            <CarListingSingleMain carId={id} />
        </>
    );
};

export default ListingSinglePage;