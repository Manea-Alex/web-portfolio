import styled from "styled-components";
import _default from "../../themes/default";

// Container for the entire Projects section
export const Container = styled.div`
  // background: linear-gradient(
  //   343.07deg,
  //   rgba(132, 59, 206, 0.06) 5.71%,
  //   rgba(132, 59, 206, 0) 64.83%
  // );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  //clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  scroll-margin-top: 60px;
`;

// Wraps the content of the Projects section, ensuring proper spacing and organization
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// Styled title for the Projects section
export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
// Description text for the Projects section
export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

// Toggle button for desscription and documentation sections
export const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 70};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 30};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

// Container for project cards, using flexbox to allow wrapping for responsiveness
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;