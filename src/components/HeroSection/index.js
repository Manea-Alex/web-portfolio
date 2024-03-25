import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  // Importing styled components for use within the hero section
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";

// Importing typewriter effect for dynamic text
import Typewriter from "typewriter-effect";

// Importing bio information
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        {/* Background animation component */}
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            {/* Displaying the name */}
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            {/* Short description about myself*/}
            <SubTitle>{Bio.description}</SubTitle>
            {/* Download the resume button */}
            <ResumeButton href={Bio.resume} download>
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          {/* Display the profile picture*/}
          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
