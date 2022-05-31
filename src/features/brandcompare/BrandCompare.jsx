import { Box, Fab, Grid, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Brand from './Brand';
import AddIcon from '@mui/icons-material/Add';
import HelpModal from './HelpModal';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Sort } from '@mui/icons-material';
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
    bottom: 20,
    right: 16,
};
// const sort = (needSort,arr=[],sortOn) => {
//     if(!needSort)return arr;
//     let newArray = [...arr];
//     newArray.sort((a,b) => a[sortOn] - b[sortOn])
//     return newArray;
// }
const calc = (w, p) => w !== 0 ? (p / w).toFixed(2) : "";

function BrandCompare() {
    const [brands, setbrands] = useState([getBrand(0)]);
    const [open, setOpen] = React.useState(false);
// const [sorted, setsorted] = useState(false)
    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);
    const onUpdate = useCallback((attr, id, value) => {
        let newArr = [...brands];
        const pricePerUnit = calc(newArr[id]['weightUnits'],newArr[id]['price']);
        newArr[id] = { ...newArr[id], [attr]: value,pricePerUnit }

        setbrands(newArr);
    }, [brands])
    const add = useCallback(
        () => {
            const brs = [...brands, getBrand(brands.length)];
            setbrands(brs);
        },
        [brands],
    )
    // let cals = sorted?
    // .sort((a,b) => a.last_nom - b.last_nom)
// cons
// const sortedBrands = useMemo(() => sort(sorted,brands,''), [brands,sorted])
    return (
        <Box sx={{ flexGrow: 1, p: 4, position: 'relative' }}>
            <Typography variant="h5" gutterBottom component="div">
                Brand Price comparing tool
            </Typography>
            <Grid container spacing={2}>
                {brands.map((brnd) => <Grid item xs={12} md={4} lg={3} key={brnd.id}> <Brand  {...brnd} onUpdate={onUpdate} /></Grid>)}

            </Grid>
            {/* <Box sx={{ '& > :not(style)': { m: 5 } }}>
                <Typography variant="overline" gutterBottom>
                    Made in Bangalore with &#128154;
                </Typography>
            </Box> */}

            <HelpModal open={open} handleClose={handleClose} />
            <Box sx={{ '& > :not(style)': { m: 1 }, ...fabStyle }}>
                <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                    <QuestionMarkIcon />

                </Fab>
                <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
<Sort/>
                </Fab>
                <Fab color="primary" aria-label="add" onClick={add}>
                    <AddIcon />
                </Fab>
            </Box>
        </Box >
    )
}

export default BrandCompare;