import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const PasswordField = styled(Field)`
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
  font-size: 20px;
  color: red;
`;

function SignInComponent() {
  let FormSchema = yup.object().shape({
    email: yup
      .string()
      .email("not a valid Email")
      .required("this Field is Required"),
    password: yup
      .string()
      .min(8, "Password should be at least 8 characters")
      .required("this Field is Required"),
  });
  return (
    <Container>
      <ContentContainer>
        <Title>{"Sign In"}</Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={(props) => {
            alert(JSON.stringify(props, null, 2));
          }}
          validationSchema={FormSchema}
        >
          {(props) => (
            <Form
              onSubmit={props.handleSubmit}
              style={{ display: "flex", flexDirection: "column", padding: 30 }}
            >
              <Label>Email</Label>
              <EmailField
                type="email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
              />

              <ErrorMessage name="email">
                {(err) => <ErrorLabel>{err}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <PasswordField
                type="password"
                name="password"
                value={props.values.password}
                onChange={props.handleChange}
              />

              <ErrorMessage name="password">
                {(err) => <ErrorLabel>{err}</ErrorLabel>}
              </ErrorMessage>

              <CheckboxContainer>
                <RememberMeCheckbox
                  type="checkbox"
                  name="checkbox"
                  checked={props.values.rememberMe}
                  onChange={props.handleChange}
                />
                <CheckboxLabel>Remember me</CheckboxLabel>
              </CheckboxContainer>

              <SubmitButton type="submit" disabled={props.isValidating} />
            </Form>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  );
}

export default SignInComponent;
