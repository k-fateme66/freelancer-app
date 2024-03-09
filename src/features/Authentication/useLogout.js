import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { isPending, mutate: logout } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/auth', { replace: true })
        },
        onError: (err) => toast.error(err?.response?.data?.message),
    });

    return { isPending, logout }
}