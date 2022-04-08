import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../config/openweather';

const Weather = () => {
    const [weatherData, setweatherData] = useState(null);
    const getWeather = async () => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setweatherData(data);
            }).catch((e) => setweatherData(e));
    }
    useEffect(() => {
        getWeather();
    }, []);
    return (
        <div>
            {JSON.stringify(weatherData)}
        </div>
    );
}

export default Weather;
