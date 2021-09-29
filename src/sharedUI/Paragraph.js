import React from "react";
import styled, { css } from "styled-components";
import styles from "../stylesheets/style.scss";

const ParagraphText = styled.p`
  color: ${(props) => props.color || styles.blackColor};
  font-family: ${(props) => props.family || ""};
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  text-align: ${(props) => (props.align ? `${props.align}` : "center")};
  text-decoration: ${(props) =>
    props.decoration ? `${props.decoration}` : ""};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "")};
  margin-right: ${(props) =>
    props.marginRight ? `${props.marginRight}px` : ""};
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}px` : "")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : ""};

  ${(props) =>
    props.className === "active" &&
    css`
      border-bottom: 4px solid ${styles.enabledColor};
    `};

  ${(props) =>
    props.className === "error" &&
    css`
      color: ${styles.alertColor};
    `};
`;

export const Paragraph = ({ children, ...props }) => {
  return <ParagraphText {...props}>{children}</ParagraphText>;
};
