import React, { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [inputState, setInputState] = useState({ weight: "", height: "" });
  const [ethnicity, setEthnicity] = useState("");
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  };

  const handleNext = () => {
    // if (parseInt(inputState.weight) > 0)
    if (step === 4) return setStep(1);
    setStep((step) => step + 1);
  };

  const handleEthncity = (type) => () => {
    setEthnicity(type);
  };

  const Weight = (
    <input
      type="number"
      name="weight"
      className="input"
      value={inputState.weight}
      onChange={handleChange}
      placeholder="Enter your weight"
    />
  );

  const Height = (
    <input
      type="number"
      name="height"
      className="input"
      value={inputState.height}
      onChange={handleChange}
      placeholder="Enter your height"
    />
  );

  const Ethnicity = (
    <ul className="ethnicity">
      {["Caucasian", "Asian", "South Asian", "African", "Other"].map((ele) => (
        <li
          key={ele}
          onClick={handleEthncity(ele)}
          className={ethnicity === ele ? "activeEthnicity" : ""}
        >
          {ele}
        </li>
      ))}
    </ul>
  );

  const BMI = <div>Game Over !</div>;

  const activeStep = (step) => {
    switch (step) {
      case 1:
        return { title: "Weight", jsx: Weight };
      case 2:
        return { title: "Height", jsx: Height };
      case 3:
        return { title: "Ethnicity", jsx: Ethnicity };
      case 4:
        return { title: "Your BMI", jsx: BMI };
      default:
        return { title: "", jsx: "" };
    }
  };

  return (
    <div>
      <Card step={step} title={activeStep(step).title} handleNext={handleNext}>
        {activeStep(step).jsx}
      </Card>
    </div>
  );
}

export default App;
