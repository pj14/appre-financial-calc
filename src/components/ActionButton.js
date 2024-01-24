import React from "react";

const ActionButton = ({ buttonText, onClickHandler, disabled }) => {
  return (
    <>
      <button
        className={`action-button ${disabled ? "disabled" : ""}`}
        onClick={onClickHandler}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
};

export default ActionButton;
