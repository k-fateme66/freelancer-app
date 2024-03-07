import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const onSubmit = async (data) => {
    const newData = {
      name: data.name,
      email: data.email,
      role: data.role,
    };
    try {
      const { user, message } = await mutateAsync(newData);
      toast.success(message);
      if (!user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex  justify-center pt-10">
      <div className="w-full sm:max-w-sm space-y-8">
        <h1 className="text-center font-bold text-xl">تکمیل اطلاعات کاربری</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <TextField
            label="نام نام‌خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام نام‌خانوادگی ضروری است",
              minLength: {
                value: 6,
                message: "نام نام‌خانوادگی بیشتر از 6 کاراکتر میباشد",
              },
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            type="text"
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش الزامی است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ثبت
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
