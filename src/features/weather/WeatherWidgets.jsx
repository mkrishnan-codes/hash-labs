import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Air, Opacity, WbSunny } from '@mui/icons-material';
import WeatherIcon from './WeatherIcon';

const WeatherWidgets = ({name,sys,weather,main, wind}) => {
    const temp = main ? `${main.temp}°C` : ""

    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} variant="outlined">
                        <Box sx={{ flexGrow: 1, p: 2, textAlign: "center" }}>
                            <Typography variant="h4" gutterBottom component="div">
                                {name},{sys.country}
                            </Typography>
                            <Box sx={{ flexGrow: 1, p: 4 }}>
                                <Typography variant="h5" gutterBottom component="div">
                                    {weather[0].description}
                                </Typography>
                                <WeatherIcon name={weather[0].main} />
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
                                    <ListItemText primary={temp} secondary={`Feels like ${main.feels_like}°C`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Opacity />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${main.humidity}%`} secondary="Humidity" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Air />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${wind.speed}m/s`} secondary="Wind" />
                                </ListItem>
                            </List>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WeatherWidgets;
