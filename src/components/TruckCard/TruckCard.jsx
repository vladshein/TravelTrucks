import css from "./TruckCard.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactOp } from "../../redux/contactsOps";

const TruckCard = ({
  data: { id, name, number, gallery, price, description },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactOp(id));
  };

  return (
    <div className={css.container}>
      <div>
        <img className={css.imageItem} src={gallery[0].original} alt="" />
      </div>

      <div className={css.cardDescription}>
        <div className={css.firstLine}>
          <h2>{name}</h2>
          <div className={css.firstLineEnd}>
            <h2 className={css.firstLineText}>€{price}</h2>
            <svg width="24" height="24">
              <use href={"/camper_trucks.svg#Property-1Default"}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
