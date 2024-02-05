import React, { useState } from "react";
import TextField from "../../ui/TextField";
import InputRadio from "../../ui/InputRadio";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const handlSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ name, email, role });
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
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={handlSubmit} className="space-y-8">
          <TextField
            lable="نام نام‌خانوادگی"
            name={name}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            lable="ایمیل"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center gap-x-5 justify-center">
            <InputRadio
              label="کارفرما"
              name="role"
              id="OWNER"
              checked={role === "OWNER"}
              onChange={(e) => setRole(e.target.value)}
              value="OWNER"
            />
            <InputRadio
              label="فریلنسر"
              name="role"
              id="FREELANCER"
              checked={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
              value="FREELANCER"
            />
          </div>
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
