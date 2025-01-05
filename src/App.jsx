import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import * as starshipService from './services/startshipService';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [startshipsData, setStarshipsData] = useState([]);
    const [displayedStarships, setDisplayedStarships] = useState([]);

    const searchStarship = query => {
        query = query.toLowerCase();
        setDisplayedStarships(startshipsData.filter(starship => (
            starship.name.toLowerCase().includes(query) ||
            starship.model.toLowerCase().includes(query) ||
            starship.manufacturer.toLowerCase().includes(query) ||
            starship.starship_class.toLowerCase().includes(query)
        )));
    };

    useEffect(() => {
        const fetchStarships = async () => {
            const starships = await starshipService.getStarships();
            setStarshipsData(starships);
            setDisplayedStarships(starships);
        };
        fetchStarships();
    }, []);

    return !startshipsData.length ? (
        <h1>Loading...</h1>
    ) : (
        <main>
            <h1>Star Wars API</h1>
            <section>
                <StarshipSearch
                    searchStarship={searchStarship}
                    numResults={displayedStarships.length}
                />
            </section>
            <section>
                <StarshipList displayedStarships={displayedStarships} />
            </section>
        </main>
    );
};

export default App;