import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const Loader = ({ label }) => {
    return (
        <Box sx={{ flexGrow: 1, p: 2, textAlign: "center" }}>
            <CircularProgress color="primary" />
            <Typography variant="body1" gutterBottom>
                {label}
            </Typography>
        </Box>
    );
}

export default Loader;
