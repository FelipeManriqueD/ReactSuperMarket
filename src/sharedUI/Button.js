import React from "react";
import styled, { css } from "styled-components";
import styles from "../stylesheets/style.scss";

const CustomButton = styled.button`
  border-radius: 10px;
  border: 1px solid transparent;
  color: ${styles.whiteColor};

  ${(props) =>
    props.className === "enabled" &&
    css`
      background: ${styles.enabledColor};
      width: 30%;
      margin: 0 auto;
      padding: 5px;
      &:hover {
        background: ${styles.activeColor};
      }
    `};

  ${(props) =>
    props.className === "disabled" &&
    css`
      background: ${styles.disabledColor};
      width: 30%;
      margin: 0 auto;
      padding: 5px;
    `};

  ${(props) =>
    props.className === "secondary" &&
    css`
      color: ${styles.blackColor};
      width: 30%;
      margin: 0 auto;
      padding: 5px;
      border-color: ${styles.blackColor};
    `};

  ${(props) =>
    props.className === "active" &&
    css`
      background: ${styles.activeColor};
    `};

  ${(props) =>
    props.className === "counter__button-enabled" &&
    css`
      border: none;
      background-color: transparent;
      color: ${styles.activeColor};
      width: 20px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
    `};

  ${(props) =>
    props.className === "counter__button-disabled" &&
    css`
      border: none;
      background-color: transparent;
      width: 20px;
      pointer-events: none;
      font-size: 16px;
      font-weight: 700;
    `};
`;

export const Button = ({ children, ...props }) => (
  <CustomButton {...props} onClick={props.clickHandler}>
    {children}
  </CustomButton>
);
