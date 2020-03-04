import React, { useState, useEffect, Fragment } from "react";

import { useKata } from "../KataContext";

import "./Tier.scss";

const getTierSuccess = success => {
  if (typeof success === "undefined") {
    return "-";
  }

  return success ? "ok" : "fail";
};

export const Tier = ({ level, subtitle = "", useCases }) => {
  const [success, setSuccess] = useState(new Array(useCases.length));
  const kata = useKata();

  const handleClick = () => {
    const newSuccess = useCases.map(
      useCase => kata(useCase.input) === useCase.output
    );

    setSuccess(newSuccess);
  };

  useEffect(() => handleClick(), [kata, setSuccess]);

  return (
    <section className="Tier">
      <h2 className="Tier__title">Tier {level}</h2>
      <p>{subtitle}</p>
      <div className="Tier__grid">
        <span className="Tier__cell Tier__header">Input</span>
        <span className="Tier__cell Tier__header">Output</span>
        <span className="Tier__cell Tier__header">Result</span>
        {useCases.map((useCase, i) => (
          <Fragment key={`${useCase.input}_${useCase.output}`}>
            <span className="Tier__cell">{useCase.input}</span>
            <span className="Tier__cell">{useCase.output}</span>
            <span
              className={`Tier__cell Tier__success Tier__success--${
                success[i]
              }`}
            >
              {getTierSuccess(success[i])}
              {success[i] === false && (
                <span>Result: {kata(useCase.input)}</span>
              )}
            </span>
          </Fragment>
        ))}
      </div>
      <button className="Tier__button" onClick={handleClick}>
        Run Tier {level}
      </button>
    </section>
  );
};

export default Tier;
