import {
  Box,
  Card,
  Grid,
  Heading,
  ResponsiveContext,
  Tab,
  Tabs,
  Text,
} from "grommet";
import React, { useContext } from "react";
import SavingsCalculator from "../calculators/savings/SavingsCalculator";
import BudgetCalculator from "../calculators/budget/BudgetCalculator";
import CompoundCalculator from "../calculators/compound/CompoundCalculator";

const CalculatorCards = (props) => {
  const { index, setIndex, tabsRef } = props;
  const size = useContext(ResponsiveContext);

  const onActive = (nextIndex) => setIndex(nextIndex);

  console.log("index", index);

  return (
    <Box width="85rem" margin="auto" pad={{ top: "1.5rem" }}>
      <Heading
        level={2}
        size="small"
        margin={{ top: "0px", left: "12px", right: "12px", bottom: "0px" }}
      >
        <Text color={"dark-1"} size="1.5rem">
          Appre Financial Calculators.{" "}
        </Text>
        <Text color={"dark-3"} size="1.5rem">
          Have you tried them yet?
        </Text>
      </Heading>
      <Box
        className="calculator-tab-section"
        pad={{ top: "1.5rem" }}
        ref={tabsRef}
        margin={{ bottom: "1rem" }}
      >
        <Tabs
          justify="start"
          alignControls="start"
          activeIndex={index}
          onActive={onActive}
        >
          <Tab title="Savings Calculator">
            <Box fill align="center" background="light-2">
              <SavingsCalculator />
            </Box>
          </Tab>
          <Tab title="Budget Calculator">
            <Box fill align="center" background="light-2">
              <BudgetCalculator />
            </Box>
          </Tab>
          <Tab title="Compound Calculator">
            <Box fill align="center" background="light-2">
              <CompoundCalculator />
            </Box>
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default CalculatorCards;
