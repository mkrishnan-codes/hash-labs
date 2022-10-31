import { Room } from "@mui/icons-material";
import {  Stack } from "@mui/material";
import React from "react";
import { ItineraryWrapper } from "./ItineraryWrapper";
import { TextAndSubtext } from "./TextAndSubtext";

export const Activity = ({ text, subtext, id }) => {
  return (
    <ItineraryWrapper text={text} subtext={subtext} id={id}>
      <Stack direction="row" alignItems="center">
          <Room />
        <TextAndSubtext text={text} subtext={subtext} />
      </Stack>
    </ItineraryWrapper>
  );
};
