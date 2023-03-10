import React, { useRef } from "react";

import DiscoverContent1 from "../img/discover-content-1.png";
import DiscoverContent2 from "../img/discover-content-2.png";
import DiscoverContent3 from "../img/discover-content-3.png";
import DiscoverContent4 from "../img/discover-content-4.png";
import DiscoverContent5 from "../img/discover-content-5.png";
import DiscoverContent6 from "../img/discover-content-6.png";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

const sliderObject = [
  {
    image: DiscoverContent1,
    title: "Metabolik Kondisyon Antreman Serisi",
    numberofcourses: "7 Ders",
  },
  {
    image: DiscoverContent2,
    title: "Yeni Başlayanlar için Fitness",
    numberofcourses: "12 Ders",
  },
  {
    image: DiscoverContent3,
    title: "Yedi Beslenme Türünü Keşfet",
    numberofcourses: "14 Ders",
  },
  {
    image: DiscoverContent4,
    title: "Element Yogası Serisi",
    numberofcourses: "4 Ders",
  },
  {
    image: DiscoverContent5,
    title: "10 Günde Yağ Yak",
    numberofcourses: "10 Ders",
  },
  {
    image: DiscoverContent6,
    title: "Duruş Bozukluğuna Yönelik Egzersizler",
    numberofcourses: "11 Ders",
  },
];

const DiscoverContent = () => {
  const swiperRef = useRef();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">İyi Yaşamı Keşfet</h1>
        <span className="text-gray-600 font-medium text-sm cursor-pointer">
          Hepsini Gör
        </span>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mt-4"
        >
          {sliderObject.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer w-full h-96 [perspective:1000px]">
                <div className="relative h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full rounded-lg object-cover shadow-xl shadow-black/40"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">
                        {item.instructorname}
                      </h1>
                      <p className="text-2xl text-white">{item.title}</p>
                      <button className="mt-4 rounded-md  bg-neutral-600 py-1 px-2 text-xl hover:bg-neutral-800">
                        Keşfet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end items-center mt-2 ">
          <span className="border-2 border-gray-600 rounded-full  p-2 mr-2 cursor-pointer">
            <FaChevronLeft onClick={() => swiperRef.current?.slidePrev()} />
          </span>
          <span
            className="border-2 border-gray-600 rounded-full p-2 cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscoverContent;
