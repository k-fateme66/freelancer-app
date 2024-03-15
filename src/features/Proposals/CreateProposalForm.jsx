import React from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useCreateProposal } from "./useCreateProposal";
import Loader from "../../ui/Loader";

function CreateProposalForm({ projectId, onclose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createProposal, isCreating } = useCreateProposal();
  const onSubmit = (data) => {
    const newProposal = { ...data, projectId };
    console.log(newProposal);
    createProposal(newProposal, {
      onSuccess: () => {
        onclose();
        reset();
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-right">
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        errors={errors}
        requierd
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="زمان"
        name="duration"
        register={register}
        errors={errors}
        type="number"
        requierd
        validationSchema={{
          required: "زمان ضروری است",
        }}
      />
      <TextField
        label="هزینه"
        name="price"
        register={register}
        errors={errors}
        type="number"
        requierd
        validationSchema={{
          required: "هزینه ضروری است",
        }}
      />
      {isCreating ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}

export default CreateProposalForm;
