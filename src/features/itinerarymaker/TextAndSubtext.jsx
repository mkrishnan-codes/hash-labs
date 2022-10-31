import { Typography } from "@mui/material";
import React from "react";

export const TextAndSubtext = ({ text, subtext }) => {
  return (
    <div className="txt-wrapper">
      <Typography variant="subtitle1" gutterBottom>
        {text}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {subtext}
      </Typography>
    </div>
  );
};
