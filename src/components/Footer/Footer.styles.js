import styled from "styled-components";
import color from "styles/styleVariables";

export const FooterAttr = styled.footer`
  width: 100%;
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: center;
  margin: 0 auto;
  padding: 3rem 0 1rem 0;
  color: ${color.secondary};
  transition: all 0.2s;
`;

export const FooterLink = styled.a`
  &:link,
  &:visited {
    text-transform: uppercase;
    color: ${color.secondary};
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    color: ${color.tertiary};
    font-weight: 700;
  }
`;
