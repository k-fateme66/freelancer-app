import BoxIconCategory from "./BoxIconCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsPostcard } from "react-icons/bs";
import useCategories from "../hooks/useCategories";
import Loader from "./Loader";
function SliderCategories() {
  const { isPending, categories } = useCategories();
  if (isPending) return <Loader />;
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={7}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="pb-10"
    >
      {categories.map((category) => (
        <SwiperSlide key={category.value}>
          <BoxIconCategory
            icon={
              <BsPostcard className="w-11 h-11 text-green-900 mb-5 relative z-0" />
            }
            title={category.label}
            description="۸ پروژه"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderCategories;
