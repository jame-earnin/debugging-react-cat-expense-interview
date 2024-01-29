
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

export async function GetFacts() {
    const { data, error } = await GET("/facts", {
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