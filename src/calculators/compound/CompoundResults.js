import React, { useState } from "react";
import { Link } from "react-router-dom";
import { maskNumbers } from "../../utils/uitilityFunctions";
import EguideInfo from "../../components/EguideInfo";
import NewsletterSignup from "../../components/NewsletterSignup";
import GetResults from "../../components/GetResults";

import savingsImage from "../../assets/savings-calculator.png";
import budgetImage from "../../assets/budget-calculator.png";

const CompoundResults = (props) => {
  const { initialInvestment, compoundedValue, years } = props;

  const [isBlurred, setIsBlurred] = useState(true);
  const [getResultsDisabled, setGetResultsDisabled] = useState(true);

  const [emailInputDisabled, setEmailInputDisabled] = useState(false);

  const maskedAmount = maskNumbers(compoundedValue);

  const showResults = () => {
    setIsBlurred(false);
  };

  return (
    <div className="saving-results-wrapper">
      <div className="savings-disclaimer">
        Please see a breakdown of your calculations below. This is not financial
        advice.
      </div>
      <div className="savings-results">
        <div className="results-row">
          <span>Value Now:</span>
          <span className={`savings-amount`}>{`£${initialInvestment}`}</span>
        </div>
        <div className="results-row">
          <span>{`Value after ${years} years: `}</span>
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedAmount : compoundedValue
          }`}</span>
        </div>
      </div>
      {isBlurred ? (
        <>
          <EguideInfo />
          <NewsletterSignup
            setGetResultsDisabled={setGetResultsDisabled}
            emailInputDisabled={emailInputDisabled}
            setEmailInputDisabled={setEmailInputDisabled}
          />
          <GetResults
            getResultsDisabled={getResultsDisabled}
            showResults={showResults}
          />
        </>
      ) : (
        <>
          <div className="other-options-wrapper">
            <span>Try other options</span>
            <nav>
              <ul>
                <li>
                  <Link to="/savings-calculator" className="nav-link">
                    <img src={savingsImage} alt="Savings" />
                    <span>Saving Calculator</span>
                  </Link>
                </li>
                <li>
                  <Link to="/budget-calculator" className="nav-link">
                    <img src={budgetImage} alt="Budget" />
                    <span>Budget Calculator</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default CompoundResults;
