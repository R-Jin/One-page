export const getWeather = async (unit) => {
    const city = "Göteborg";
    // const city = "London";
    const key = process.env.REACT_APP_AUTH_TOKEN;
    console.log(key)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`;

    // Fetch url
    const response = await fetch(url);

    // Error handling
    if (response.status !== 200) {
        throw new Error("Could not fetch weather data");
    }

    // Receive the weather data
    const data = await response.json();

    // Format the weather data
    const formatData = format(data);
    return formatData;
};

// Format the weather data to a object
const format = (data) => ({
    min: `${Math.round(data.main.temp_min)}`,
    max: `${Math.round(data.main.temp_max)}`,
    type: data.weather[0].description,
});

export const getRandomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
};
