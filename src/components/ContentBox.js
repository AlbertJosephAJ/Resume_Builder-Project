import React, { useState } from "react";
import "./ContentBox.css";

const ContentBox = (props) => {
  const INITIAL = props.format.value;
  const [currValue, setCurrValue] = useState(props.format.value);
  const currType = props.format.type;
  const valueChangeHandler = (event) => {
    setCurrValue(event.target.value);
    props.onPersonDetailsHandler([INITIAL, event.target.value]);
  };
  return (
    <div className="wrap">
      <label className="label">{props.format.value + "*"}</label>
      {currType !== "address" ? (
        <input
          className="input"
          type={currType}
          placeholder={currValue}
          onChange={valueChangeHandler}
        />
      ) : (
        <textarea
          onChange={valueChangeHandler}
          className="textarea"
          placeholder={currValue}
          rows="4"
          cols="50"
        ></textarea>
      )}
    </div>
  );
};
export default ContentBox;
