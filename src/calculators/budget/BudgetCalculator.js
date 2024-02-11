import React, { useState } from "react";
import ActionButton from "../../components/ActionButton";
import { calculateBudgetResults } from "../../utils/uitilityFunctions";
import BudgetResults from "./BudgetResults";

const BudgetCalculator = () => {
  const [amount, setAmount] = useState(30000);

  const [afterTaxIncome, setAfterTaxIncome] = useState(0);
  const [afterNIIncome, setAfterNIIncome] = useState(0);
  const [niContribution, setNiContribution] = useState(0);
  const [needs, setNeeds] = useState(0);
  const [wants, setWants] = useState(0);
  const [savings, setSavings] = useState(0);

  const [showResults, setShowResults] = useState(false);

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

  const calculateResults = () => {
    try {
      const {
        afterTaxIncome,
        totalNiContribution,
        afterNIIncome,
        needs,
        wants,
        savingInvesting,
      } = calculateBudgetResults(amount);

      console.log(
        "needs",
        needs,
        "wants",
        wants,
        "savingInvesting",
        savingInvesting,
        "niContribution",
        totalNiContribution,
        "afterNIIncome",
        afterNIIncome
      );

      setAfterTaxIncome(afterTaxIncome.toFixed(2));
      setAfterNIIncome(afterNIIncome.toFixed(2));
      setNiContribution(totalNiContribution.toFixed(2));
      setNeeds(needs.toFixed(2));
      setWants(wants.toFixed(2));
      setSavings(savingInvesting.toFixed(2));

      setShowResults(true);
    } catch (error) {
      console.error("Error in calculating budgets", error);

      setAfterTaxIncome(0.0);
      setAfterNIIncome(0.0);
      setNiContribution(0.0);
      setNeeds(0.0);
      setWants(0.0);
      setSavings(0.0);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="home-page-header-section">
          <div>
            <h1>Budget Calculator</h1>
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
          <BudgetResults
            salaryAmount={amount}
            afterTaxIncome={afterTaxIncome}
            niContribution={niContribution}
            afterNIIncome={afterNIIncome}
            needs={needs}
            wants={wants}
            savings={savings}
          />
        ) : (
          <>
            <div className="about-section-calculator">
              <span>
                This calculator allows you to calculate how much you could save,
                invest and spend based on the 50/30/20 framework.
              </span>
              <span>
                Feel free to play with the results to see how it impacts your
                savings. This is not financial advice.
              </span>
            </div>
            <div className="budget-calculator-section">
              <div className="budget-amount-input">
                <label htmlFor="amountInput">Enter your yearly salary</label>
                <div>
                  <input
                    type="text"
                    id="amountInput"
                    value={`£${amount}`}
                    onChange={handleAmountChange}
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

export default BudgetCalculator;
