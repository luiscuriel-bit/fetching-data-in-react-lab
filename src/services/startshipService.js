// const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL = 'https://swapi.info/api/starships';
const getStarships = async () => {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch starships');
        }

        const starships = await response.json();

        return starships;
    } catch (error) {
        console.error(error);
    }
};

export {
    getStarships,
};