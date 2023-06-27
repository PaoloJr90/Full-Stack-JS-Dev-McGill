import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import fetchCityWeatherInfo from "../common/fetchCityWeatherInfo";

const Headers = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <h1 className="text-header">Weather App</h1>

      <div className="search-box">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={state.search}
            onChange={(event) => {
              const newSearch = event.target.value;
              setState((draft) => {
                draft.search = newSearch;
              });
            }}
          />

          <button
            className={`
              search-button +
              ${
                state?.selectedCityInfo?.main?.temp > Number(20 + 273.15)
                  ? "button-warm"
                  : "button-cold"
              }
          `}
            onClick={async () => {
              const result = await fetchCityWeatherInfo(state?.search);
              debugger;
              setState((draft) => {
                draft.selectedCityInfo = result;
              });
            }}
            disabled={state?.search?.length <= 0}
          >
            Find
          </button>
        </div>
      </div>
    </>
  );
};

export default Headers;
