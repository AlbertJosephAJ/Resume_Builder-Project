import React from "react";
import mail_icon from "../images/mail_icon.png";
import address_icon from "../images/address.jpg";
import "./Box.css";
import git_icon from "../images/git_icon.png";
import contact_icon from "../images/contact.png";

const Box = (props) => {
  const name = props.obj.name;
  const objective = props.obj.objective;
  const mail = props.obj.mail;
  const address = props.obj.address;
  const git_id = props.obj.git_id;
  const contact = props.obj.contact;
  return (
    <div className="flex-container">
      <div className="flex-child">
        <h1>{name}</h1>
        <p>{objective}</p>
      </div>
      <div className="flex-child">
        <img src={contact_icon} alt="Contact" width="32" height="30"></img>
        <span>{contact}</span>
        <br></br>
        <img src={mail_icon} alt="Mail" width="32" height="30"></img>
        <span>{mail}</span>
        <br></br>
        <img src={git_icon} alt="Github" width="32" height="30"></img>
        <span>{git_id}</span>
        <br></br>
        <img src={address_icon} alt="Address" width="35" height="35"></img>
        <span>{address}</span>
        <br></br>
      </div>
    </div>
  );
};

export default Box;
