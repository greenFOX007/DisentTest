import { useEffect, useState } from "react";
import "./CountriesList.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Spiner } from "../Spiner/Spiner";
import { DetailModal } from "../Modal/DetailModal";

export const CountriesList = () => {
  const [countriesData, setCountriesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch("https://restcountries.com/v3.1/all");

      const json = await response.json();

      setCountriesData(json);
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    });
  }, []);

  const handleClick = (e) => {
    setIsModalOpen(true);
    setModalItem(e.target.id);
  };

  return (
    <>
      {isLoading && (
        <div className="container">
          <Spiner />
        </div>
      )}
      {!isLoading && !isError && (
        <ListGroup>
          {countriesData &&
            countriesData.map((item, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  id={index}
                  className="list-item"
                  action
                  variant="primary"
                  onClick={handleClick}
                >
                  {item.name.common}
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      )}
      {!countriesData && !isError && !isLoading && (
        <div className="error-txt">The list is empty</div>
      )}
      {isError && (
        <div className="error-txt">Oops, something went wrong...</div>
      )}

      {isModalOpen && (
        <DetailModal
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
          data={countriesData[modalItem]}
        />
      )}
    </>
  );
};
