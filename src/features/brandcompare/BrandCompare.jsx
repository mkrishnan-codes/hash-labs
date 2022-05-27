import { Box, Fab } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Brand from './Brand';
import AddIcon from '@mui/icons-material/Add';
const getBrand = (id) => ({
    id,
    brand: String.fromCharCode(97 + id),
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
            console.log(brs,"brs");
            setbrands(brs);
        },
        [brands],
    )

    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
        
                {brands.map((brnd) => <Brand key={brnd.id} {...brnd} onUpdate={onUpdate} />)}
     
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add" onClick={add}>
                    <AddIcon />
                </Fab>

            </Box>
        </Box>
    )
}

export default BrandCompare;