import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import Loader from "../../ui/Loader";

function CheckOTPFrom({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(90);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({
        phoneNumber,
        otp,
      });
      // در این قسمت همراه اطلاعات کاربر رفرش توکن و اکسس توکن ارسال میشه و در
      //(http only)
      // ذخیره میشه از طریق بک اند
      toast.success(message);
      console.log(user);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status === 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (time) clearInterval(timer);
    };
  }, [time]);
  return (
    <form className="space-y-8" onSubmit={checkOtpHandler}>
      <div className="flex justify-between items-center">
        <p className="font-bold ">کد تایید را وارد کنید</p>
        <button onClick={onBack} type="button">
          <HiArrowLeft />
        </button>
      </div>
      <div className="flex justify-center">
        {time > 0 ? (
          <span className="text-center py-2 px-3 bg-slate-300 rounded-lg text-secondary-600 inline-block">
            {time} ثانیه تا ارسال مجدد کد
          </span>
        ) : (
          <button
            className="btn btn--secondary text-sm bg-secondary-500"
            onClick={onResendOtp}
          >
            ارسال مجدد کد اعتبارسنجی
          </button>
        )}
      </div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse gap-x-2  justify-center"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          border: "1px solid rgb(var(--color-primary-900))",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
          color: "rgb(var(--color-secondary-700))",
        }}
      />
      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}

      {otpResponse && (
        <div className="flex items-center">
          <p className="text-xs font-bold text-secondary-500">
            {otpResponse?.message}
          </p>
          <button onClick={onBack}>
            <HiOutlinePencil className="w-4 h-4 text-primary-700" />
          </button>
        </div>
      )}
    </form>
  );
}

export default CheckOTPFrom;
