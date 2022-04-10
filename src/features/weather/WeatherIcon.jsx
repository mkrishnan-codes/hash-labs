import React from 'react';
import { AcUnit, Cloud, Umbrella, WbSunny } from '@mui/icons-material';

const WeatherIcon = ({ name }) => {
    const caseInsensitiveName = name.toLowerCase();
    if (caseInsensitiveName.search("cloud") > -1) {
        return <Cloud color="primary" fontSize='large' />
    }
    if (caseInsensitiveName.search("rain") > -1) {
        return <Umbrella color="primary" fontSize='large' />
    }
    if (caseInsensitiveName.search("snow") > -1) {
        return <AcUnit color="primary" fontSize='large' />
    }
    return <WbSunny color="primary" fontSize='large' />
}

export default WeatherIcon;
