import style from "./Filters.module.css";
import wind from "../../images/SVG/wind.svg";
import logo from "../../images/Logo.svg";

const Filters = () => {
  const wind = "wind";
  return (
    <div>
      <p>Filters</p>
      <div className={style.filterEquipmentContainer}>
        <h3>Vehicle equipment</h3>
        <ul className={style.filterList}>
          <li className={style.filterItem}>
            <svg>
              <use href={`../../images/camper_trucks.svg.#${wind}`} />
            </svg>
            {/* <img src={wind} alt="wind" /> */}
            <p className={style.filterCardText}>AC</p>
          </li>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>Automatic</p>
          </li>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>Kitchen</p>
          </li>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>TV</p>
          </li>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>Bathroom</p>
          </li>
        </ul>
      </div>
      <div className={style.filterEquipmentContainer}>
        <h3>Vehicle type</h3>
        <ul className={style.filterList}>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>Van</p>
          </li>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>Fully Integrated</p>
          </li>
          <li className={style.filterItem}>
            <p className={style.filterCardText}>Alcove</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
