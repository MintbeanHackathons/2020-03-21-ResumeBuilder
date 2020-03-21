import React from "react";
import "./button.scss";

export default function Button(props) {

  const {back, textNext} = props

  return (
    <div className="button">
      <button type="button" className="button__back" onClick={back}>Back</button>
      <button type="submit" className="button__submit">{textNext}</button>
    </div>
  );
}
