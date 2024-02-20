import axios from 'axios';
import { useState, useEffect } from "react";

const arrUrlPokemons = () => {
    const urlPokemons = [];
    for(let ids = 1; ids <= 50; ids++) {
        urlPokemons.push(`https://pokeapi.co/api/v2/pokemon/${ids}`);
    }

    return urlPokemons;
}

export const useFetchApi = () => {
    const urlPokemons = arrUrlPokemons();
    const [error, setError] = useState(null);
    const [dataApi, setDataApi] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        organizingEffect();
    }, [])

    const organizingEffect = async (pokebola) => {
        try {
            const result = await axios.all(urlPokemons.map(pokemon => axios.get(pokemon)))
            const updatedPokemons = result.map(response => response.data);
            setDataApi(updatedPokemons);
        } catch (err) {
            setError(err);
        } finally {
            setIsFetching(false);
        }
    }

    return { dataApi, error, isFetching }
}
