import { Button, Stack } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Activity } from "./Activity";
import { add, selectItineraries, selectPrintView } from "./itinSlice";
import { Journey } from "./Journey";
import "./itinstyle.scss";
const ITIN_TYPES = {
    ACTIVITY:"activity",JOURNEY:"journey"
}
const ItinTypeSwitcher = (props) => {
  const { type } = props;
  switch (type) {
    case ITIN_TYPES.ACTIVITY:
      return <Activity {...props} />;
    case ITIN_TYPES.JOURNEY:
      return <Journey {...props} />;
    default:
      return null;
  }
};
export default function ItineraryMaker() {
  const itineraries = useSelector(selectItineraries);
  const printView = useSelector(selectPrintView);
  const dispatch = useDispatch();

  const onAddActivity = useCallback(
    () => {
        dispatch( add({type:ITIN_TYPES.ACTIVITY, text:"Activity",subtext:"2 hours"}))
    },
    [dispatch],
  )
  const onAddJourney = useCallback(
    () => {
        dispatch( add({type:ITIN_TYPES.JOURNEY, text:"Journey",subtext:"1 hour"}))
    },
    [dispatch],
  )
  console.log(itineraries,"itineraries")
  return (
    <div className="itin-page-wrapper">
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={onAddActivity}>Add Activity</Button>
        <Button variant="outlined" onClick={onAddJourney}>Add Journey</Button>
      </Stack>
      <Stack spacing={2} direction="column">
          {itineraries.map((item) => (
            <ItinTypeSwitcher key={item.id} {...item} allowUpdation={!printView} />
          ))}
        </Stack>
    </div>
  );
}
