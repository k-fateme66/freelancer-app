import { useQuery } from "@tanstack/react-query";
import { getProjrctsOwner } from "../../services/ownerService";

export function useProjectsOwner() {
  const { isLoading, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getProjrctsOwner,
    retry: false,
  });

  const { projects } = data || {};
  return { projects, isLoading };
}
