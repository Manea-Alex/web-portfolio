import React from "react";
import styled from "styled-components";
import { renderDescriptionWithLink } from "../../utils/RenderLink";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

// Styles for the job description text, which may include links
const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4; // Limits the text to 4 lines
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

// Base styles for the card container
const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(
      -5px
    ); // gives the jiggly effect that the card is moving
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset; // Remove the line clamp on hover
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

// Container for the top section of the card holding the image and basic info
const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

// Styles for the company image or logo
const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
// Container for the role, company, and date information
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Styles for displaying the job title or role
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

// Styles for displaying the company name
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// Styles for displaying the date range of the experience
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

// Container for the skills tags associated with the experience
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// Individual skill tag styles
const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const CertificateLink = styled.a`
  color: ${({ theme }) => theme.certificateColor};
  font-weight: 600;
`;

// ExperienceCard functional component that takes an experience object as a prop
const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {/* Renders the experience description which could include embedded links */}
        {experience?.desc && (
          <Span>
            {renderDescriptionWithLink(
              experience.desc,
              "Negombo",
              "https://negombo.it"
            )}
          </Span>
        )}
        {/* Conditionally renders the skills list if present */}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill> // Added missing key prop here
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {/* Renders a link to the certificate if provided */}
      {experience.doc && (
        <CertificateLink href={experience.doc} target="new">
          Certificate Link
        </CertificateLink>
      )}
    </Card>
  );
};

export default ExperienceCard;
