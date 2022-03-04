import React from "react";
import {useDispatch, useSelector} from "react-redux";
import BandInput from "./BandInput";
import {bandAdded} from "./bandsSlice";
import Band from "./Band";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();

  const handleBandSubmit = (text) => {
    dispatch(bandAdded(text));
  }

  return (<div>
    BandsContainer
    <BandInput onBandSubmit={handleBandSubmit} />
    <ul>
      {bands.map((band) => {
        return <Band name={band} key={band}></Band>
      })}
    </ul>
    </div>);
}

export default BandsContainer;
