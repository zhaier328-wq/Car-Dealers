"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { galleryData } from "@/all-content/gallery/gallaryData";

const Gallery: React.FC = () => {
    return (
        <section className="gallery-one">
            <div className="gallery-one__carousel owl-theme owl-carousel">
                <Swiper modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={7}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={1000}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        492: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1000: {
                            slidesPerView: 6,
                        },
                        1200: {
                            slidesPerView: 7,
                        },
                    }}>
                    {galleryData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="item" key={item.id}>
                                <div className="gallery-one__single">
                                    <div className="gallery-one__img">
                                        <Image src={item.image} width={272} height={332} alt={`gallery-${item.id}`} />
                                        <a href={item.link}>
                                            <span className="fab fa-instagram"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
