import { Outlet } from "react-router-dom";
import styles from "./CatalogPage.module.css";
import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters";

const CatalogPage = () => {
  return (
    <div className={styles.catalogContainer}>
      <Location />
      <Filters />
    </div>
  );
};

export default CatalogPage;
