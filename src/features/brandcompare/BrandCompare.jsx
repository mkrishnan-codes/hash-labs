import { Box, Fab, Grid } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Brand from './Brand';
import AddIcon from '@mui/icons-material/Add';
import HelpModal from './HelpModal';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
const getBrand = (id) => ({
    id,
    brand: String.fromCharCode(97 + id),
    weightUnits: 0,
    price: 0,
    pricePerUnit: 0
}
)

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
};
function BrandCompare() {
    const [brands, setbrands] = useState([getBrand(0)]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);
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
        [brands],
    )

    return (
        <Box sx={{ flexGrow: 1, p: 4, position:'relative' }}>
            <Grid container spacing={2}>
            {brands.map((brnd) =><Grid item xs={12} md={4} lg={3} key={brnd.id}> <Brand  {...brnd} onUpdate={onUpdate} /></Grid>)}

            </Grid>
            <HelpModal open={open} handleClose={handleClose} />
            <Box sx={{ '& > :not(style)': { m: 1 }, ...fabStyle }}>
            <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                <QuestionMarkIcon />

            </Fab>
            <Fab color="primary" aria-label="add" onClick={add}>
                <AddIcon />
            </Fab>
        </Box>
        </Box>
    )
}

export default BrandCompare;