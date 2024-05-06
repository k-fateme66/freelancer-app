import BoxIconCategory from "./BoxIconCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  BsPostcard,
  BsPalette,
  BsCodeSlash,
  BsCurrencyDollar,
  BsPencilSquare,
  BsTags,
  BsHouses,
} from "react-icons/bs";
import { toPersianNumers } from "../utils/toPersianNumbers";
import React from "react";
function SliderCategories() {
  const categories = [
    {
      label: "طراحی خلاقیت",
      icon: (
        <BsPalette className="w-10 h-10 text-green-900 mb-5 relative z-0" />
      ),
      numServices: 8,
      id: 1,
    },
    {
      label: "توسعه‌ نرم‌افزار و آی‌تی",
      icon: (
        <BsCodeSlash className="w-10 h-10 text-green-900 mb-5 relative z-0" />
      ),
      numServices: 10,
      id: 2,
    },
    {
      label: "بازاریابی و فروش",
      icon: (
        <BsCurrencyDollar className="w-10 h-10 text-green-900 mb-5 relative z-0" />
      ),
      numServices: 5,
      id: 3,
    },
    {
      label: "تولید محتوا و ترجمه",
      icon: (
        <BsPencilSquare className="w-10 h-10 text-green-900 mb-5 relative z-0" />
      ),
      numServices: 14,
      id: 4,
    },
    {
      label: "مهندسی و معماری",
      icon: <BsHouses className="w-10 h-10 text-green-900 mb-5 relative z-0" />,
      numServices: 12,
      id: 5,
    },
    {
      label: "کسب‌وکار",
      icon: <BsTags className="w-10 h-10 text-green-900 mb-5 relative z-0" />,
      numServices: 6,
      id: 6,
    },
  ];
  return (
    <Swiper
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      className="pb-10 px-14 lg:px-0"
    >
      {categories.map(({ id, icon, label, numServices }) => {
        return (
          <SwiperSlide key={id}>
            <BoxIconCategory
              icon={icon}
              title={label}
              description={`${toPersianNumers(numServices)} سرویس کاربردی`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SliderCategories;
