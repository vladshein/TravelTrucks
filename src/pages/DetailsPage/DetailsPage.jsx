import { NavLink, Outlet } from "react-router-dom";

const Details = () => {
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
