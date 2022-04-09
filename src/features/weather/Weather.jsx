import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../config/openweather';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { AcUnit, Air, Cloud, Opacity, Thermostat, Umbrella, WbSunny } from '@mui/icons-material';
const sample = {
    "coord": {
        "lon": 77.6729,
        "lat": 12.8985
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "-",
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
        "country": " ",
        "sunrise": 1649464826,
        "sunset": 1649509266
    },
    "timezone": 19800,
    "id": 1277333,
    "name": "Getting Info",
    "cod": 200
}
const WeatherIcon = ({ name }) => {
    const caseInsensitiveName = name.toLowerCase();
    if (caseInsensitiveName.search("cloud") > -1) {
        return <Cloud color="primary" fontSize='large'/>
    }
    if (caseInsensitiveName.search("rain") > -1) {
        return <Umbrella color="primary"  fontSize='large'/>
    }
    if (caseInsensitiveName.search("snow") > -1) {
        return <AcUnit color="primary"  fontSize='large'/>
    }
    return <WbSunny color="primary" fontSize='large' />
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
            getWeather();
        }
    }, [pos]);
    const temp = weatherData ? `${weatherData.main.temp}°C` : ""
    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} variant="outlined">
                        <Box sx={{ flexGrow: 1, p: 2, textAlign:"center"  }}>
                            <Typography variant="h4" gutterBottom component="div">
                                {weatherData.name},{weatherData.sys.country}
                            </Typography>
                            <Box sx={{ flexGrow: 1, p: 4}}>
                                <Typography variant="h5" gutterBottom component="div">
                                    {weatherData.weather[0].description}
                                </Typography>
                                <WeatherIcon name={weatherData.weather[0].main} />
                                <Typography variant="h5" gutterBottom component="div">
                                    {temp}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} variant="outlined" >
                        <Box sx={{ flexGrow: 1, p: 2 }}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WbSunny />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={temp} secondary={`Feels like ${weatherData.main.feels_like}°C`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Opacity />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${weatherData.main.humidity}%`} secondary="Humidity" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Air />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${sample.wind.speed}m/s`} secondary="Wind" />
                                </ListItem>
                            </List>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Weather;
