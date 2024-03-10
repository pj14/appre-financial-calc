import { Anchor, Box, Footer, Image, Text } from "grommet";
import React from "react";
import { FacebookOption, Instagram, Twitter } from "grommet-icons";
import logo from "../assets/appre-logo-grey-purple.jpg";

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/try.appre"
      icon={<Instagram color="brand" />}
      target="_blank"
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" />}
      target="_blank"
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="brand" />}
      target="_blank"
    />
  </Box>
);

const FooterComp = () => {
  return (
    <Footer background="light-3" pad="small" className="footer-container">
      <Box
        align="center"
        direction="row"
        gap="xsmall"
        width={{ width: "100%", max: "85rem" }}
        margin="auto"
        justify="between"
      >
        <Image
          src={logo}
          fit="contain"
          alt="Compound"
          className="appre-logo-main"
          height={"25px"}
          style={{ flex: "none" }}
        />
        <Media />
        <Text textAlign="center" size="xsmall">
          ©Copyright Appre Ltd.
        </Text>
      </Box>
    </Footer>
  );
};

export default FooterComp;
