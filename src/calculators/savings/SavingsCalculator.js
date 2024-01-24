// SavingsCalculator.js
import React, { useEffect, useState } from "react";
import ActionButton from "../../components/ActionButton";
import {
  calculateDailySavings,
  calculateMonthlySavings,
  calculateWeeklySavings,
} from "../../utils/uitilityFunctions";
import SavingResults from "./SavingResults";

const SavingsCalculator = () => {
  console.log("SavingsCalculator is rendering");
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(1);

  const [perDaySavings, setPerDaySavings] = useState(0);
  const [perWeekSavings, setPerWeekSavings] = useState(0);
  const [perMonthSavings, setPerMonthSavings] = useState(0);

  const [calculateDisabled, setCalculateDisabled] = useState(true);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (months > 0 || years > 0) setCalculateDisabled(false);
    else setCalculateDisabled(true);
  }, [months, years]);

  const handleAmountChange = (event) => {
    let newValue = event.target.value;

    console.log("newValue ", newValue);
    if (newValue) newValue = newValue.replace("£", "");

    console.log("newValue replaced", parseFloat(newValue));
    if (isNaN(newValue)) {
      setAmount(0);
      return;
    } else {
      setAmount(newValue);
    }
  };

  const handleMonthChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    if (newValue < 0) {
      setMonths(1);
      return;
    }
    setMonths(newValue);
  };

  const handleYearChange = (event) => {
    setYears(event.target.value);
  };

  const calculateSavings = () => {
    try {
      if (months === 0 && years === 0) {
        setPerDaySavings(0.0);
        setPerWeekSavings(0.0);
        setPerMonthSavings(0.0);

        return;
      }

      const perDaySavings = calculateDailySavings(amount, years, months);
      const perWeekSavings = calculateWeeklySavings(amount, years, months);
      const perMonthSavings = calculateMonthlySavings(amount, years, months);

      console.log(
        "perDaySavings",
        perDaySavings.toFixed(2),
        "perWeekSavings",
        perWeekSavings.toFixed(2),
        "perMonthSavings",
        perMonthSavings.toFixed(2)
      );

      setPerDaySavings(perDaySavings.toFixed(2));
      setPerWeekSavings(perWeekSavings.toFixed(2));
      setPerMonthSavings(perMonthSavings.toFixed(2));

      setShowResults(true);
    } catch (error) {
      console.error("Error calculating savings");
      setPerDaySavings(0);
      setPerWeekSavings(0);
      setPerMonthSavings(0);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="home-page-header-section">
          <div>
            <h1>Savings Calculator</h1>
          </div>
          <div className="created-by-section">
            <div>Created By</div>
            <div className="appre-logo">
              <img src="appre-logo.png" alt="Appre Logo" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {showResults ? (
          <SavingResults
            perDaySavings={perDaySavings}
            perWeekSavings={perWeekSavings}
            perMonthSavings={perMonthSavings}
          />
        ) : (
          <>
            <div className="about-section-calculator">
              <span>
                This calculator allows you to calculate how much you need to
                save to meet your savings goal.
              </span>
              <span>
                This calculator assumes you put money in at the beginning of
                each month. Feel free to play with the results to see how it
                impacts your savings. This is not financial advice.
              </span>
            </div>
            <div className="savings-calculator-section">
              <div className="saving-amount-input">
                <label htmlFor="amountInput">
                  How much do you want to save?
                </label>
                <div>
                  <input
                    type="text"
                    id="amountInput"
                    value={`£${amount}`}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="savings-duration-section">
                <span>How long do you want to save for?</span>
                <div className="year-month-seletor">
                  <div>
                    <label htmlFor="yearsInput">Years</label>

                    <input
                      type="number"
                      min="1"
                      step="1"
                      id="yearsInput"
                      value={years}
                      onChange={handleYearChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="monthsInput">Months</label>

                    <input
                      type="number"
                      min="1"
                      step="1"
                      id="monthsInput"
                      value={months}
                      onChange={handleMonthChange}
                      onKeyPress={(e) => {
                        if (e.key === ".") {
                          e.preventDefault();
                        }
                      }}
                      inputMode="numeric"
                    />
                  </div>
                </div>
              </div>
              <div className="results-action-button">
                <ActionButton
                  buttonText={"Calculate"}
                  onClickHandler={calculateSavings}
                  disabled={calculateDisabled}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default SavingsCalculator;
