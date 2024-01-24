import React, { useState } from "react";
import { Link } from "react-router-dom";
import { maskNumbers } from "../../utils/uitilityFunctions";
import compoundImage from "../../assets/compound-calculator.png";
import savingsImage from "../../assets/savings-calculator.png";
import EguideInfo from "../../components/EguideInfo";
import NewsletterSignup from "../../components/NewsletterSignup";
import GetResults from "../../components/GetResults";

const BudgetResults = (props) => {
  const { salaryAmount, afterTaxIncome, needs, wants, savings } = props;
  const [isBlurred, setIsBlurred] = useState(true);

  const [getResultsDisabled, setGetResultsDisabled] = useState(true);

  const [emailInputDisabled, setEmailInputDisabled] = useState(false);

  const maskedNeedsAmount = maskNumbers(needs);
  const maskedWantsAmount = maskNumbers(wants);
  const maskedSavingsAmount = maskNumbers(savings);

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
        <div className="results-row">{`Yearly Salary: ${salaryAmount}`}</div>
        <div className="results-row">
          <span>{`Effective income after tax: ${afterTaxIncome}`}</span>
        </div>
        <div className="results-row">
          <span>50% Needs:</span>
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedNeedsAmount : needs
          }`}</span>
        </div>
        <div className="results-row">
          <span>30% Wants:</span>
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedWantsAmount : wants
          }`}</span>
        </div>
        <div className="results-row">
          <span>20% Investing/Saving:</span>
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedSavingsAmount : savings
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
                  <Link to="/compound-calculator" className="nav-link">
                    <img src={compoundImage} alt="Compound" />
                    <span>Compound Calculator</span>
                  </Link>
                </li>
                <li>
                  <Link to="/savings-calculator" className="nav-link">
                    <img src={savingsImage} alt="Budget" />
                    <span>Saving Calculator</span>
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

export default BudgetResults;
