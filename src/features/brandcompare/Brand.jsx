import { Box, Paper, TextField } from '@mui/material'
import React, { useMemo } from 'react'
const calc = (w, p) => (w / p).toFixed(2);
export default function Brand({ id, brand,
    weightUnits,
    price,
    onUpdate
}) {
    const calculation = useMemo(() => calc(weightUnits, price), [weightUnits, price]);



    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Paper elevation={2} sx={{ flexGrow: 1, p: 4, m: 4 }}>
                <div>
                    <TextField id="inpBrand" label="Brand" variant="standard" value={brand} onChange={(evt) => onUpdate('brand', id, evt.currentTarget.value)} />
                </div>
                <div>

                    <TextField type="number" id="inpWeightUnits" label="Weight Units" variant="standard" value={weightUnits} onChange={(evt) => onUpdate('weightUnits', id, evt.currentTarget.value)} />
                    <TextField type="number" id="inpPrice" label="Price" variant="standard" value={price} onChange={(evt) => onUpdate('price', id, evt.currentTarget.value)} />
                </div>
                <TextField type="number" id="inpPricePerUnit" label="Price per unit" variant="standard" value={calculation} />
            </Paper >
        </Box>
    )
}
