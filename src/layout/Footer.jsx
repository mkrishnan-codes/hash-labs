import { Typography } from '@mui/material'
import React from 'react'
// const fabStyle = {
//     position: 'fixed',
//     bottom: 5,
//    width:'100%'
// };
export default function Footer() {
    return (
        <div style={{
            display: 'flex', position: 'fixed',
            bottom: 0, justifyContent: 'center', width: '100%'
        }}>
            <Typography variant="overline"  color={ (theme) => theme.palette.grey[500]}>
            &#10024; Made in Bengaluru, India with &#128155; and &#9749;
            </Typography>
        </div>
    )
}
