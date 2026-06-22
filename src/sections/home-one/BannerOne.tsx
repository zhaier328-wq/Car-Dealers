"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import useGorentContext from '@/components/context/useGorentContext';
import Link from 'next/link';

interface SliderItem {
    id: number;
    titleHighlight: string;
    titleLine2: string;
    videoUrl: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        titleHighlight: "Japanese",
        titleLine2: "Cars for Sale",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
    {
        id: 2,
        titleHighlight: "Premium",
        titleLine2: "Used Cars",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
    {
        id: 3,
        titleHighlight: "Import",
        titleLine2: "Vehicles",
        videoUrl: "https://www.youtube.com/watch?v=Get7rqXYrbQ",
    },
];

const BannerOne: React.FC = () => {
    const { handleVideoClick } = useGorentContext();
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderData.map((item: SliderItem, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={`item bgImage-${item?.id} ${index === activeIndex ? `active` : ""}`}>
                                <div className="main-slider__bg" />
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__sub-title-box">
                                            <p className="main-slider__sub-title">UKA Japan Motors</p>
                                        </div>

                                        <h2 className="main-slider__title">
                                            {item.titleHighlight} <span>{item.titleLine2}</span>
                                        </h2>

                                        <p className="main-slider__sub-title-two">in Australia</p>

                                        <div className="main-slider__btn-and-video-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="/inner/about" className="thm-btn">
                                                    Read More
                                                    <span className="fas fa-arrow-right"></span>
                                                </Link>
                                            </div>

                                            <div className="main-slider__video-link">
                                                <Link
                                                    href={"#"}
                                                    onClick={(e) => handleVideoClick(e, item.videoUrl)}
                                                    className="video-popup"
                                                >
                                                    <div className="main-slider__video-icon">
                                                        <span className="icon-play-2"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </Link>
                                                <h4 className="main-slider__video-title">Watch Video</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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