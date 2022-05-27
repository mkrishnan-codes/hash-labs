import {  Grid, Paper, TextField } from '@mui/material'
import React, { useMemo } from 'react'
const calc = (w, p) => p !== 0 ? (w / p).toFixed(2) : "";
export default function Brand({ id, brand,
    weightUnits,
    price,
    onUpdate
}) {
    const calculation = useMemo(() => calc(weightUnits, price), [weightUnits, price]);



    return (

        //     <Paper elevation={2} sx={{ p: 4, m: 1 }}>
        //    <Stack
        //   component="form"
        //   spacing={2}
        //   noValidate
        //   autoComplete="off"
        // >

        //                 <TextField id="inpBrand" label="Brand" variant="standard" value={brand} onChange={(evt) => onUpdate('brand', id, evt.currentTarget.value)} />
        //             <Box component="span">
        //                 <TextField type="number" id="inpWeightUnits" label="Weight Units" variant="standard" value={weightUnits} onChange={(evt) => onUpdate('weightUnits', id, evt.currentTarget.value)} />
        //                 <TextField type="number" id="inpPrice" label="Price" variant="standard" value={price} onChange={(evt) => onUpdate('price', id, evt.currentTarget.value)} />
        //             </Box>
        //             <TextField type="number" id="inpPricePerUnit" label="Price per unit" variant="standard" value={calculation} />
        //     </Stack>
        //         </Paper >
        <Paper elevation={2} sx={{ p: 4, m: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField fullWidth id="inpBrand" label="Brand" placeholder="Eg: Unilever" variant="standard" value={brand} onChange={(evt) => onUpdate('brand', id, evt.currentTarget.value)} />

                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="number" id="inpWeightUnits" label="Weight Units" variant="standard" value={weightUnits} onChange={(evt) => onUpdate('weightUnits', id, evt.currentTarget.value)} />

                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="number" id="inpPrice" label="Price" variant="standard" value={price} onChange={(evt) => onUpdate('price', id, evt.currentTarget.value)} />

                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth type="number" id="inpPricePerUnit" label="Price per unit" variant="filled" contentEditable={false} value={calculation} />

                </Grid>
            </Grid>
        </Paper >


    )
}
//  <Stack
//       component="form"
//       sx={{
//         width: '25ch',
//       }}
//       spacing={2}
//       noValidate
//       autoComplete="off"
//     >