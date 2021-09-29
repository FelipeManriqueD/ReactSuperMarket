import React from "react";
import styled, { css } from "styled-components";

import Input from "../../sharedUI/Input";
import { Button } from "../../sharedUI/Button";
import { Paragraph } from "../../sharedUI/Paragraph";
import { UILink } from "../../sharedUI/Link";
import styles from "../../stylesheets/style.scss";

const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  text-align: left;
`;

const LabelStyled = styled.label`
  margin-bottom: 5px;

  ${(props) =>
    props.className === "error" &&
    css`
      color: ${styles.enabledColor};
    `};
`;

const Form = ({
  submitForm,
  register,
  errors,
  inputs,
  showAuxContent,
  linkRegister,
  id,
  buttonClickHandler,
}) => {
  return (
    <form className="form" onSubmit={submitForm}>
      {renderInputs(register, errors, inputs)}
      {showAuxContent && <AuxContent link={linkRegister} />}
      <ButtonsGroup
        showAuxContent={showAuxContent}
        id={id}
        buttonClickHandler={buttonClickHandler}
      />
    </form>
  );
};

const renderInputs = (register, errors, inputs) => {
  return (
    inputs &&
    inputs.map(({ name, title, id, inputType, caption }, index) => {
      switch (name) {
        case "email":
          return (
            <FormGroupStyled key={id}>
              <LabelStyled
                htmlFor={name}
                className={`${errors.email ? "error" : ""}`}
              >
                {title}
              </LabelStyled>
              <Input
                inputType={inputType}
                title={title}
                name={name}
                refInput={register({ required: true })}
                key={`${id}-${index}`}
              />
              {errors.email && ErrorMsg}
            </FormGroupStyled>
          );
        case "password":
          return (
            <FormGroupStyled key={id}>
              <LabelStyled
                htmlFor={name}
                className={`${errors.password ? "error" : ""}`}
              >
                {title}
              </LabelStyled>
              <Input
                inputType={inputType}
                title={title}
                name={name}
                refInput={register({ required: true })}
                key={`${id}-${index}`}
              />
              {caption && <Paragraph align={"left"}>{caption}</Paragraph>}
              {errors.password && ErrorMsg}
            </FormGroupStyled>
          );
        case "phone":
          return (
            <FormGroupStyled key={id}>
              <LabelStyled
                htmlFor={name}
                className={`${errors.phone ? "error" : ""}`}
              >
                {title}
              </LabelStyled>
              <Input
                inputType={inputType}
                title={title}
                name={name}
                refInput={register({ required: true })}
                key={`${id}-${index}`}
              />
              {errors.phone && ErrorMsg}
            </FormGroupStyled>
          );
        case "text":
          return (
            <FormGroupStyled key={id}>
              <LabelStyled
                htmlFor={name}
                className={`${errors.text ? "error" : ""}`}
              >
                {title}
              </LabelStyled>
              <Input
                inputType={inputType}
                title={title}
                name={name}
                refInput={register({ required: true })}
                key={`${id}-${index}`}
              />
              {errors.text && ErrorMsg}
            </FormGroupStyled>
          );

        default:
          return <div key={`ni-${index}`}>No Inputs</div>;
      }
    })
  );
};

const ErrorMsg = (
  <Paragraph color={styles.alertColor} align={"left"}>
    {"Este campo es obligatorio"}
  </Paragraph>
);

const AuxContent = (props) => (
  <div className="form__aux">
    <Paragraph>{"¿Olvido su contraseña?"}</Paragraph>
    <Paragraph>
      {"¿Es nuevo en Quiero En casa? "}
      <UILink link={props.link}>{"Registrese gratis"}</UILink>
    </Paragraph>
  </div>
);

const ButtonsGroup = ({ showAuxContent, buttonClickHandler }) => {
  const buttonActionColor = true ? `enabled` : `disabled`;

  return (
    <div className="form__group buttons__container">
      {!showAuxContent && (
        <Button
          className={"secondary"}
          clickHandler={() => buttonClickHandler("cancel")}
        >
          {"Cancelar"}
        </Button>
      )}
      <Button className={buttonActionColor} type="submit">
        {showAuxContent ? "Ingresar" : "Registrarme"}
      </Button>
    </div>
  );
};

export default Form;
