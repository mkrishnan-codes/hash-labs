import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
export default function Notes() {
  const [text, settext] = useState("");
  useEffect(() => {
    settext(localStorage.getItem("n1") || "");
  }, []);
  useEffect(() => {
    return () => {
      localStorage.setItem("n1", text);
    };
  }, [text]);
  const onTextChange = useCallback((evt) => {
    settext(evt.target.value);
  }, []);

  return (
    <Box className="notes-wrapper">
      <textarea
        value={text}
        onChange={onTextChange}
        className="notes-text"
        placeholder="Enter notes"
        rows="20"
      />
    </Box>
  );
}
