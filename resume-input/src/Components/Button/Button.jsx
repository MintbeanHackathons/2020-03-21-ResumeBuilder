import React from "react";
import "./button.scss";

export default function Button(props) {

  const {back, textNext} = props

  return (
    <div className="button">
      <button className="button__button" type="submit">{textNext}</button>
      <button className="button__button" type="button" onClick={back}>Back</button>
    </div>
  );
}
