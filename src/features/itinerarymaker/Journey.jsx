import { Commute } from "@mui/icons-material";
import {  Stack } from "@mui/material";
import React from "react";
import { ItineraryWrapper } from "./ItineraryWrapper";
import { TextAndSubtext } from "./TextAndSubtext";

export const Journey = ({ text, subtext, id }) => {
  return (
    <ItineraryWrapper text={text} subtext={subtext} id={id}>
      <Stack direction="row" alignItems="center">
          <Commute />
        <div className="journey-line"></div>
        <TextAndSubtext text={text} subtext={subtext} />
      </Stack>
    </ItineraryWrapper>
  );
};
