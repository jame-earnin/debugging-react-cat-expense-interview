import { useQuery } from "@tanstack/react-query";
import { CatFacts, CatFactsParams, getCatFacts } from "../../services/catService.ts";
import { useEffect } from "react";


export function useCatFacts(params: CatFactsParams) {
    const query = useQuery<CatFacts, Error, CatFactsParams, [CatFactsParams]>({
        enabled: false,
        queryKey: [params],
        queryFn: ({ queryKey}) => getCatFacts(queryKey[0]),
    })
    useEffect(() => {
        query.refetch()
    }, [query, params]);
    return query
}