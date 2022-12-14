import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { signin } from "redux/auth/auth-operations";

import Logo from "components/Logo/Logo";
import { Button, StyledLink } from "styles/Shared.styled";
import {
  AuthContainer,
  LogoWrapper,
  FormWrapper,
  StyledForm,
  StyledLabel,
  StyledField,
  EmailLogo,
  PasswordLogo,
  AuthError,
  ButtonWrapper,
} from "../Auth.styled";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("Please, enter your email"),
    password: yup.string().required(`Please, enter your password`),
  });

  const onSubmit = (values) => {
    dispatch(signin(values));
  };

  return (
    <AuthContainer>
      <FormWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>
                <StyledField
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={values.name}
                  onChange={handleChange}
                />
                <EmailLogo />
                {touched.email && errors.email && (
                  <AuthError>{errors.email}</AuthError>
                )}
              </StyledLabel>
              <StyledLabel>
                <StyledField
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.name}
                  required={true}
                  onChange={handleChange}
                />
                <PasswordLogo />
                {((errors.password && values.password) || touched.password) && (
                  <AuthError>{errors.password}</AuthError>
                )}
              </StyledLabel>
              <ButtonWrapper>
                <Button primary marginBotom="20px" type="submit">
                  SIGN IN
                </Button>
                <StyledLink to="/signup" outlined="true">
                  SIGN UP
                </StyledLink>
              </ButtonWrapper>
            </StyledForm>
          )}
        </Formik>
      </FormWrapper>
    </AuthContainer>
  );
};

export default LoginForm;
