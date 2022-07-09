import React from "react";
import "./ShadowBox1.css";
import ContentBoxEducational from "./ContentBoxEducational";
import ContentBox from "./ContentBox";

const ShadowBoxEducational = (props) => {
  const newData = {};
  const onPersonDetailsHandler = (response) => {
    newData[response[0]] = response[1];
    console.log(newData);
    props.onGetDataHandler(newData);
  };

  return (
    <div className="detail">
      <div className="center">
        <h2 className="heading">EDUCATIONAL DETAILS :-</h2>
        <ContentBox
          onPersonDetailsHandler={onPersonDetailsHandler}
          format={{ value: "OBJECTIVE", type: "address" }}
        />
        <br></br>
        <ContentBoxEducational
          name="EDUCATION"
          placeholder="University/School_Name(Year)"
          onPersonDetailsHandler={onPersonDetailsHandler}
        ></ContentBoxEducational>
        <br></br>
        <ContentBoxEducational
          name="SKILL SET"
          placeholder={`Web Development(Skill_1/Skill_2/...),\nApp Development(Skill_1/Skill_2/...)`}
          onPersonDetailsHandler={onPersonDetailsHandler}
        ></ContentBoxEducational>
        <br></br>
        <ContentBoxEducational
          name="EXPERIENCE"
          placeholder="Company_Name(Role/Time)"
          onPersonDetailsHandler={onPersonDetailsHandler}
        ></ContentBoxEducational>
        <br></br>
        <ContentBoxEducational
          name="CERTIFICATION"
          placeholder="Course_Name(Month Year)"
          onPersonDetailsHandler={onPersonDetailsHandler}
        ></ContentBoxEducational>
        <br></br>
      </div>
    </div>
  );
};

export default ShadowBoxEducational;
