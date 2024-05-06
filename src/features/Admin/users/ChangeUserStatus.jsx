import React from "react";
import RHSelectField from "../../../ui/RHSelectField";
import { useForm } from "react-hook-form";
import useChangeUserStatus from "./useChangeUserStatus";
import Loader from "../../../ui/Loader";
import { useQueryClient } from "@tanstack/react-query";

function ChangeUserStatus({ userId, onClose }) {
  const { register, reset, handleSubmit } = useForm();
  const { isPending, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    console.log(data);
    changeUserStatus(
      { userId, data }, // {userId, data: {status:0, 1, 2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };
  const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "در انتظار تایید",
      value: 1,
    },
    {
      label: "تایید شده",
      value: 2,
    },
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-right">
      <RHSelectField
        label="وضعیت"
        name="status"
        requierd
        register={register}
        options={options}
      />
      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}

export default ChangeUserStatus;
