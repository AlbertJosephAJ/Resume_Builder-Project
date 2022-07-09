import React from "react";
import "./InnerComponent.css";
const InnerComponent = (props) => {
  const heading = props.obj.name;
  const content = props.obj.description;
  return (
    <div>
      <div>
        <h3 className="adjust">{heading}</h3>
        <p className="adjust">{content}</p>
      </div>
    </div>
  );
};

export default InnerComponent;
