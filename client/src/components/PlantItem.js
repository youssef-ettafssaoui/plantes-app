import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="home-plant-item" onClick={() => handleClick}>
      <span className="home-plant-item-price">{price}€</span>
      <img
        className="home-plant-item-cover"
        src={cover}
        alt={`${name} cover`}
      />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
