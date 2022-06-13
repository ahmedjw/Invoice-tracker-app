import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2664c4;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: #9eb5da;
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;

const Title = styled.h1`
  white-space: pre-line;
  margin-left: auto;
  margin-right: auto;
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
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    rememberMe: false,
    emailError: "",
    passwordError: "",
  });

  function handleEmailInputChange(e) {
    setFormDetails({ ...formDetails, email: e.target.value, emailError: "" });
  }

  function handlePasswordInputChange(e) {
    setFormDetails({
      ...formDetails,
      password: e.target.value,
      passwordError: "",
    });
  }

  function handleRememberMeInputChange(e) {
    setFormDetails({ ...formDetails, rememberMe: e.target.value });
  }

  function handleSubmit(e) {
    var emailError = "";
    var passwordError = "";

    if (!formDetails.email) {
      emailError = "Email can't be empty";
    }

    if (!formDetails.password) {
      passwordError = "Password can't be empty";
    } else if (formDetails.password.length < 8) {
      passwordError = "Password should be at least 8 characters";
    }

    if (emailError || passwordError) {
      setFormDetails({ ...formDetails, emailError, passwordError });
      e.preventDefault();
    } else {
      alert(JSON.stringify(formDetails));
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Title>{"Sign In"}</Title>

        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <EmailInput
            type="email"
            value={formDetails.email}
            onChange={handleEmailInputChange}
          />

          {formDetails.emailError && (
            <ErrorLabel>{formDetails.emailError}</ErrorLabel>
          )}

          <Label>Password</Label>
          <PasswordInput
            type="password"
            value={formDetails.password}
            onChange={handlePasswordInputChange}
          />

          {formDetails.passwordError && (
            <ErrorLabel>{formDetails.passwordError}</ErrorLabel>
          )}

          <CheckboxContainer>
            <RememberMeCheckbox
              type="checkbox"
              checked={formDetails.rememberMe}
              onChange={handleRememberMeInputChange}
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
