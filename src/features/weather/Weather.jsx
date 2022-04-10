import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../config/openweather';

import Loader from '../../common/Loader';
import WeatherWidgets from './WeatherWidgets';

const Weather = () => {
    const [weatherData, setweatherData] = useState(null);
    const [pos, setPos] = useState(null);
    const [loaderLabel, setLoaderLabel] = useState("Getting location");
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setPos(position.coords);
            });
        } else {
            setLoaderLabel("Please allow location to see weather");
        }
    }
    const getWeather = async () => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setweatherData(data);
            }).catch((e) => console.log(e));
    }
    useEffect(() => {
        getLocation();
    }, []);
    useEffect(() => {
        if (pos) {
            setLoaderLabel("Getting weather");
            getWeather();
        }
        // eslint-disable-next-line
    }, [pos]);
    return pos === null || weatherData === null ? <Loader label={loaderLabel} /> : (
        <WeatherWidgets {...weatherData}/>
    );
}

export default Weather;
