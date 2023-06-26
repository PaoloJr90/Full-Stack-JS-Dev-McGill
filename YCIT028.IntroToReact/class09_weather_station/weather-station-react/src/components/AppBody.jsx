import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import temperatureConversion from "../common/temperatureConversion";

const AppBody = () => {
  const [state, setState] = useContext(AppContext);

  const temperature = temperatureConversion(
    state?.selectedCityInfo,
    state?.unitTemp
  );
  return (
    <div className="search-box">
      <div className="location-box">
        <div className="location">
          {`${state?.selctedCityInfo?.name}, ${state?.selctedCityInfo?.sys?.country}`}
        </div>
        <div className="date">{/* {dateBuilder(new Date())} */}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          <h1 className="main-Temp">{temperature?.temp}</h1>
          <small>
            {" "}
            Feels: {temperature?.feels_like}
            <br />
          </small>
          <br />
          <p className="wind">
            <span>
              <i className="fa-solid fa-wind"></i>
            </span>{" "}
            {state?.selectedCityInfo?.wind?.speed}m/s
          </p>
          <br />
          <small>Humidity {state?.selectedCityInfo?.main?.humidity}%</small>
        </div>

        <div className="weather">
          {state?.selectedCityInfo?.weather[0]?.description}
        </div>
      </div>
      <div className="convert-button-container">
        <button
          className={`
                    convert-button +
                    ${
                      state?.selectedCityInfo?.main?.temp > Number(12 + 273.15)
                        ? "button-warm"
                        : "button-cold"
                    }
                `}
          onClick={async () => {
            setState((draft) => {
              if (state?.unitTemp === "C") {
                draft.unitTemp = "F";
                return;
              }
              draft.unitTemp = "C";
            });
          }}
        >
          Convert in {state?.unitTemp === "C" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
    </div>
  );
};

export default AppBody;
