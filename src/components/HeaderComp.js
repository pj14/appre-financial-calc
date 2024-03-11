import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Box,
  Button,
  Header,
  Image,
  Layer,
  Menu,
  ResponsiveContext,
} from "grommet";
import logo from "../assets/appre-logo-grey-purple.jpg";
import {
  Grommet as GrommetIcon,
  Menu as MenuIcon,
  CircleInformation as InfoIcon,
  Close as CloseIcon,
} from "grommet-icons";

const AppreCalcHeader = (props) => {
  const { tabsRef, setIndex } = props;
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const handleAnchorClick = (index) => {
    setIndex(index);
    setOpenMenuModal(false);
    tabsRef.current?.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  };

  return (
    <Header
      background="light-3"
      pad={{ vertical: "small" }}
      className="header-wrapper"
    >
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box
              direction="row"
              justify="between"
              align="center"
              pad={{ left: "8px", right: "8px", top: "4px", bottom: "4px" }}
              width={{ width: "100%", max: "85rem" }}
            >
              <Button
                icon={<MenuIcon color="brand" />}
                onClick={() => {
                  setOpenMenuModal(!openMenuModal);
                }}
              />
              {openMenuModal && (
                <Layer>
                  <Box gap="xlarge" direction="column" pad="large">
                    <Button
                      icon={<CloseIcon />}
                      onClick={() => {
                        setOpenMenuModal(!openMenuModal);
                      }}
                    />
                    <Box direction="column" align="center" gap="xlarge">
                      <Anchor
                        size="xlarge"
                        label="Savings Calculator"
                        onClick={() => handleAnchorClick(0)}
                      />
                      <Anchor
                        size="xlarge"
                        onClick={() => handleAnchorClick(2)}
                        label="Compound Calculator"
                      />
                      <Anchor
                        size="xlarge"
                        onClick={() => handleAnchorClick(1)}
                        label="Budget Calculator"
                      />
                      <Anchor size="xlarge" href="/about-us" label="About" />
                    </Box>
                  </Box>
                </Layer>
              )}
              <Link to="/home">
                <Image
                  src={logo}
                  fit="contain"
                  alt="Compound"
                  className="appre-logo-main"
                  height={"35px"}
                />
              </Link>
              <InfoIcon color="brand" />
            </Box>
          ) : (
            <Box
              direction="row"
              justify="between"
              width={{ width: "100%", max: "85rem" }}
              align="center"
              pad={{
                left: "16px",
                right: "16px",
                top: "8px",
                bottom: "8px",
              }}
              margin="auto"
            >
              <Link to="/home">
                <Image
                  src={logo}
                  fit="contain"
                  alt="Compound"
                  className="appre-logo-main"
                  height={"35px"}
                />
              </Link>
              <Box justify="end" direction="row" gap="medium">
                <Anchor
                  label="Savings Calculator"
                  onClick={() => handleAnchorClick(0)}
                />

                <Anchor
                  onClick={() => handleAnchorClick(2)}
                  label="Compound Calculator"
                />
                <Anchor
                  onClick={() => handleAnchorClick(1)}
                  label="Budget Calculator"
                />
                <Anchor href="/about-us" label="About" />
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default AppreCalcHeader;
