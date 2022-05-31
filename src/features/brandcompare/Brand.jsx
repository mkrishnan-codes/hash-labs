import { Grid, Paper, TextField } from '@mui/material'
import React, { useCallback } from 'react'
export default function Brand({ id, brand,
    weightUnits,
    price,
    onUpdate,
    pricePerUnit
}) {
    const sendPayload = useCallback((attr, value) => {
        const payload = { weightUnits, price, id, pricePerUnit, brand };
        onUpdate({ ...payload, [attr]: value });
    }, [weightUnits, price, id, pricePerUnit, onUpdate, brand])

    return (

        <Paper elevation={2} sx={{ p: 4, m: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField fullWidth id="inpBrand" label="Brand" placeholder="Eg: Unilever" variant="standard" value={brand} onChange={(evt) => sendPayload('brand', evt.currentTarget.value)} />

                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="number" id="inpWeightUnits" label="Weight Units" variant="standard" value={weightUnits} onChange={(evt) => sendPayload('weightUnits', evt.currentTarget.value)} />

                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="number" id="inpPrice" label="Price" variant="standard" value={price} onChange={(evt) => sendPayload('price', evt.currentTarget.value)} />

                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth type="number" id="inpPricePerUnit" label="Price per unit" variant="filled" contentEditable={false} value={pricePerUnit} />

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