import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../services/authService";

export default function useUsers() {
    const { isLoading, data } = useQuery({
        queryKey: ["users"],
        queryFn: getUsersApi
    })

    const { users } = data || {}
    return { isLoading, users }
}