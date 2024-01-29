
import createClient from "openapi-fetch";
import type { paths } from "../types/cat-fact.ts";

const { GET } = createClient<paths>({ baseUrl: "https://catfact.ninja" });


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
