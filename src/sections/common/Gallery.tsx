"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// CRITICAL: These CSS imports are required for horizontal layout
import 'swiper/css';
import 'swiper/css/autoplay';

import { galleryData } from "@/all-content/gallery/gallaryData";

const Gallery: React.FC = () => {
    return (
        <section className="gallery-one" style={{ padding: '80px 0', overflow: 'hidden' }}>
            <div className="container">
                <div 
                    className="gallery-one__carousel" 
                    style={{ 
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    <Swiper 
                        modules={[Autoplay]}
                        spaceBetween={15}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={1000}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 15,
                            },
                            1400: {
                                slidesPerView: 7,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {galleryData.map((item) => (
                            <SwiperSlide key={item.id} style={{ height: 'auto' }}>
                                <div className="gallery-one__single">
                                    <div className="gallery-one__img" style={{ 
                                        position: 'relative',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        aspectRatio: '272/332'
                                    }}>
                                        <Image 
                                            src={item.image} 
                                            width={272} 
                                            height={332} 
                                            alt={`gallery-${item.id}`}
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'rgba(0,0,0,0.3)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                                        >
                                            <span 
                                                className="fab fa-instagram" 
                                                style={{ 
                                                    color: '#fff', 
                                                    fontSize: '32px',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                                }}
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Gallery;