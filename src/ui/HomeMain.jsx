import { HiMagnifyingGlass } from "react-icons/hi2";
import Counter from "./Counter";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import {
  BsPostcard,
  BsPersonVcard,
  BsCreditCard2Front,
  BsReceiptCutoff,
} from "react-icons/bs";
import BoxIcon from "./BoxIcon";
import SliderCategories from "./SliderCategories";
import { NavLink } from "react-router-dom";

function HomeMain() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FBF7ED] to-[#FBF7ED00] min-h-screen">
        <div className="container mx-auto max-w-screen-xl py-20">
          <div className="flex items-center">
            <div className="py-3 pl-14 pr-3 basis-1/2">
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-[2rem] mb-9 font-bold text-green-900"
              >
                بیش از ۱۰ هزار
                <br /> فریلنسر خبره منتظر شما هستند
              </h2>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                className="w- full mb-8 border rounded-xl flex items-center py-3 pr-8 pl-3 gap-x-4 bg-secondary-0 border-green-900"
              >
                <HiMagnifyingGlass className="w-5 h-5 text-green-900" />
                <input
                  className="flex-1 bg-transparent"
                  placeholder="دنبال چی میگردی؟"
                />
                <button className="btn btn--green text-white  px-8 py-4">
                  جستجو
                </button>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="150"
                className="flex items-center justify-between"
              >
                <Counter title="فریلنسر" number="700" />
                <Counter title="پروژه تمام شده" number="200" />
                <Counter title="پروژه‌های بررسی شده" number="300" />
                <Counter title="پروژه" number="1500" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
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
      <section className="pr-8">
        <div className="px-5 py-14 bg-green-950/90 rounded-tr-3xl">
          <div className="container mx-auto max-w-screen-xl">
            <h3
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-secondary-0 text-[1.7rem] font-bold text-center"
            >
              پروژه‌ی خود را سفارش دهید
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-secondary-0/80 text-sm text-center mb-8"
            >
              دسترسی به پروفایل هزاران فریلنسر و نمونه کار
            </p>
            <div className="flex justify-between">
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
                  <BsReceiptCutoff className="w-10 h-10 text-secondary-0 mb-5" />
                }
                title="بررسی پیشنهاد"
                description=" از هزاران فریلنسر پیشنهاد دریافت می‌کنید و با بررسی نمونه کارها، می‌توانید بهترین پیشنهاد را انتخاب کنید."
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
        <div className="container mx-auto max-w-screen-xl py-20">
          <h3
            className="text-[1.7rem] font-bold"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            دسته‌بندی پروژه‌ها
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-sm mb-16"
          >
            بیش از ۱۸۰۰ مهارت الهام بگیرید
          </p>
          <SliderCategories
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          />
        </div>
      </section>
      <section
        className="bg-left-top bg-no-repeat bg-cover py-20"
        style={{ backgroundImage: `url('/img/h5-bg.jpg')` }}
      >
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex items-center justify-center">
            <div className="basis-1/2 pl-14">
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
            <div className="basis-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeMain;
