export const getWeatherReport = (city, temperature, condition) => {
    return `The weather in ${city} is currently ${temperature}°C with ${condition}.`;
};

export const getTemperatureMessage = (temperature) => {
    if (temperature > 30) {
        return "It's quite hot outside, stay hydrated!";
    } else if (temperature < 10) {
        return "It's pretty cold outside, wear warm clothes!";
    } else {
        return "The weather is moderate, have a great day!";
    }
};
