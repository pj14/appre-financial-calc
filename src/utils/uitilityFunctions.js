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

  // Calculate after-tax income
  const afterTaxIncome = annualIncome - incomeTax;

  // Calculate monthly income
  const monthlyIncome = afterTaxIncome / 12;

  // Percentage allocations
  const needsPercentage = 0.5;
  const wantsPercentage = 0.3;
  const savingPercentage = 0.2;

  // Calculate budget components
  const needs = monthlyIncome * needsPercentage;
  const wants = monthlyIncome * wantsPercentage;
  const savingInvesting = monthlyIncome * savingPercentage;

  return {
    afterTaxIncome,
    needs,
    wants,
    savingInvesting,
  };
};
