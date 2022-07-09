import React, { useState } from "react";
import ShadowBoxEducational from "./ShadowBoxEducational";
import ShadowBoxPersonal from "./ShadowBoxPersonal";
import "./Form.css";

const Form = (props) => {
  const [data, setData] = useState({});
  const onGetDataHandler = (response) => {
    setData((prevState) => {
      return { ...prevState, ...response };
    });
  };
  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (Object.keys(data).length < 10) {
      alert("Fill all the Required Fields");
    } else {
      props.getData(data);
      setData({});
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitEventHandler}>
        <div>
          <ShadowBoxPersonal onGetDataHandler={onGetDataHandler} />
        </div>
        <br></br>
        <br></br>
        <div>
          <ShadowBoxEducational onGetDataHandler={onGetDataHandler} />
        </div>
        <br></br>
        <div className="base">
          <div>
            <button className="button" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
