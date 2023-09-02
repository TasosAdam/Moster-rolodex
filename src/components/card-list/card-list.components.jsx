import Card from "../card/card.components";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return <Card monster={monster} key={id} />;
    })}
  </div>
);

export default CardList;
