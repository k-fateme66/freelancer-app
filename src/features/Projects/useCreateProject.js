import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useCreateProject() {
    const queryClient = useQueryClient();
    const { isPending: isCreating, mutate: creatProject } = useMutation({
        mutationFn: createProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ["owner-projects"] })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
    })

    return { isCreating, creatProject }
}