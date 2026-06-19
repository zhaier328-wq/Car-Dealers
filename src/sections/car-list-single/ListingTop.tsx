import React from 'react';
import { listingData } from '@/all-content/listing/Lictingdata';

interface ListingTopProps {
    carId: string;
}

const ListingTop: React.FC<ListingTopProps> = ({ carId }) => {
    const car = listingData.find(item => item.id === parseInt(carId));

    if (!car) {
        return (
            <div className="listing-single__top">
                <h3 className="listing-single__title">Car Not Found</h3>
            </div>
        );
    }

    return (
        <div className="listing-single__top">
            <div className="listing-single__top-left">
                <h3 className="listing-single__title">{car.title}</h3>  {/* ✅ Dynamic */}
                <p className="listing-single__sub-title">{car.brand} — {car.transmission} Transmission</p>  {/* ✅ Dynamic */}
                <div className="listing-single__car-details-box">
                    <ul className="list-unstyled listing-single__car-details">
                        <li>
                            <span className="icon-date"></span>
                            <p>2025</p>
                        </li>
                        <li>
                            <span className="icon-mileage"></span>
                            <p>{car.mileage}</p>  {/* ✅ Dynamic */}
                        </li>
                        <li>
                            <span className="icon-Carrier"></span>
                            <p>{car.transmission}</p>  {/* ✅ Dynamic */}
                        </li>
                        <li>
                            <span className="icon-fuel-type"></span>
                            <p>{car.fuel}</p>  {/* ✅ Dynamic */}
                        </li>
                    </ul>
                    <ul className="list-unstyled listing-single__car-details">
                        <li>
                            <span className="icon-seat"></span>
                            <p>{car.persons} seats</p>  {/* ✅ Dynamic */}
                        </li>
                        <li>
                            <span className="icon-door"></span>
                            <p>4 Doors</p>
                        </li>
                        <li>
                            <span className="icon-fuel-type"></span>
                            <p>2.5L</p>
                        </li>
                        <li>
                            <span className="icon-car-insurance"></span>
                            <p>{car.package} Package</p>  {/* ✅ Dynamic */}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="listing-single__top-right">
                <div className="listing-single__tag">
                    <a href="#">Share <span className="icon-arrow-up-from"></span> </a>
                    <a href="#">Save <span className="icon-bookmark"></span> </a>
                    <a href="#">Compare <span className="icon-compress"></span> </a>
                </div>
                <h2 className="listing-single__price">${car.pricePerDay}/day</h2>  {/* ✅ Dynamic */}
                <div className="listing-single__offer-price">
                    <div className="icon">
                        <span className="icon-tag-2"></span>
                    </div>
                    <div className="text">
                        <p>Min Age: {car.minAge}</p>  {/* ✅ Dynamic */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingTop;