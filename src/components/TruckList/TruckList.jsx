import { selectFilteredContacts } from "../../redux/contactsSlice";
import TruckCard from "../TruckCard/TruckCard";
import css from "./TruckList.module.css";
import { useSelector } from "react-redux";

function TruckList() {
  const visibleTrucks = useSelector(selectFilteredContacts);

  if (visibleTrucks.length === 0) return <h3>No trucks available.</h3>;

  return (
    <ul className={css.list}>
      {visibleTrucks.map(truck => (
        <li className={css.item} key={truck.id}>
          <TruckCard data={truck} />
          {console.log(`Item ${truck.id}`)}
        </li>
      ))}
    </ul>
  );
}

export default TruckList;
