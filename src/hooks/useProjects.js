import { useQuery } from "@tanstack/react-query";
import { getProjrctsApi } from "../services/projectsService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
    const { search } = useLocation();
    const queryObject = queryString.parse(search);
    // const queryObject = Object.fromEntries(new URLSearchParams(search))
    const { isLoading, data } = useQuery({
        queryKey: ["projects", queryObject],
        queryFn: () => getProjrctsApi(search)
    })
    const { projects } = data || {}
    return { projects, isLoading }
}