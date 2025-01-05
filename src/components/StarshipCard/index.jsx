const StarshipCard = ({name, starship_class, manufacturer, model}) => {
  return (
    <div>
        <h3>{name}</h3>
        <small>{starship_class}</small>
        <p>Manufacturer: {manufacturer}</p>
        <p>Model: {model}</p>
    </div>
  );
};

export default StarshipCard;