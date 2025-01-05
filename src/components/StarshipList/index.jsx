import StarshipCard from "../StarshipCard";

const StarshipList = ({ displayedStarships }) => {
    return <ul>
        {
            displayedStarships.map(starship => (
                <li key={starship.url}>
                    <StarshipCard name={starship.name} starship_class={starship.starship_class} manufacturer={starship.manufacturer} model={starship.model} />
                </li>
            ))
        }
    </ul>;
};

export default StarshipList;