import React from 'react';
import ListingTop from './ListingTop';
import ListingSliders from './ListingSliders';
import ListingBottomLeft from './ListingBottomLeft';
import ListingBottomRight from './ListingBottomRight';

interface CarListingSingleMainProps {
    carId: string;  // ✅ Added
}

const CarListingSingleMain: React.FC<CarListingSingleMainProps> = ({ carId }) => {  // ✅ Added prop
    return (
        <section className="listing-single">
            <div className="container">
                <ListingTop carId={carId} />           {/* ✅ Added prop */}
                <ListingSliders carId={carId} />       {/* ✅ Added prop */}
                <div className="listing-single__bottom">
                    <div className="row">
                        <ListingBottomLeft carId={carId} />   {/* ✅ Added prop */}
                        <ListingBottomRight carId={carId} />  {/* ✅ Added prop */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarListingSingleMain;