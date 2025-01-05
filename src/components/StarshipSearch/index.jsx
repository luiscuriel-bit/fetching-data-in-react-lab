import { useState } from "react";

const StarshipSearch = ({ searchStarship, numResults }) => {
    const [query, setQuery] = useState('');
    const [prevSearchTerm, setPrevSearchTerm] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setPrevSearchTerm(query);
        searchStarship(query);
        setQuery('');
    };

    const resetSearch = event => {
        // document.getElementById('query').value = '';
        // document.getElementById('searchBtn').click();
        setPrevSearchTerm('');
        searchStarship('');
        setQuery('');
    };

    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Term" name="query" id="query" value={query} onChange={event => setQuery(event.target.value)} />
                <button id="searchBtn" type="submit">Search</button>
                {prevSearchTerm && <button type="reset" onClick={resetSearch}>Show all starships</button>}
            </form>
            <h2>Starships</h2>
            <div className="search-meta">
                <p>Number of results: {numResults}</p>
                <strong>
                    <p>{prevSearchTerm ? `Last search: ${prevSearchTerm}` : 'Search for a starship by name.'}</p>
                </strong>
            </div>
        </div>
    );
};

export default StarshipSearch;