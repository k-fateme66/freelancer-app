import {
  BsJournalText,
  BsCalendar4Week,
  BsRocketTakeoff,
  BsCurrencyDollar,
  BsHeart,
} from "react-icons/bs";
import useProjects from "../hooks/useProjects";

function ProjectListHome() {
  // const { projects, isLoading } = useProjects();
  return (
    <section>
      <div className="container mx-auto max-w-screen-xl py-20">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h3 className="text-[1.7rem] font-bold" data-aos="fade-up">
              آخرین پروژه‌ها
            </h3>
            <p data-aos="fade-up" className="text-sm">
              ارزش خود را بدانید و پروژه هایی را بیابید که زندگی شما را واجد
              شرایط می کند
            </p>
          </div>
          <NavLink
            className="flex items-center btn gap-x-2 btn--link"
            to="projects-list"
            data-aos="fade-up"
          >
            همه پروژه‌ها
            <HiArrowLeft />
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 border border-secondary-200 hover:border-secondary-900 transition-all duration-300 rounded-lg flex items-start gap-x-6">
            <BsJournalText className="w-8 h-8 text-green-950/80" />
            <div className="flex-1">
              <h5 className="text-lg font-bold mb-2">طراحی وب سایت فروشگاهی</h5>
              <p className="text-sm text-green-600 mb-5">کارفرما</p>
              <div className="flex">
                <div className="flex items-end text-secondary-500 gap-x-2 border-l pl-3">
                  <BsCalendar4Week className=" w-4 h-4" />
                  <span className="text-sm/3 ">1401/02/03</span>
                </div>
                <div className="flex items-end text-secondary-500 gap-x-2 border-l px-3">
                  <BsRocketTakeoff className=" w-4 h-4" />
                  <span className="text-sm/3 ">3 پیشنهاد</span>
                </div>
                <div className="flex items-end text-secondary-500 gap-x-2 px-3">
                  <BsCurrencyDollar className=" w-4 h-4" />
                  <span className="text-sm/3 ">300 ریال </span>
                </div>
              </div>
            </div>
            <button className="flex p-3 rounded-full items-center justify-center border border-secondary-300 hover:text-secondary-0 hover:bg-green-500 transition-all duration-300">
              <BsHeart className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectListHome;
