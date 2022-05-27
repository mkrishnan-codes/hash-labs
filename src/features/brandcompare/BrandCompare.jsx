import { Box, Fab } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Brand from './Brand';
import AddIcon from '@mui/icons-material/Add';
const getBrand = (id) => ({
    id,
    brand: "",
    weightUnits: 0,
    price: 0,
    pricePerUnit: 0
}
)
function BrandCompare() {
    const [brands, setbrands] = useState([getBrand(0)]);
    const onUpdate = useCallback((attr, id, value) => {
        let newArr = [...brands];
        newArr[id] = { ...newArr[id], [attr]: value }
        setbrands(newArr);
    }, [brands])
    const add = useCallback(
        () => {
            const brs = [...brands, getBrand(brands.length)];
            setbrands(brs);
        },
        //eslint-disable-next-line
        [],
    )

    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
        
                {brands.map((brnd) => <Brand {...brnd} onUpdate={onUpdate} />)}
     
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add" onClick={add}>
                    <AddIcon />
                </Fab>

            </Box>
        </Box>
    )
}

export default BrandCompare;