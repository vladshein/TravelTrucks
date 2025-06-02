import { Outlet } from "react-router-dom";

const CatalogPage = () => {
  return (
    <div>
      <h2>CatalogPage</h2>
      <Outlet />
    </div>
  );
};

export default CatalogPage;
