import { HiMagnifyingGlass, HiArrowLeft } from "react-icons/hi2";
import Counter from "./Counter";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import {
  BsPostcard,
  BsPersonVcard,
  BsCreditCard2Front,
  BsCardChecklist,
} from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";

import BoxIcon from "./BoxIcon";
import SliderCategories from "./SliderCategories";

function HomeMain() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FBF7ED] to-[#FBF7ED00] ">
        <div className="container mx-auto max-w-screen-xl py-20 px-4 lg:px-0">
          <div className="flex items-center justify-center">
            <div className="py-3 lg:pl-14  lg:basis-1/2 w-full">
              <h2
                data-aos="fade-up"
                className="text-[2rem] mb-9 font-bold text-green-900"
              >
                بیش از ۱۰ هزار
                <br /> فریلنسر خبره منتظر شما هستند
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="w-full mb-8 border rounded-xl space-y-3 lg:space-y-0 flex md:flex-row flex-col items-center py-3 lg:pr-8 pl-3 pr-3 gap-x-4 bg-secondary-0 border-green-900"
              >
                <HiMagnifyingGlass className="w-5 h-5 text-green-900 hidden md:inline-block" />
                <input
                  className="md:flex-1 bg-transparent w-full"
                  placeholder="دنبال چی میگردی؟"
                />
                <button className="btn btn--green text-white  px-8 py-4 md:w-auto w-full">
                  جستجو
                </button>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="grid grid-cols-2 md:grid-cols-4 gap-3  items-center justify-between"
              >
                <Counter title="فریلنسر" number="700" />
                <Counter title="پروژه تمام شده" number="200" />
                <Counter title="پروژه‌های بررسی شده" number="300" />
                <Counter title="پروژه" number="1500" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="basis-1/2 bg-center bg-auto h-full relative hidden lg:block"
              style={{
                backgroundImage: `url("/img/slider51.png")`,
                height: `610px`,
              }}
            >
              <MouseParallaxContainer
                globalFactorX={0.1}
                globalFactorY={0.1}
                className="h-full"
              >
                <MouseParallaxChild
                  factorX={0.4}
                  factorY={0.3}
                  className="absolute top-10 -right-8"
                >
                  <img
                    src="/img/slider52.png"
                    alt="image"
                    className="w-4/5"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="350"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild
                  factorX={0.3}
                  factorY={0.2}
                  className="absolute bottom-0 -right-3"
                >
                  <img
                    src="/img/slider53.png"
                    alt="image"
                    className="w-3/4"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="350"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild
                  factorX={0.3}
                  factorY={0.5}
                  className="absolute bottom-32 -left-32"
                >
                  <img
                    src="/img/link3.png"
                    alt="image"
                    className="w-3/4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="350"
                  />
                </MouseParallaxChild>
              </MouseParallaxContainer>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:pr-8">
        <div className="py-14 bg-green-950/90 rounded-tr-3xl md:rounded-tl-3xl">
          <div className="container mx-auto max-w-screen-xl px-4 lg:px-0">
            <h3
              data-aos="fade-up"
              className="text-secondary-0 text-[1.7rem] font-bold text-center"
            >
              پروژه‌ی خود را سفارش دهید
            </h3>
            <p
              data-aos="fade-up"
              className="text-secondary-0/80 text-sm text-center mb-8"
            >
              دسترسی به پروفایل هزاران فریلنسر و نمونه کار
            </p>
            <div className="grid lg:grid-cols-4 grid-cols-2">
              <BoxIcon
                delay="100"
                icon={
                  <BsPostcard className="w-10 h-10 text-secondary-0 mb-5" />
                }
                title="ایجاد پروژه"
                description="با ایجاد پروژه یا مسابقه، امکان همکاری با هزاران نیروی متخصص
              را خواهید داشت."
              />
              <BoxIcon
                delay="150"
                icon={
                  <BsPersonVcard className="w-10 h-10 text-secondary-0 mb-5" />
                }
                title="انتخاب فریلنسر"
                description="می‌توانید از طریق بخش گفتگوی سایت با فریلنسرها در ارتباط باشید."
              />
              <BoxIcon
                delay="200"
                icon={
                  <BsCardChecklist className="w-10 h-10 text-secondary-0 mb-5" />
                }
                title="بررسی پیشنهاد"
                description="  با بررسی نمونه کارها، بهترین پیشنهاد را انتخاب کنید."
              />
              <BoxIcon
                delay="250"
                icon={
                  <BsCreditCard2Front className="w-10 h-10 text-secondary-0 mb-5" />
                }
                title="پرداخت مطمئن"
                description="هزینه انجام پروژه تا تایید نهایی و رضایت شما، نزد صندوق امن ما به امانت می‌ماند."
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-screen-xl py-20 px-4 lg:px-0">
          <h3 className="text-[1.7rem] font-bold" data-aos="fade-up">
            دسته‌بندی پروژه‌ها
          </h3>
          <p data-aos="fade-up" className="text-sm mb-16">
            بیش از ۱۸۰۰ مهارت الهام بگیرید
          </p>
          <SliderCategories data-aos="fade-up" data-aos-delay="250" />
        </div>
      </section>
      <section
        className="bg-left-top bg-no-repeat bg-cover py-32"
        style={{ backgroundImage: `url('/img/h5-bg.jpg')` }}
      >
        <div className="container mx-auto max-w-screen-xl px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-4 items-center justify-center">
            <div
              className="lg:basis-1/2 basis-full lg:pl-14"
              data-aos="fade-up"
            >
              <h2 className="text-[2rem] font-bold mb-8">
                استعدادهای مورد نیاز برای رشد کسب و کار خود را بیابید.
              </h2>
              <p className="pl-5 mb-8 text-secondary-900/80">
                مشاغل خود را برای میلیون ها کاربر ماهانه تبلیغ کنید. به سادگی
                افراد متخصص را برای پروژه‌ی خود پیدا کنید
              </p>
              <a href="auth" className="btn btn--green inline-block">
                ایجاد پروژه
              </a>
            </div>
            <div className="lg:basis-1/2  basis-full flex flex-col lg:flex-row lg:space-y-0 space-y-8 gap-x-8">
              <div className="basis-1/2 space-y-8">
                <div
                  className="bg-secondary-0 p-8 rounded-lg w-full text-center"
                  data-aos="zoom-in"
                >
                  <h5 className="font-bold text-3xl mb-5">تعامل مستقیم</h5>
                  <p>
                    پس از ایجاد پروژه، می‌توانید از طریق بخش گفتگوی سایت با
                    فریلنسرها در ارتباط باشید.
                  </p>
                </div>
                <div
                  className="bg-secondary-0 p-8 rounded-lg w-full text-center"
                  data-aos="zoom-in"
                >
                  <h5 className="font-bold text-5xl mb-5">۹۸%</h5>
                  <p>۹۸ درصد از مشتریان از فریلنسرهای خود راضی هستند</p>
                </div>
              </div>
              <div className="basis-1/2 ">
                <div
                  className="bg-secondary-0 p-8 rounded-lg w-full text-center text-secondary-900"
                  data-aos="zoom-in"
                >
                  <h5 className="font-bold text-3xl mb-5">۱۰۰۰K+ فریلنسر</h5>
                  <p>
                    پروژه‌های خود را به راحتی برون‌سپاری کنید و برای انجام آن‌ها
                    به بهترین شکل ممکن، نیروی متخصص استخدام کنید
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto max-w-screen-xl px-4 lg:px-0">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div className="basis-1/2">
              <img
                src="/img/h51.jpg"
                alt="image"
                className="w-full hidden md:block"
                data-aos="zoom-in"
              />
            </div>
            <div className="basis-1/2 lg:pr-16">
              <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
                بهترین فرصت‌های کاری را پیدا کنید
              </h2>
              <div
                className="flex items-start gap-x-10 mb-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="category-banner before:w-[25px] before:h-[25px] before:top-4 before:right-4 mb-9">
                  <BsPersonVcard className="w-8 h-8 text-green-900 mb-5 relative z-0" />
                </div>
                <div>
                  <h5 className="font-bold mb-3">ایجاد پروفایل حرفه‌ای</h5>
                  <p className="text-secondary-900/70">
                    خودتان را با نمونه کارها بهتر معرفی کنید
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-x-10 mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="category-banner before:w-[25px] before:h-[25px] before:top-4 before:right-4 mb-9">
                  <FaRegHandshake className="w-8 h-8 text-green-900 mb-5 relative z-0" />
                </div>
                <div>
                  <h5 className="font-bold mb-3">تعامل با کارفرما</h5>
                  <p className="text-secondary-900/70">
                    با ارسال پیشنهاد به پروژه‌ها کسب درآمد کنید.
                  </p>
                </div>
              </div>
              <div
                className="flex items-start gap-x-10 mb-5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="category-banner before:w-[25px] before:h-[25px] before:top-4 before:right-4 mb-9">
                  <BsCreditCard2Front className="w-8 h-8 text-green-900 mb-5 relative z-0" />
                </div>
                <div>
                  <h5 className="font-bold mb-3">صندوق امن</h5>
                  <p className="text-secondary-900/70">
                    هزینه انجام پروژه از صندوق امن برداشت خواهید کرد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeMain;
