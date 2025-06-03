import style from "./Filters.module.css";

const Filters = () => {
  const handleClick = () => {
    console.log("Button pressed");
  };
  return (
    <div className={style.filtersContainer}>
      <p className={style.filtersText}>Filters</p>
      <div className={style.filterEquipmentContainer}>
        <h3>Vehicle equipment</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="2"
          viewBox="0 0 360 2"
          fill="none"
        >
          <path d="M0 1H360" stroke="#DADDE1" />
        </svg>
        <ul className={style.filterList}>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#wind"}></use>
            </svg>
            <p className={style.filterCardText}>AC</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#diagram"}></use>
            </svg>
            <p className={style.filterCardText}>Automatic</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#cup-hot"}></use>
            </svg>
            <p className={style.filterCardText}>Kitchen</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#tv"}></use>
            </svg>
            <p className={style.filterCardText}>TV</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#ph_shower"}></use>
            </svg>
            <p className={style.filterCardText}>Bathroom</p>
          </li>
        </ul>
      </div>
      <div className={style.filterEquipmentContainer}>
        <h3>Vehicle type</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="2"
          viewBox="0 0 360 2"
          fill="none"
        >
          <path d="M0 1H360" stroke="#DADDE1" />
        </svg>
        <ul className={style.filterList}>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#bi_grid-1x2"}></use>
            </svg>
            <p className={style.filterCardText}>Van</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#bi_grid"}></use>
            </svg>
            <p className={style.filterCardText}>Fully Integrated</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/camper_trucks.svg#bi_grid-3x3-gap"}></use>
            </svg>
            <p className={style.filterCardText}>Alcove</p>
          </li>
        </ul>
      </div>
      <button className={style.filtersButton} onClick={() => "/catalog/:"}>
        Search
      </button>
    </div>
  );
};

export default Filters;
