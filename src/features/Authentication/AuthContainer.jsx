import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFrom from "./CheckOTPFrom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues } = useForm();
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            isSendingOtp={isSendingOtp}
            register={register}
            onSubmit={handleSubmit(sendOtpHandler)}
          />
        );
      case 2:
        return (
          <CheckOTPFrom
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
            onReSendOtp={sendOtpHandler}
          />
        );
      default:
        null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}
