import styled from "styled-components";
import color from "styles/styleVariables";

export const Card = styled.div`
  background-color: ${color.primaryLight};
  padding: 5rem 3rem;
  border-radius: 1rem;
  width: 92%;
  max-width: 60rem;
  text-align: center;
  position: relative;
`;

export const Advice = styled.p`
  color: ${color.tertiary};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

export const Citate = styled.h1`
  color: ${color.secondary};
  font-size: 2.3rem;
  line-height: 1.5;
  margin: 2rem 0;
`;

export const Divider = styled.picture`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const DividerImg = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${color.tertiary};
  border: none;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  position: absolute;
  left: 50%;
  bottom: -3rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 30px ${color.tertiary};
  }

  &:active,
  &:focus-visible {
    box-shadow: 0px 0px 30px ${color.tertiary};
    box-shadow: ${color.tertiary} 0px 0px 10px 5px;
    outline: 0.1rem solid ${color.tertiary};
  }
`;
