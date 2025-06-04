import { NavLink, Outlet, useParams } from "react-router-dom";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

const Details = () => {
  const { catalogId } = useParams();
  console.log("TruckId", catalogId);
  const visibleTrucks = useSelector(selectFilteredContacts);
  let truck = {};
  if (visibleTrucks) {
    console.log(visibleTrucks);
    truck = visibleTrucks[catalogId - 1];
     console.log("Truck", truck);
  }

  console.log("Truck", truck);
  return (
    <div>
      <p>Details</p>
      <ul>
        <li>
          <NavLink to="features">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">review</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Details;
