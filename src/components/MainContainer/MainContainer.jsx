import { CountriesList } from "../CountriesList/CountriesList";
import "./MainContainer.css";

export const MainContainer = () => {
  return (
    <div className="main-container">
      <h2 className="list-title">Countries</h2>
      <CountriesList />
    </div>
  );
};
