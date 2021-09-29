import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Heading } from "../../sharedUI/TextHeading";
import Form from "../Form/Form";
import { LoginData } from "../../utils/tools";
import { getTokenKey, login } from "../../utils/tools";
import { checkUser } from "../../actions";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    props.checkUser(data);
  };

  React.useEffect(() => {
    if (props.user.response && props.user.response.status === 201) {
      getTokenKey(props.user.response.data);
      login(history);
    }
  }, [props.user, history]);

  return (
    <div className="login__home">
      <Heading level={1}>{LoginData.title}</Heading>
      <Form
        submitForm={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        {...LoginData}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const connectedLoginPage = connect(mapStateToProps, {
  checkUser,
})(Login);

export { connectedLoginPage as Login };
