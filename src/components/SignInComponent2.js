import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const PasswordInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`;

function SignInComponent() {
  function handleValidation(values) {
    if (!values.email) {
      values.emailError = "Email can't be empty";
    }

    if (!values.password) {
      values.passwordError = "Password can't be empty";
    } else if (values.password.length < 8) {
      values.passwordError = "Password should be at least 8 characters";
    }
  }
  const signForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      emailError: "",
      passwordError: "",
    },
    validate: () => handleValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <ContentContainer>
        <Title>{"Sign In"}</Title>

        <Form onSubmit={signForm.handleSubmit}>
          <Label>Email</Label>
          <EmailInput
            type="email"
            name="email"
            value={signForm.values.email}
            onChange={signForm.handleChange}
          />

          {signForm.values.emailError && (
            <ErrorLabel>{signForm.values.emailError}</ErrorLabel>
          )}

          <Label>Password</Label>
          <PasswordInput
            type="password"
            name="password"
            value={signForm.values.password}
            onChange={signForm.handleChange}
          />

          {signForm.values.passwordError && (
            <ErrorLabel>{signForm.values.passwordError}</ErrorLabel>
          )}

          <CheckboxContainer>
            <RememberMeCheckbox
              type="checkbox"
              name="checkbox"
              checked={signForm.values.rememberMe}
              onChange={signForm.handleChange}
            />
            <CheckboxLabel>Remember me</CheckboxLabel>
          </CheckboxContainer>

          <SubmitButton type="submit" />
        </Form>
      </ContentContainer>
    </Container>
  );
}

export default SignInComponent;
