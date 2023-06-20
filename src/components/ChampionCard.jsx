import classes from "./ChampionCard.module.scss";
import PropTypes from "prop-types";

const ChampionCard = ({ champion }) => {
  return (
    <div className={classes.card}>
      <h3>{champion.name}</h3>
      <img src={champion.thumbnail} alt={champion.name} />
      <p>Classes: {champion.traits.join(", ")}</p>
      <p>Cost: {champion.cost}</p>
      <p>Health: {champion.health}</p>
      <p>Damage: {champion.damage}</p>
      <p>DPS: {champion.dps}</p>
      <p>Armor: {champion.armor}</p>
      <p>MR: {champion.mr}</p>
      <p>Speed: {champion.speed}</p>
      <p>Mana: {champion.mana}</p>
      {/* Include other properties as needed */}
    </div>
  );
};

ChampionCard.propTypes = {
  champion: PropTypes.shape({
    name: PropTypes.string,
    traits: PropTypes.arrayOf(PropTypes.string),
    cost: PropTypes.number,
    health: PropTypes.string,
    damage: PropTypes.string,
    dps: PropTypes.string,
    armor: PropTypes.string,
    mr: PropTypes.string,
    speed: PropTypes.string,
    mana: PropTypes.string,
    icon: PropTypes.string,
    thumbnail: PropTypes.string,
    // You can add more fields as needed
  }).isRequired,
};

export default ChampionCard;
