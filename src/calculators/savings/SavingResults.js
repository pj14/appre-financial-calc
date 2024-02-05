import React, { useState } from "react";
import { maskNumbers, signupForWaitlist } from "../../utils/uitilityFunctions";
import { Link } from "react-router-dom";
import "./savings.css";
import EguideInfo from "../../components/EguideInfo";
import NewsletterSignup from "../../components/NewsletterSignup";
import GetResults from "../../components/GetResults";
import compoundImage from "../../assets/compound-calculator.png";
import budgetImage from "../../assets/budget-calculator.png";
import useNewsletterHook from "../../utils/useNewsletterHook";

const SavingResults = (props) => {
  const {
    perDaySavings = 0.0,
    perWeekSavings = 0.0,
    perMonthSavings = 0.0,
  } = props;

  const [isBlurred, setIsBlurred] = useState(true);

  const [getResultsDisabled, setGetResultsDisabled] = useState(true);

  const [emailInputDisabled, setEmailInputDisabled] = useState(false);

  const {
    newsletterChecked,
    setNewsletterChecked,
    waitlistChecked,
    setWaitlistChecked,
    noSignupChecked,
    setNoSignupChecked,
    emailAddress,
    setEmailAddress,
    isValidEmail,
    setIsValidEmail,
  } = useNewsletterHook({ setGetResultsDisabled, setEmailInputDisabled });

  const maskedDaySavings = maskNumbers(perDaySavings);
  const maskedWeekDigits = maskNumbers(perWeekSavings);
  const maskedMonthlyDigits = maskNumbers(perMonthSavings);

  const showResults = () => {
    if (waitlistChecked || newsletterChecked) {
      signupForWaitlist(emailAddress);
    }
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
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedDaySavings : perDaySavings
          }`}</span>
          <span>Per Day</span>
        </div>
        <div className="results-row">
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedWeekDigits : perWeekSavings
          }`}</span>
          <span>Per Week</span>
        </div>
        <div className="results-row">
          <span className={`savings-amount ${isBlurred && "blurred"}`}>{`£${
            isBlurred ? maskedMonthlyDigits : perMonthSavings
          }`}</span>
          <span>Per Month</span>
        </div>
      </div>
      {isBlurred ? (
        <>
          <EguideInfo />
          <NewsletterSignup
            setGetResultsDisabled={setGetResultsDisabled}
            emailInputDisabled={emailInputDisabled}
            setEmailInputDisabled={setEmailInputDisabled}
            newsletterChecked={newsletterChecked}
            setNewsletterChecked={setNewsletterChecked}
            waitlistChecked={waitlistChecked}
            setWaitlistChecked={setWaitlistChecked}
            noSignupChecked={noSignupChecked}
            setNoSignupChecked={setNoSignupChecked}
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            isValidEmail={isValidEmail}
            setIsValidEmail={setIsValidEmail}
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

export default SavingResults;
