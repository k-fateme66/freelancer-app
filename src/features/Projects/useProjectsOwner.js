import { useQuery } from "@tanstack/react-query";
import { getProjrctsOwner } from "../../services/projectsService";

export function useProjectsOwner() {
  const { isLoading, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getProjrctsOwner
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
