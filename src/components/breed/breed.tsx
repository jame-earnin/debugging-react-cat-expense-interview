import { Input } from "../ui/input.tsx";
import { useEffect, useState } from "react";

export function Breed() {
    const [searchBreed, setSearchBreed] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [breeds, setBreeds] = useState<string[]>([]);

    useEffect(() => {
        if (searchBreed) {
            setIsLoading(true)
            fetch('http://localhost:3000/breeds?name=' + searchBreed)
                .then((response) => response.json())
                .then((data) => {
                    setBreeds(data);
                }).finally(() => {
                setIsLoading(false)
            })
        }
    }, [searchBreed]);
    return (
        <>
            <div className="flex items-center">
                <label htmlFor="counter">Breed:</label>
                <Input className="ml-2" id="breed" type="text" onChange={(e) => {
                    setSearchBreed(e.target.value)
                }} value={searchBreed}/>
            </div>
            <ul>
                {isLoading ? (
                    <li>Loading...</li>
                ) : breeds.length === 0 ? <li>No breeds found</li> : breeds.map((breed) => (
                    <li key={breed}>{breed}</li>
                ))}
            </ul>
        </>
    )
}