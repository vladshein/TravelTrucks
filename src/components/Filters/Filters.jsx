import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import style from "./Filters.module.css";
import { addFilter, selectFilter } from "../../redux/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(addFilter(filter));
  };

  const filters = useSelector(selectFilter);

  const handleClick = () => {};

  // const handleFilterChange = element => {
  //   console.log("Button pressed", element);
  //   // element.classList.toggle("active");
  //   const dispatch = useDispatch();
  // };

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
          <li
            className={clsx(style.filterItem, {
              [style.active]: filters.ac,
            })}
            onClick={() => handleFilterChange({ ac: !filters.ac })}
          >
            <svg width="32" height="32">
              <use href={"/icons.svg#wind"}></use>
            </svg>
            <p className={style.filterCardText}>AC</p>
          </li>
          <li
            className={style.filterItem}
            onClick={() =>
              handleFilterChange({ automatic: !filters.automatic })
            }
          >
            <svg width="32" height="32">
              <use href={"/icons.svg#diagram"}></use>
            </svg>
            <p className={style.filterCardText}>Automatic</p>
          </li>
          <li
            className={style.filterItem}
            onClick={() => handleFilterChange({ kitchen: !filters.kitchen })}
          >
            <svg width="32" height="32">
              <use href={"/icons.svg#cup-hot"}></use>
            </svg>
            <p className={style.filterCardText}>Kitchen</p>
          </li>
          <li
            className={style.filterItem}
            onClick={() => handleFilterChange({ tv: !filters.tv })}
          >
            <svg width="32" height="32">
              <use href={"/icons.svg#tv"}></use>
            </svg>
            <p className={style.filterCardText}>TV</p>
          </li>
          <li
            className={style.filterItem}
            onClick={() => handleFilterChange({ bath: !filters.bath })}
          >
            <svg width="32" height="32">
              <use href={"/icons.svg#shower"}></use>
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
              <use href={"/icons.svg#bi_grid-1x2"}></use>
            </svg>
            <p className={style.filterCardText}>Van</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/icons.svg#bi_grid"}></use>
            </svg>
            <p className={style.filterCardText}>Fully Integrated</p>
          </li>
          <li className={style.filterItem} onClick={handleClick}>
            <svg width="32" height="32">
              <use href={"/icons.svg#bi_grid-3x3-gap"}></use>
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
