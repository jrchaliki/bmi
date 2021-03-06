import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { children, step, title, handleNext } = props;

  return (
    <div className={styles.card}>
      <h6 className={styles.step}>{step === 4 ? "Result" : `Step ${step}`}</h6>
      <h2 className={styles.title}>{title}</h2>

      <div>{children}</div>
      <button type="button" className={styles.nextButton} onClick={handleNext}>
        {step === 4 ? "Start Over" : "Next"}
      </button>
    </div>
  );
};

export default Card;
