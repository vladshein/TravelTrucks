import css from "./TruckCard.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactOp } from "../../redux/contactsOps";

const TruckCard = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactOp(id));
  };

  return (
    <div className={css.container}>
      <div>
        <div>
          <div className={css.item}>
            <FaUser size="18" />
            {name}
          </div>
          <div className={css.item}>
            <FaPhoneAlt size="18" />
            {number}
          </div>
        </div>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TruckCard;
