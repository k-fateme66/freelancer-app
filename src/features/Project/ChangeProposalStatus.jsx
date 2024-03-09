import React from "react";
import RHSelectField from "../../ui/RHSelectField";
import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
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
function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const { id: projectId } = useParams();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-right">
      <RHSelectField
        label="وضعیت"
        name="status"
        requierd
        register={register}
        options={options}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}

export default ChangeProposalStatus;
