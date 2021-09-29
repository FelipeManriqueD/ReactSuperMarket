import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import styles from "../stylesheets/style.scss";

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.color || styles.enabledColor};
  font-family: ${(props) => props.family || ""};
  font-size: ${(props) => props.size || "14px"};
  text-align: ${(props) => props.align || "center"};
`;

export const UILink = ({ children, ...props }) => {
  return <LinkStyled to={props.link}>{children}</LinkStyled>;
};
