"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

interface SliderItem {
    id: number;
    bgClass: string;
}

const sliderData: SliderItem[] = [
    { id: 1, bgClass: "bgImage-1" },
    { id: 2, bgClass: "bgImage-2" },
    { id: 3, bgClass: "bgImage-3" },
];

const BannerOne: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <section className="main-slider" id='home'>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSwiper={setSwiperInstance}
                >
                    {sliderData.map((item) => (
                        <SwiperSlide key={item.id}>
                            {/* Explicit height ensures the slide is visible even without content */}
                            <div 
                                className={`item ${item.bgClass}`} 
                                style={{ 
                                    height: '100vh', 
                                    minHeight: '600px', 
                                    position: 'relative' 
                                }}
                            >
                                {/* Background image layer - restored */}
                                <div className="main-slider__bg" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="owl-nav">
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        type="button"
                        role="presentation"
                        className="owl-prev"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        type="button"
                        role="presentation"
                        className="owl-next"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>
            </div>

            {/* Bottom CTA Section - Unchanged */}
            <section style={{ background: "#0F0F1B", padding: "80px 0" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <h1 style={{
                                fontSize: "clamp(28px, 4vw, 42px)",
                                fontWeight: 800,
                                color: "#fff",
                                textTransform: "uppercase",
                                lineHeight: 1.2,
                                marginBottom: "20px"
                            }}>
                                Premium Japanese Car for Sale in Australia
                            </h1>
                            <p style={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#A1A1AA",
                                maxWidth: "700px"
                            }}>
                                At UKA Japan Motors, we offer a wide selection of premium Japanese cars for sale in Australia, including reliable used cars, fuel efficient vehicles, automatic cars, and compact Japanese small cars. Whether you're looking for a family SUV or an everyday city car, we help you find the perfect Japanese car to match your lifestyle and budget.
                            </p>
                        </div>
                        <div className="col-xl-4">
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {["Apply for Finance", "Give Us a Call", "Book a Test Drive"].map((text, i) => (
                                    <Link
                                        key={i}
                                        href="#"
                                        style={{
                                            padding: "16px 24px",
                                            background: i === 0 ? "#F5B818" : "transparent",
                                            color: i === 0 ? "#0F0F1B" : "#fff",
                                            border: "2px solid #F5B818",
                                            borderRadius: "10px",
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            textDecoration: "none",
                                            textAlign: "center",
                                            textTransform: "uppercase",
                                            transition: "all 0.3s"
                                        }}
                                    >
                                        {text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default BannerOne;