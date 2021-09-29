import React from "react";
import styled from "styled-components";
import styles from "../stylesheets/style.scss";

const TextHeading = styled.div`
  color: ${(props) => props.color || styles.blackColor};
  font-family: ${(props) => props.family || ""};
  font-size: ${(props) =>
    `${props.size}px` || ((props) => 2 / props.level + "em")};
  text-align: center;
`;

export const Heading = ({ level = 1, children, ...props }) => (
  <TextHeading as={`h${level}`} level={level} {...props}>
    {children}
  </TextHeading>
);
