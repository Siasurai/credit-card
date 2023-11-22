import "./style.css";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "../Input";

export const Card = ({}) => {
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value.length <= 4) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);

      if (value.length === 4 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);
  return (
    <div className="card-wrapper">
      <h1>Zadejte číslo karty</h1>
      <div className="card-bottom">
        {inputValues.map((value, index) => (
          <Input
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleInputChange(e, index)}
            inputRef={inputRefs[index]}
          />
        ))}
      </div>
    </div>
  );
};
