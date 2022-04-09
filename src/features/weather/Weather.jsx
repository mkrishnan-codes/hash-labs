import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../config/openweather';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const sample = {
    "coord": {
        "lon": 77.6729,
        "lat": 12.8985
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 306.29,
        "feels_like": 306.15,
        "temp_min": 305.21,
        "temp_max": 306.76,
        "pressure": 1013,
        "humidity": 35
    },
    "visibility": 8000,
    "wind": {
        "speed": 2.06,
        "deg": 0
    },
    "clouds": {
        "all": 40
    },
    "dt": 1649489961,
    "sys": {
        "type": 1,
        "id": 9205,
        "country": "IN",
        "sunrise": 1649464826,
        "sunset": 1649509266
    },
    "timezone": 19800,
    "id": 1277333,
    "name": "Bengaluru",
    "cod": 200
}
const Weather = () => {
    const [weatherData, setweatherData] = useState(sample);
    const [pos, setPos] = useState(null);
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setPos(position.coords);
            });
        } else {
            console.log("No location");
        }
    }
    const getWeather = async () => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${API_KEY}`)
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
            getWeather();
        }
    }, [pos]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Paper variant="outlined">{weatherData.weather[0].description}</Paper>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Paper variant="outlined" />

                </Grid>
                </Grid>
        </Box>
    );
}

export default Weather;
