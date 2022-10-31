import { Box, Chip, IconButton, Stack } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useInterval } from "../../common/hooks/useInterval";
import SaveIcon from "@mui/icons-material/Save";
import "./style.scss";
const getTime = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};
const DELAY = 120000;
export default function Notes() {
  const [text, settext] = useState("");
  const [statusText, setStatusText] = useState(
    "Notes will be cleared if you clear browser cache"
  );
  const saveText = useCallback(() => {
    localStorage.setItem("n1", text);
    setStatusText(`Saved note today at ${getTime()}`);
  }, [text]);
  useEffect(() => {
    settext(localStorage.getItem("n1") || "");
   
  }, []);
  useEffect(() => {
    window.addEventListener("beforeunload", saveText);
    return () => {
      saveText();
      window.removeEventListener("beforeunload", saveText);
    };
  }, [saveText]);
  const onTextChange = useCallback((evt) => {
    settext(evt.target.value);
  }, []);

  useInterval(() => {
    saveText();
  }, DELAY);


  return (
    <Box className="notes-wrapper">
      <textarea
        value={text}
        onChange={onTextChange}
        className="notes-text"
        placeholder="Enter notes"
        rows="20"
      />
      <Stack className="status-chip" direction="row">
        <Chip label={statusText} />
        <IconButton
          color="primary"
          aria-label="save now"
          component="label"
          onClick={saveText}
        >
          <SaveIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
