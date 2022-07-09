import React, { useState } from "react";
import "./ContentBox.css";

const ContentBoxEducational = (props) => {
  const [placeholder, setPlaceholder] = useState(props.placeholder);
  const currName = props.name;
  const valueChangeHandler = (event) => {
    setPlaceholder(event.target.value);
    props.onPersonDetailsHandler([currName, event.target.value]);
  };
  return (
    <div className="wrap">
      <label className="label">{currName + "*"}</label>
      <textarea
        onChange={valueChangeHandler}
        className="textarea"
        placeholder={placeholder}
        rows="4"
        cols="50"
      ></textarea>
    </div>
  );
};
export default ContentBoxEducational;
