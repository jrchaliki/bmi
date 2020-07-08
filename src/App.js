import React, { useState } from "react";
import Card from "./components/Card";

const InputCss = {
  height: "55px",
  width: "100%",
  position: "relative",
  top: "60px",
  fontSize: "18px",
  border: "1px solid #A5A5E3",
  paddingLeft: "14px",
};

function App() {
  const [inputState, setInputState] = useState({ weight: "", height: "" });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  };

  const handleNext = () => {
    // if (parseInt(inputState.weight) > 0)
    setStep((step) => step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <Card step={step} title="Weight" handleNext={handleNext}>
          <input
            type="number"
            name="weight"
            style={InputCss}
            value={inputState.weight}
            onChange={handleChange}
            placeholder="Enter your weight"
          />
        </Card>
      )}
      {step === 2 && (
        <Card step={step} title="Height" handleNext={handleNext}>
          <input
            type="number"
            name="height"
            style={InputCss}
            value={inputState.height}
            onChange={handleChange}
            placeholder="Enter your height"
          />
        </Card>
      )}
      {step === 3 && (
        <Card step={step} title="Ethnicity" handleNext={handleNext}>
          <ul>
            {["Caucasian", "Asian", "South Asian", "African", "Other"].map(
              (ele) => (
                <li key={ele}>{ele}</li>
              )
            )}
          </ul>
        </Card>
      )}
    </div>
  );
}

export default App;
