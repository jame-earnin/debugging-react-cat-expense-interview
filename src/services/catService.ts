
import createClient from "openapi-fetch";
import type { paths } from "../types/cat-fact.ts";

const { GET } = createClient<paths>({ baseUrl: "https://catfact.ninja" });

export type Data<T extends keyof paths> = paths[T]["get"]["responses"][200]["content"]["application/json"];
export type CatFact = Data<"/fact">

export async function getCatFact() {
    const { data, error } = await GET("/fact", {
        mode: "cors",
        referrerPolicy: 'strict-origin-when-cross-origin',
        headers: {
            "Content-Type": "application/json",
        },
    } );
    if (error) {
        throw error;
    }
    return data
}


export type Breed = Data<"/breeds">