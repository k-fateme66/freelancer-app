import { useQuery } from "@tanstack/react-query";
import { getProjrctApi } from "../../services/projectsService";
import { useParams } from "react-router-dom";

export default function useProject() {
    const { id } = useParams()
    const { isLoading, data } = useQuery({
        queryKey: ['project', id],
        queryFn: () => getProjrctApi(id),
        retry: false,
    });

    const { project } = data || {};

    return { isLoading, project };
}