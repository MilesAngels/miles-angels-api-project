import { useEffect, useState } from "react"

export default function NewFetch() {
    const [item, setItem] = useState([])

    async function getAstronomy() {
        const url = 'https://api.nasa.gov/';
        const API_KEY = import.meta.env.VITE_API_KEY;

        try {
            const response = await fetch(`${url}planetary/apod?api_key=${API_KEY}`);

            const result = await response.json();
            console.log(result)
            setItem(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAstronomy()
    }, [])



    return (
        <div>
            <h1>{item.title}</h1>
        </div>
    );
}