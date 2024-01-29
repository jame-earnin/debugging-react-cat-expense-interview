
import createClient from "openapi-fetch";
import type { paths } from "../types/cat-fact.ts";

const { GET } = createClient<paths>({ baseUrl: "https://catfact.ninja" });

export type CatFact = paths["/fact"]["get"]["responses"][200]["content"]["application/json"];
export type Breed = 'TODO'
export type Facts = 'TODO'

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

export async function getBreeds() {
    const { data, error } = await GET("/breeds", {
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


type queryOrUndefined = paths["/facts"]["get"]["parameters"]['query']
type query = NonNullable<queryOrUndefined>
export type CatFactsParams = query

export type CatFacts = paths['/facts']['get']['responses'][200]["content"]["application/json"];
export async function getCatFacts({ limit, max_length}: CatFactsParams) {
    const { data, error } = await GET("/facts", {
        mode: "cors",
        referrerPolicy: 'strict-origin-when-cross-origin',
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            query: {
                limit,
                max_length
            }
        }
    } );
    if (error) {
        throw error;
    }
    return data
}