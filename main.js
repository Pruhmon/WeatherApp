// main.js
import { getWeatherReport, getTemperatureMessage } from "./weatherFunction.js";

document.addEventListener("DOMContentLoaded", () => {
    const city = "Lake Titicaca";
    const temperature = 15;
    const condition = "sunny";

    const weatherReport = getWeatherReport(city, temperature, condition);
    const temperatureMessage = getTemperatureMessage(temperature);

    document.getElementById("output").textContent = `${weatherReport} ${temperatureMessage}`;
});