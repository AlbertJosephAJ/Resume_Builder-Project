import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Box from "./resume-components/Box";
import BaseComponent from "./resume-components/BaseComponent";

function App() {
  const [finalData, setFinalData] = useState({});
  const [_bool, setBool] = useState(true);
  const getDataHandler = (response) => {
    setFinalData((prevState) => {
      return { ...prevState, ...response };
    });
    setBool(false);
  };
  console.log(finalData);
  return (
    <div>
      {_bool === true && finalData.length !== 9 ? (
        <div className="App">
          <br></br>
          <div className="seven">
            <h1 className="head">REGISTRATION FORM</h1>
          </div>
          <br></br>
          <Form getData={getDataHandler} />
          <br></br>
        </div>
      ) : (
        <div className="App1">
          <div className="App2">
            <Box
              obj={{
                name: finalData["NAME"].toUpperCase(),
                objective: finalData["OBJECTIVE"],
                git_id: finalData["GITHUB"],
                mail: finalData["EMAIL_ID"],
                address: finalData["ADDRESS"],
                contact: finalData["CONTACT"],
              }}
            ></Box>
            <BaseComponent
              heading="EDUCATION"
              value={finalData["EDUCATION"]}
            ></BaseComponent>
            <BaseComponent
              heading="SKILL SET"
              value={finalData["SKILL SET"]}
            ></BaseComponent>
            <BaseComponent
              heading="EXPERIENCE"
              value={finalData["EXPERIENCE"]}
            ></BaseComponent>
            <BaseComponent
              heading="CERTIFICATION"
              value={finalData["CERTIFICATION"]}
            ></BaseComponent>
          </div>
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
}

export default App;
