import React from 'react'; 
import ListingTop from './ListingTop';
import ListingSliders from './ListingSliders';
import ListingBottomLeft from './ListingBottomLeft';
import ListingBottomRight from './ListingBottomRight';
const CarListingSingleMain: React.FC = () => {
    return (
        <section className="listing-single">
            <div className="container">
                <ListingTop />
                <ListingSliders />
                <div className="listing-single__bottom">
                    <div className="row">
                        <ListingBottomLeft />
                        <ListingBottomRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarListingSingleMain;