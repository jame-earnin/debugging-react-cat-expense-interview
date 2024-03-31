import { CatFact, getCatFact } from "../../services/catService.ts";
import { useEffect, useState } from "react";

interface Props {
    open: boolean
}
export function useCatFact({ open }: Props) {
    const [catFact, setCatFact] = useState<CatFact>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        if (open) {
            setIsLoading(true);
            getCatFact().then((data) => {
                setCatFact(data)
                console.log(catFact)
            }).catch((err) => {
                setIsError(true);
                setError(err)
                console.error(err)
            }).finally(() => {
                setIsLoading(false);
                console.log(isLoading)
            })
        }
    }, [setIsLoading, catFact, error, isLoading, open, setIsError]);

    return { data: catFact, isLoading, isError, error}
}