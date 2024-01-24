import React from "react";
import ActionButton from "./ActionButton";

const GetResults = (props) => {
  const { getResultsDisabled, showResults } = props;
  return (
    <div className="results-action-button">
      <ActionButton
        buttonText={"Get Results"}
        onClickHandler={showResults}
        disabled={getResultsDisabled}
      />
    </div>
  );
};

export default GetResults;
