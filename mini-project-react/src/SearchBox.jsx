import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3350dde3e4ed22333c9310167101ec10";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (error) {
            console.error("Error fetching the weather data:", error);
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newInfo = await getWeatherInfo();
        setCity(""); // Clear the input after fetching the weather data
        updateInfo(newInfo);
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    className="cityInput"
                /><br /><br />
                <Button variant="contained" type="submit" className="searchButton">
                    Search
                </Button>
            </form>
        </div>
    );
}
