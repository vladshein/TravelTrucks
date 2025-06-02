import { useId } from "react";
import css from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBar = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(addFilter(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor={searchId}> Location</label>
      <input
        className={css.searchbar}
        type="text"
        value={value}
        onChange={handleChange}
        id={searchId}
        placeholder="Kyiv,Ukraine"
      />
    </div>
  );
};

export default SearchBar;
