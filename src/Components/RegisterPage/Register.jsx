import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Heading } from "../../sharedUI/TextHeading";
import Form from "../Form/Form";
import { RegisterData } from "../../utils/tools";

export const Register = (props) => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const onClickHandler = () => {
    history.push("/login");
  };

  return (
    <div className="login__home">
      <Heading level={1}>{RegisterData.title}</Heading>
      <Form
        submitForm={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        buttonClickHandler={onClickHandler}
        {...RegisterData}
      />
    </div>
  );
};
