import { useMutation } from "@tanstack/react-query";
import { ChangeProposalStatusApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
    const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
        mutationFn: ChangeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (err) => toast.error(err?.response?.data?.message),
    });

    return { isUpdating, changeProposalStatus }
}