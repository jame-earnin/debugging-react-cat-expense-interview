
import createClient from "openapi-fetch";
import type { paths } from "../types/cat-fact.ts";

const { GET } = createClient<paths>({ baseUrl: "https://catfact.ninja" });

export type CatFact = any // TODO: Fix this
export type Breed = any // TODO: Fix this
export type CatFacts = any // TODO: Fix this

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

export type CatFactsParams = any // TODO Fix this
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