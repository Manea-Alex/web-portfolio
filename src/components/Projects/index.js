import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

// The main Projects component that renders the section on the portfolio
const Projects = ({ openModal, setOpenModal }) => {
  return (
    //Container to allow for navigation to this section
    <Container id="projects">
      <Wrapper>
        {/* Title for the section */}
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Below you can explore some
          of them.
        </Desc>
        <CardContainer>
          {/*  Container that holds all project cards */}
          {projects.map((project) => (
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
