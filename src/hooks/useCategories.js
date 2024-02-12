import { useQuery } from "@tanstack/react-query"
import { getCatgoryList } from "../services/categoryService"

export default function useCategories() {
    const { isPending, data } = useQuery({
        queryKey: ["categories"],
        queryFn: getCatgoryList
    })

    const { categories: rawCategories = [] } = data || {}
    const categories = rawCategories.map((item) => ({
        label: item.title,
        value: item._id
    }))


    return { isPending, categories }
}