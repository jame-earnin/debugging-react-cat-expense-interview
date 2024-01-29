import { useQuery } from "@tanstack/react-query";
import { getCatFact } from "../../services/catService.ts";
import { useEffect } from "react";

interface Props {
    open: boolean
}
export function useCatFact({ open }: Props) {
    const query = useQuery({
        enabled: false,
        queryKey: ['cat-fact'],
        queryFn: () => getCatFact(),
    })

    useEffect(() => {
        if (open) {
            query.refetch()
        }
    }, [query, open]);
    return query
}