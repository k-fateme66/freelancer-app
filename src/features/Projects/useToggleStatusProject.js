import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toggleProjectStatusApi } from "../../services/projectsService"
import toast from "react-hot-toast";

export default function useToggleStatusProject() {
    const queryClient = useQueryClient()
    const { isPending: isUpdataing, mutate: toggleStatusProject } = useMutation({
        mutationFn: toggleProjectStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ["owner-projects"] })
        },
        onError: (error) => {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    });

    return { isUpdataing, toggleStatusProject }
};