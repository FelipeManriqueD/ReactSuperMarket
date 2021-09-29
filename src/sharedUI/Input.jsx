import React from "react";
import styled, { css } from "styled-components";
import styles from "../stylesheets/style.scss";

const InputStyled = styled.input`
  border-radius: 10px;
  padding: 5px;
  background-color: ${styles.whiteColor};
  border: 1px solid ${styles.lightGray};
  margin-bottom: 5px;

  ${(props) =>
    props.error &&
    css`
      border-color: ${styles.enabledColor};
    `};

  ${(props) =>
    props.className === "counter__input" &&
    css`
      width: 40%;
      border: none;
      background-color: transparent;
      text-align: center;
      margin-bottom: 0;
      padding: 0;
    `};
`;

const Input = (props) => {
  const { name, inputType, value, handleChange, placeholder, required, onBlur, refInput } = props;

  return (
    <InputStyled
      name={name}
      type={inputType}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      ref={refInput}
      {...props}
    />
  );
};

export default Input;
