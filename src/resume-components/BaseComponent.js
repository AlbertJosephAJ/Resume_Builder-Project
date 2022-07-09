import React from "react";
import "./BaseComponent.css";
import InnerComponent from "./InnerComponent";

const BaseComponent = (props) => {
  const heading = props.heading;
  const string = props.value;
  const arr = string.split(",");
  const arr_obj = [];
  for (let i of arr) {
    let name = "";
    let description = "";
    let flag = 0;
    for (let j = 0; j < i.length; j++) {
      if (i[j] === "(") {
        flag = 1;
        continue;
      }
      if (!flag && i[j] !== ")") {
        name += i[j];
      } else if (flag && i[j] !== ")") {
        description += i[j];
      }
    }
    let ob = {};
    ob.key = i;
    ob.name = name;
    ob.description = description;
    arr_obj.push(ob);
  }
  //console.log(arr_obj)
  return (
    <div className="base_second">
      <div>
        <h2 className="light">{heading}</h2>
        <div>
          <div className="base_third">
            {arr_obj.map((currObj) => (
              <InnerComponent key={currObj.key} obj={currObj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseComponent;
