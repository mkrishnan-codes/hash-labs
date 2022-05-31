import { Box, Fab, Grid, Snackbar, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import Brand from './Brand';
import AddIcon from '@mui/icons-material/Add';
import HelpModal from './HelpModal';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Sort } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { add, selectBrands, sort, update } from './brandSlice';

const fabStyle = {
    position: 'fixed',
    bottom: 20,
    right: 16,
};

function BrandCompare() {
    const brands = useSelector(selectBrands);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const [openSnack, setOpenSnack] = React.useState(false);

    const doOpenSnack = useCallback(() => {
        setOpenSnack(true);
    }, [setOpenSnack]);

    const handleCloseSnack = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    }, [setOpenSnack]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);
    const onUpdate = useCallback((payload) => {
        dispatch(update(payload))
    }, [dispatch])
    const addBrand = useCallback(
        () => {
            dispatch(add())
        },
        [dispatch],
    )
    const sortBrand = useCallback(
        () => {
            dispatch(sort());
            doOpenSnack();
        },
        [dispatch, doOpenSnack],
    )


    return (
        <Box sx={{ flexGrow: 1, p: 4, position: 'relative' }}>
            <Typography variant="h5" gutterBottom component="div">
                Brand Price comparing tool
            </Typography>
            <Grid container spacing={2}>
                {brands.map((brnd) => <Grid item xs={12} md={4} lg={3} key={brnd.id}> <Brand  {...brnd} onUpdate={onUpdate} /></Grid>)}

            </Grid>
            <HelpModal open={open} handleClose={handleClose} />
            <Snackbar
                open={openSnack}
                autoHideDuration={3000}
                onClose={handleCloseSnack}
                message="Sorted (Lower price is on top now!!)"
            />
            <Box sx={{ '& > :not(style)': { m: 1 }, ...fabStyle }}>
                <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                    <QuestionMarkIcon />

                </Fab>
                <Fab color="primary" aria-label="add" onClick={sortBrand}>
                    <Sort />
                </Fab>
                <Fab color="primary" aria-label="add" onClick={addBrand}>
                    <AddIcon />
                </Fab>
            </Box>
        </Box >
    )
}

export default BrandCompare;