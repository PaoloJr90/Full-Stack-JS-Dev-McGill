const kelvinIntoCelcius = (kelvinTemp) => {
  return (Number(kelvinTemp) - 273.15).toFixed(2);
};

const celciusIntoFarenhit = (celTemp) => {
  return (Number(celTemp) * 1.8 + 32).toFixed(2);
};

const temperatureConversion = (selectedCityInfo, type = "C") => {
  const postString = type === "C" ? "°C" : "°F";
  const tempCel = kelvinIntoCelcius(selectedCityInfo?.main?.temp);
  const feels_likeCel = kelvinIntoCelcius(selectedCityInfo?.main?.feels_like);
  const temp_minCel = kelvinIntoCelcius(selectedCityInfo?.main?.temp_min);
  const temp_maxCel = kelvinIntoCelcius(selectedCityInfo?.main?.temp_max);

  if (type === "C") {
    return {
      temp: tempCel + postString,
      feels_like: feels_likeCel + postString,
      temp_min: temp_minCel + postString,
      temp_max: temp_maxCel + postString,
    };
  }

  const tempF = celciusIntoFarenhit(tempCel);
  const feels_likeF = celciusIntoFarenhit(feels_likeCel);
  const temp_minF = celciusIntoFarenhit(temp_minCel);
  const temp_maxF = celciusIntoFarenhit(temp_maxCel);

  return {
    temp: tempF + postString,
    feels_like: feels_likeF + postString,
    temp_min: temp_minF + postString,
    temp_max: temp_maxF + postString,
  };
};

export default temperatureConversion;
