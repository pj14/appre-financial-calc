import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import { interestRateOptions } from "../../utils/constants";
import "./compound.css";
import ActionButton from "../../components/ActionButton";
import { calculateCompoundInterest } from "../../utils/uitilityFunctions";
import CompoundResults from "./CompoundResults";

const CompoundCalculator = () => {
  const [investedAmount, setInvestedAmount] = useState(0);
  const [investmentPerMonth, setInvestmentPermonth] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [years, setYears] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [compoundedValue, setCompoundedValue] = useState(0);

  const [interestDropdownOpen, setInterestDropdownOpen] = React.useState(false);
  const [interestOption, setInterestOption] = useState({});

  const toggleInterestDropdown = () => {
    setInterestDropdownOpen(!interestDropdownOpen);

    setShowOverlay(true);
  };

  const handleInvestedAmountChange = (event) => {
    let newValue = event.target.value;

    console.log("newValue ", newValue);
    if (newValue) newValue = newValue.replace("£", "");

    console.log("newValue replaced", parseFloat(newValue));
    if (isNaN(newValue)) {
      setInvestedAmount(0);
      return;
    } else {
      setInvestedAmount(newValue);
    }
  };

  const handleInvestmentAmount = (event) => {
    let newValue = event.target.value;

    console.log("newValue ", newValue);
    if (newValue) newValue = newValue.replace("£", "");

    console.log("newValue replaced", parseFloat(newValue));
    if (isNaN(newValue)) {
      setInvestmentPermonth(0);
      return;
    } else {
      setInvestmentPermonth(newValue);
    }
  };

  const handleInterestSelection = (key, value) => {
    console.log("Key: ", key);

    if (key === "s&p500") setInterestRate(10);

    setInterestOption({ key: key, value: value });
    setInterestDropdownOpen(false);
    setShowOverlay(false);
  };

  const handleCustomInterestRate = (event) => {
    let newValue = event.target.value;

    console.log("newValue ", newValue);
    if (newValue) newValue = newValue.replace("%", "");

    console.log("newValue replaced", parseFloat(newValue));
    if (isNaN(newValue)) {
      setInterestRate(0);
      return;
    } else {
      setInterestRate(newValue);
    }
  };

  const handleYearChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    if (newValue < 0) {
      setYears(1);
      return;
    }
    setYears(newValue);
  };

  const calculateResults = () => {
    try {
      const result = calculateCompoundInterest(
        parseFloat(investedAmount),
        parseFloat(investmentPerMonth),
        parseFloat(interestRate),
        parseFloat(years)
      );

      setCompoundedValue(result);
      setShowResults(true);
    } catch (error) {
      console.error("Error in calculating compunded value", error);
      setCompoundedValue(0);
    }
  };

  return (
    <div className="container">
      <div
        className={`overlay ${showOverlay ? "show" : ""}`}
        onClick={() => {
          setShowOverlay(false);
          setInterestDropdownOpen(!interestDropdownOpen);
        }}
      ></div>
      <header>
        <div className="home-page-header-section">
          <div>
            <h1>Compound Calculator</h1>
          </div>
          {/*<div className="created-by-section">
            <div>Created By</div>
            <div className="appre-logo">
              <img src="appre-logo.png" alt="Appre Logo" />
            </div>
          </div>
        */}
        </div>
      </header>
      <main>
        {showResults ? (
          <CompoundResults
            initialInvestment={investedAmount}
            compoundedValue={compoundedValue}
            years={years}
          />
        ) : (
          <>
            <div className="about-section-calculator">
              <span>
                This calculator allows you to calculate the compound interest
                growth on your investments.
              </span>
              <span>This calculator does not offer investment advice.</span>
            </div>
            <div className="compound-calculator-section">
              <div className="compound-input">
                <label htmlFor="investedAmount">
                  How much do you have invested?
                </label>
                <div>
                  <input
                    type="text"
                    id="investedAmount"
                    value={`£${investedAmount}`}
                    onChange={handleInvestedAmountChange}
                  />
                </div>
              </div>
              <div className="compound-input">
                <label htmlFor="investmentPerMonth">
                  How much will you invest per month?
                </label>
                <div>
                  <input
                    type="text"
                    id="investmentPerMonth"
                    value={`£${investmentPerMonth}`}
                    onChange={handleInvestmentAmount}
                  />
                </div>
              </div>
              <div className="compound-input">
                <div className="compound-input">
                  <label>Select interest type</label>
                  <Dropdown
                    open={interestDropdownOpen}
                    trigger={
                      <button onClick={toggleInterestDropdown}>
                        {interestOption.value || "Select"}
                      </button>
                    }
                    menu={interestRateOptions.map((option) => (
                      <button
                        onClick={() =>
                          handleInterestSelection(option.key, option.value)
                        }
                      >
                        {option.value}
                      </button>
                    ))}
                  />
                </div>
              </div>
              <div className="compound-input">
                <label htmlFor="interestRate">Interest rate</label>
                <div
                  className={`interest-rate-input ${
                    interestOption && interestOption.key !== "custom"
                      ? "disabled"
                      : ""
                  } `}
                >
                  <input
                    type="text"
                    id="interestRate"
                    value={`${interestRate}%`}
                    onChange={handleCustomInterestRate}
                    disabled={interestOption && interestOption.key !== "custom"}
                  />
                </div>
              </div>
              <div className="compound-input">
                <label htmlFor="compoundDuration">
                  Years you want to calculate for?
                </label>
                <div>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    id="yearsInput"
                    value={years}
                    onChange={handleYearChange}
                  />
                </div>
              </div>
              <div className="results-action-button">
                <ActionButton
                  buttonText={"Calculate"}
                  onClickHandler={calculateResults}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CompoundCalculator;
