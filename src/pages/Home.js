import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Avatar,
  Box,
  Grommet,
  Header,
  Image,
  Menu,
  PageContent,
  ResponsiveContext,
} from "grommet";

import AppreCalcHeader from "../components/HeaderComp";
import HomeCarouselComp from "../components/HomeCarouselComp";
import CalculatorCards from "../components/CalculatorCards";
import FooterComp from "../components/FooterComp";

const Home = () => {
  const homeTheme = {};
  const [index, setIndex] = useState();
  const tabsRef = useRef(null);

  return (
    <Grommet theme={homeTheme} style={{ overflow: "auto" }}>
      <AppreCalcHeader tabsRef={tabsRef} setIndex={setIndex} />
      <Box className="home-container">
        <HomeCarouselComp tabsRef={tabsRef} setIndex={setIndex} />
        <CalculatorCards tabsRef={tabsRef} index={index} setIndex={setIndex} />
        <FooterComp />
      </Box>
    </Grommet>
  );
};

export default Home;
