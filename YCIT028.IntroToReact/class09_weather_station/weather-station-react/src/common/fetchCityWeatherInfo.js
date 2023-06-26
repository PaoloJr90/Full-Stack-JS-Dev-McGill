const fetchCityWeatherInfo = async (city) => {
  const rawResult = await fetch(
    `${process.env.REACT_APP_OPEN_WEATHER_API_URL}?appid=${process.env.REACT_APP_OPEN_WEATHER_API_TOKEN}&q=${city}`
  );
  // console.log(rawResult);
  // const textResult = await rawResult.text();
  // console.log(textResult);
  // const parsedResult = JSON.parse(textResult);
  // console.log(parsedResult);

  const result = await rawResult.response.json();
  // console.log(result);
  return result;
};

export default fetchCityWeatherInfo;
