"use client";
import React from 'react';
import review1 from "../../../public/assets/images/shop/review-1-1.jpg"
import review2 from "../../../public/assets/images/shop/review-1-2.jpg"
import Image from 'next/image';
import { listingData } from '@/all-content/listing/Lictingdata';  // ✅ Added

interface ListingBottomLeftProps {
    carId: string;  // ✅ Added
}

const ListingBottomLeft: React.FC<ListingBottomLeftProps> = ({ carId }) => {  // ✅ Added prop
    const car = listingData.find(item => item.id === parseInt(carId));  // ✅ Added

    if (!car) {
        return (
            <div className="col-xl-8 col-lg-7">
                <div className="listing-single__bottom-left">
                    <h3>Car Not Found</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="col-xl-8 col-lg-7">
            <div className="listing-single__bottom-left">
                <div className="listing-single__car-overview">
                    <h3 className="listing-single__car-overview-title">Car Overview</h3>
                    <div className="listing-single__car-overview-points-box">
                        <ul className="list-unstyled listing-single__car-overview-point">
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-car1"></i>
                                    <p>Body</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>SUV</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-mileage"></i>
                                    <p>Mileage</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>{car.mileage}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-fuel-type"></i>
                                    <p>Fuel Type</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>{car.fuel}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-date"></i>
                                    <p>Year</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>2025</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-Carrier"></i>
                                    <p>Transmission</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>{car.transmission}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-test-drive"></i>
                                    <p>Package</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>{car.package}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                        </ul>
                        <ul className="list-unstyled listing-single__car-overview-point">
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-avatar"></i>
                                    <p>Min Age</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>{car.minAge}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-engine"></i>
                                    <p>Engine Size</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>4.5</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-door"></i>
                                    <p>Door</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>4 Doors</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-range"></i>
                                    <p>Price/Day</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>${car.pricePerDay}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-color"></i>
                                    <p>Color</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>Blue, Gold, Red</p>
                                </div>
                            </li>
                            <li>
                                <div className="listing-single__car-overview-point-left">
                                    <i className="icon-seat"></i>
                                    <p>Seats</p>
                                </div>
                                <div className="listing-single__car-overview-point-right">
                                    <p>{car.persons}</p>  {/* ✅ Dynamic */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listing-single__description">
                    <h3 className="listing-single__description-title">Description</h3>
                    <p className="listing-single__description-text-1">
                        The {car.title} by {car.brand} features {car.transmission} transmission, 
                        {car.fuel} fuel type, and accommodates up to {car.persons} passengers. 
                        Perfect for drivers aged {car.minAge} and above, this vehicle comes with 
                        the {car.package} package starting at ${car.pricePerDay} per day.
                    </p>  {/* ✅ Dynamic */}
                    <p className="listing-single__description-text-2">
                        Experience premium comfort and reliability with mileage of {car.mileage}. 
                        Ideal for both city driving and long-distance travel.
                    </p>  {/* ✅ Dynamic */}
                </div>
                {/* ... rest of component unchanged (features, reviews, form) ... */}
                <div className="listing-single__feature">
                    <h3 className="listing-single__feature-title">Features</h3>
                    <div className="listing-single__feature-points-box">
                        <div className="listing-single__feature-point-single">
                            <h4 className="listing-single__feature-point-title">Interior</h4>
                            <ul className="list-unstyled listing-single__feature-point">
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Air Conditioner</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Digital Odometer</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Heater</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Leather Seats</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Panoramic Moonroof</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Tachometer</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Touchscreen Display</p></div></li>
                            </ul>
                        </div>
                        <div className="listing-single__feature-point-single">
                            <h4 className="listing-single__feature-point-title">Safety</h4>
                            <ul className="list-unstyled listing-single__feature-point">
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Anti-lock Braking</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Brake Assist Child</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Safety Locks Driver</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Air Bag Power</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Door Locks</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Stability Control</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Traction Control</p></div></li>
                            </ul>
                        </div>
                        <div className="listing-single__feature-point-single">
                            <h4 className="listing-single__feature-point-title">Comfort & Convenience</h4>
                            <ul className="list-unstyled listing-single__feature-point">
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Android Auto</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Apple CarPlay</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Bluetooth</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>HomeLink</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Power Steering</p></div></li>
                                <li><div className="icon"><span className="icon-cheack"></span></div><div className="text"><p>Vanity Mirror</p></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="listing-single__review-and-comment">
                    <div className="review-one">
                        <div className="comments-area">
                            <div className="review-one__title">
                                <h3>2 Reviews</h3>
                            </div>
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb">
                                        <figure className="thumb">
                                            <Image src={review1} width={165} height={165} alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="review-one__content">
                                        <div className="review-one__content-top">
                                            <div className="info">
                                                <h2>Kevin martin <span>20 Oct, 2022 . 4:00 pm</span></h2>
                                            </div>
                                            <div className="reply-btn">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="review-one__content-bottom">
                                            <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-box">
                                <div className="comment">
                                    <div className="author-thumb">
                                        <figure className="thumb">
                                            <Image src={review2} width={165} height={165} alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="review-one__content">
                                        <div className="review-one__content-top">
                                            <div className="info">
                                                <h2>Sarah albert <span>20 Oct, 2022 . 4:00 pm</span></h2>
                                            </div>
                                            <div className="reply-btn">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="review-one__content-bottom">
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-form-one">
                        <div className="review-form-one__inner">
                            <h3 className="review-form-one__title">Add a review</h3>
                            <div className="review-form-one__rate-box">
                                <p className="review-form-one__rate-text">Rate this product?</p>
                                <div className="review-form-one__rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <form className="review-form-one__form contact-form-validated" onSubmit={(e) => e.preventDefault()}>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="review-form-one__input-box text-message-box">
                                            <textarea name="message" placeholder="Write a comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="review-form-one__input-box">
                                            <input type="text" placeholder="Your name" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="review-form-one__input-box">
                                            <input type="email" placeholder="Email address" name="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <button type="submit" className="thm-btn review-form-one__btn">Submit a review <span className="fas fa-arrow-right"></span></button>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingBottomLeft;