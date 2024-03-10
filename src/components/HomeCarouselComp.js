import {
  Box,
  Button,
  Carousel,
  Grommet,
  Image,
  ResponsiveContext,
  Text,
} from "grommet";
import React from "react";
import savings from "../assets/savings-calc.jpg";
import budget from "../assets/savings-upslash.jpg";
import compound from "../assets/compound-calculator.jpg";
import "./HomeCarouselComp.css";
import { useHistory } from "react-router-dom";

const homeCarouselTheme = {};

const HomeCarouselComp = (props) => {
  const { tabsRef, setIndex } = props;
  const history = useHistory();

  const handleButtonClick = (index) => {
    setIndex(index);
    tabsRef.current?.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  };

  return (
    <Grommet theme={homeCarouselTheme} className="carousel-container">
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Carousel controls="selectors">
              <Box
                height="25rem"
                width={{ width: "85rem" }}
                margin="auto"
                position="relative"
              >
                <Box
                  className="carousel-image-container"
                  width={{ max: "100%", width: "85rem" }}
                  margin="auto"
                  height="25rem"
                >
                  <Image fit="cover" fill src={savings} />
                </Box>

                <Box className="overlay-text-carousel" position="absolute">
                  <Text size="2.4rem" weight="bold" color="overlay-white">
                    Have You Unveiled Your Savings Potential Yet?
                  </Text>
                  <Button
                    primary
                    className="carousel-action-button"
                    label={`Try our savings calculator now!`}
                    onClick={() => {
                      handleButtonClick(0);
                    }}
                  />
                </Box>
              </Box>
              <Box
                height="25rem"
                width={{ width: "85rem" }}
                margin="auto"
                position="relative"
              >
                <Box
                  className="carousel-image-container"
                  width={{ max: "100%", width: "85rem" }}
                  margin="auto"
                  height="25rem"
                >
                  <Image fit="cover" fill src={budget} />
                </Box>

                <Box className="overlay-text-carousel" position="absolute">
                  <Text size="2.4rem" weight="bold" color="overlay-white">
                    Smart Budgeting: Your Path Towards Financial Freedom!
                  </Text>
                  <Button
                    primary
                    className="carousel-action-button"
                    label={`Try our budget calculator today.`}
                    onClick={() => {
                      handleButtonClick(1);
                    }}
                  />
                </Box>
              </Box>
              <Box
                height="25rem"
                width={{ width: "85rem" }}
                margin="auto"
                position="relative"
              >
                <Box
                  className="carousel-image-container"
                  width={{ max: "100%", width: "85rem" }}
                  margin="auto"
                  height="25rem"
                >
                  <Image fit="cover" fill src={compound} />
                </Box>

                <Box className="overlay-text-carousel" position="absolute">
                  <Text size="2.4rem" weight="bold" color="overlay-white">
                    Experience The Power Of Compounding
                  </Text>
                  <Button
                    primary
                    className="carousel-action-button"
                    label={`Check our compound calculator now!`}
                    onClick={() => {
                      handleButtonClick(2);
                    }}
                  />
                </Box>
              </Box>
            </Carousel>
          ) : (
            <Carousel controls="selectors">
              <Box
                height="27rem"
                width={{ width: "85rem" }}
                margin="auto"
                position="relative"
              >
                <Box
                  className="carousel-image-container"
                  width={{ max: "100%", width: "85rem" }}
                  margin="auto"
                >
                  <Image fit="cover" fill src={savings} />
                </Box>

                <Box className="overlay-text-carousel" position="absolute">
                  <Text size="3.2rem" weight="bold" color="overlay-white">
                    Have You Unveiled Your Savings Potential Yet?
                  </Text>
                  <Button
                    primary
                    className="carousel-action-button"
                    label={`Try our savings calculator now!`}
                    onClick={() => {
                      handleButtonClick(0);
                    }}
                  />
                </Box>
              </Box>
              <Box
                height="27rem"
                width={{ width: "85rem" }}
                margin="auto"
                position="relative"
              >
                <Box
                  className="carousel-image-container"
                  width={{ max: "100%", width: "85rem" }}
                  margin="auto"
                >
                  <Image fit="cover" fill src={budget} />
                </Box>

                <Box className="overlay-text-carousel" position="absolute">
                  <Text size="3.2rem" weight="bold" color="overlay-white">
                    Smart Budgeting: Your Path Towards Financial Freedom!
                  </Text>
                  <Button
                    primary
                    className="carousel-action-button"
                    label={`Try our budget calculator today.`}
                    onClick={() => {
                      handleButtonClick(1);
                    }}
                  />
                </Box>
              </Box>
              <Box
                height="27rem"
                width={{ width: "85rem" }}
                margin="auto"
                position="relative"
              >
                <Box
                  className="carousel-image-container"
                  width={{ max: "100%", width: "85rem" }}
                  margin="auto"
                >
                  <Image fit="cover" fill src={compound} />
                </Box>

                <Box className="overlay-text-carousel" position="absolute">
                  <Text size="3.2rem" weight="bold" color="overlay-white">
                    Experience The Power Of Compounding
                  </Text>
                  <Button
                    primary
                    className="carousel-action-button"
                    label={`Check our compound calculator now!`}
                    onClick={() => {
                      handleButtonClick(2);
                    }}
                  />
                </Box>
              </Box>
            </Carousel>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default HomeCarouselComp;
