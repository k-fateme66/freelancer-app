import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPFrom from "./CheckOTPFrom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";

export default function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
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
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            isSendingOtp={isSendingOtp}
            onSendOtp={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOTPFrom
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={data}
          />
        );
      default:
        null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}
