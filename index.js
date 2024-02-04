import Fastify from 'fastify'
import cors from '@fastify/cors'

const catBreeds = [
    "Abyssinian",
    "Aegean",
    "American Curl",
    "American Bobtail",
    "American Shorthair",
    "American Wirehair",
    "Arabian Mau",
    "Australian Mist",
    "Asian",
    "Asian Semi-longhair",
    "Balinese",
    "Bambino",
    "Bengal",
    "Birman",
    "Bombay",
    "Brazilian Shorthair",
    "British Semi-longhair",
    "British Shorthair",
    "British Longhair",
    "Burmese",
    "Burmilla",
    "California Spangled",
    "Chantilly-Tiffany",
    "Chartreux",
    "Chausie",
    "Cheetoh",
    "Colorpoint Shorthair",
    "Cornish Rex",
    "Cymric",
    "Cyprus",
    "Devon Rex",
    "Donskoy",
    "Dragon Li",
    "Dwarf cat",
    "Egyptian Mau",
    "European Shorthair",
    "Exotic Shorthair",
    "Foldex",
    "German Rex",
    "Havana Brown",
    "Highlander",
    "Himalayan",
    "Japanese Bobtail",
    "Javanese",
    "Karelian Bobtail",
    "Khao Manee",
    "Korat",
    "Korean Bobtail",
    "Korn Ja",
    "Kurilian Bobtail",
    "LaPerm",
    "Lykoi",
    "Maine Coon",
    "Manx",
    "Mekong Bobtail",
    "Minskin",
    "Munchkin",
    "Nebelung",
    "Napoleon",
    "Norwegian Forest cat",
    "Ocicat",
    "Ojos Azules",
    "Oregon Rex",
    "Oriental Bicolor",
    "Oriental Shorthair",
    "Oriental Longhair",
    "PerFold",
    "Persian (Modern Persian Cat)",
    "Persian (Traditional Persian Cat)",
    "Peterbald",
    "Pixie-bob",
    "Raas",
    "Ragamuffin",
    "Ragdoll",
    "Russian Blue",
    "Russian White, Black and Tabby",
    "Sam Sawet",
    "Savannah",
    "Scottish Fold",
    "Selkirk Rex",
    "Serengeti",
    "Serrade petit",
    "Siamese",
    "Siberian",
    "Singapura",
    "Snowshoe",
    "Sokoke",
    "Somali",
    "Sphynx",
    "Suphalak",
    "Thai",
    "Thai Lilac",
    "Tonkinese",
    "Toyger",
    "Turkish Angora",
    "Turkish Van",
    "Ukrainian Levkoy"
]

const fastify = Fastify({
    logger: true
})

await fastify.register(cors, {
    origin: 'http://localhost:5173',
})


fastify.route({
    method: 'GET',
    url: '/breeds',
    schema: {
        // request needs to have a querystring with a `name` parameter
        querystring: {
            type: 'object',
            properties: {
                name: { type: 'string'}
            },
            required: ['name'],
        },
        // the response needs to be an object with an `hello` property of type 'string'
        response: {
            200: {
                type: 'array',
                items: { type: 'string' }
            }
        }
    },
    handler: async (request, reply) => {
        const { name } = request.query
        const length = name.length
        if (length < 3) {
            await (new Promise(resolve => setTimeout(resolve, 4000 - length * 1000)))
        }
        return catBreeds.filter(breed => breed.toLowerCase().startsWith(name.toLowerCase()))
    }
})

// Run the server!
try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    // eslint-disable-next-line no-undef
    process.exit(1)
}