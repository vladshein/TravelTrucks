import { selectFilteredContacts } from "../../redux/contactsSlice";
import TruckCard from "../TruckCard/TruckCard";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  if (visibleContacts.length === 0) return <p>No trucks available.</p>;

  return (
    <ul className={css.list}>
      {visibleContacts.map(truck => (
        <li className={css.item} key={truck.id}>
          <TruckCard data={truck} />
          {console.log(`Item ${truck.id}`)}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
