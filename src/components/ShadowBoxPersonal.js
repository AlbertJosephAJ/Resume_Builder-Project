import React from "react";
import "./ShadowBox.css";
import ContentBox from "./ContentBox";

const ShadowBoxPersonal = (props) => {
  const newData = {};
  const onPersonDetailsHandler = (response) => {
    newData[response[0]] = response[1];
    console.log(newData);
    props.onGetDataHandler(newData);
  };
  return (
    <div className="detail">
      <div className="center">
        <h2 className="heading">PERSONAL DETAILS :-</h2>
        <ContentBox
          onPersonDetailsHandler={onPersonDetailsHandler}
          format={{ value: "NAME", type: "text" }}
        />
        <br></br>
        <ContentBox
          onPersonDetailsHandler={onPersonDetailsHandler}
          format={{ value: "CONTACT", type: "tel" }}
        />
        <br></br>
        <ContentBox
          onPersonDetailsHandler={onPersonDetailsHandler}
          format={{ value: "GITHUB", type: "url" }}
        />
        <br></br>
        <ContentBox
          onPersonDetailsHandler={onPersonDetailsHandler}
          format={{ value: "ADDRESS", type: "address" }}
        />
        <br></br>
        <ContentBox
          onPersonDetailsHandler={onPersonDetailsHandler}
          format={{ value: "EMAIL_ID", type: "email" }}
        />
        <br></br>
      </div>
    </div>
  );
};

export default ShadowBoxPersonal;
