export const calculateDailySavings = (amount, years, months) => {
  const totalDays = years * 365 + months * 30;
  return amount / totalDays;
};

export const calculateWeeklySavings = (amount, years, months) => {
  const totalWeeks = years * 52 + months * 4;
  return amount / totalWeeks;
};

export const calculateMonthlySavings = (amount, years, months) => {
  const totalMonths = years * 12 + months;
  return amount / totalMonths;
};

export const getNumberLength = (number) => {
  return number.toString().replace(".", "").length;
};

export const maskNumbers = (number) => {
  return number.toString().replace(/[0-9]/g, "X");
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const calculateBudgetResults = (annualIncome) => {
  // UK income tax bands and rates (for the tax year 2021/2022)
  const personalAllowance = 12570; // Tax-free allowance
  const basicRateThreshold = 50270; // Basic rate threshold
  const higherRateThreshold = 125140; // Higher rate threshold

  // National Insurance details (weekly amounts)
  const niThreshold1Weekly = 241; // First National Insurance threshold
  const niThreshold2Weekly = 967; // Second National Insurance threshold
  const niRate1 = 0; // First National Insurance rate (0%)
  const niRate2 = 0.1; // Second National Insurance rate (10%)
  const niRate3 = 0.02; // Third National Insurance rate (2%)

  // Convert annual income to weekly income
  const weeklyIncome = annualIncome / 52;

  // Calculate taxable income
  const taxableIncome = Math.max(0, annualIncome - personalAllowance);

  // Calculate income tax
  let incomeTax = 0;
  if (taxableIncome <= basicRateThreshold) {
    // Basic rate (20%)
    incomeTax = taxableIncome * 0.2;
  } else if (taxableIncome <= higherRateThreshold) {
    // Higher rate (40%)
    incomeTax =
      (basicRateThreshold - personalAllowance) * 0.2 +
      (taxableIncome - basicRateThreshold) * 0.4;
  } else {
    // Additional rate (45%)
    incomeTax =
      (basicRateThreshold - personalAllowance) * 0.2 +
      (higherRateThreshold - basicRateThreshold) * 0.4 +
      (taxableIncome - higherRateThreshold) * 0.45;
  }

  // Calculate National Insurance
  let niContribution = 0;
  if (weeklyIncome > niThreshold1Weekly) {
    niContribution +=
      Math.min(niThreshold2Weekly, weeklyIncome) * niRate1 +
      Math.max(
        0,
        Math.min(weeklyIncome, niThreshold2Weekly) - niThreshold1Weekly
      ) *
        niRate2 +
      Math.max(0, weeklyIncome - niThreshold2Weekly) * niRate3;
  }

  // Convert the annual income to after-tax income
  const afterTaxIncome = annualIncome - incomeTax;

  // Calculate remaining income after NI
  const remainingIncome = afterTaxIncome - niContribution * 52;

  // Calculate monthly income
  const monthlyIncome = remainingIncome / 12;

  // Percentage allocations
  const needsPercentage = 0.5;
  const wantsPercentage = 0.3;
  const savingPercentage = 0.2;

  // Calculate budget components for the whole year
  const needs = monthlyIncome * needsPercentage;
  const wants = monthlyIncome * wantsPercentage;
  const savingInvesting = monthlyIncome * savingPercentage;

  return {
    needs,
    wants,
    savingInvesting,
    afterTaxIncome,
    niContribution,
    afterNIIncome: monthlyIncome * 12,
  };
};

export const calculateCompoundInterest = (
  principal,
  monthlyContribution,
  annualInterestRate,
  years
) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalMonths = years * 12;

  let futureValue = principal;

  for (let month = 1; month <= totalMonths; month++) {
    futureValue =
      (futureValue + monthlyContribution) * (1 + monthlyInterestRate);
  }

  return futureValue.toFixed(2); // Round to two decimal places
};

export const signupForWaitlist = (email) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  };
  fetch("https://getlaunchlist.com/s/x2Iysg", options)
    .then((response) => response.json())
    .then((data) => console.log("waitlist success: ", data))
    .catch((error) => console.error("Error signing up for waitlist: ", error));
};
