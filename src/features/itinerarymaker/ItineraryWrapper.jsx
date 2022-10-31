import React, { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { remove, update } from "./itinSlice";
export const ItineraryWrapper = ({
  children,
  id,
  text,
  subtext,
  allowUpdation,
}) => {
  const [open, setOpen] = useState(false);
  const [editText, setEditText] = useState(text);
  const [editSubText, setEditSubText] = useState(subtext);
  const dispatch = useDispatch();
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const updateTexts = useCallback(() => {
    dispatch(update({ id, text: editText, subtext: editSubText }));
    handleClose();
  }, [dispatch, editSubText, editText, handleClose, id]);
  const deleteItinerary = useCallback(() => {
    dispatch(remove({ id }));
  }, [dispatch, id]);

  return (
    <Stack direction="row" alignItems="center">
      {children}
      {allowUpdation && (
        <>
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={handleClickOpen}
          >
            <Edit />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={deleteItinerary}
          >
            <Delete />
          </IconButton>
        </>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Itinerary</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="txt"
            label="Itinerary Name"
            fullWidth
            variant="standard"
            value={editText}
            onChange={(evt) => setEditText(evt.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sub-txt"
            label="Itinerary Description"
            fullWidth
            variant="standard"
            value={editSubText}
            onChange={(evt) => setEditSubText(evt.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateTexts}>Update</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
