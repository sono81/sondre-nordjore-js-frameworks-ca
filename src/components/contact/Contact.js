import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Alert from "react-bootstrap/Alert";
import Success from "./Success";

const schema = yup.object().shape({
  firstName: yup.string().min(2).required("Please enter your first name"),
  lastName: yup.string().min(2).required("Please enter your last name"),
  email: yup.string().required("Please enter your email"),
  message: yup.string().min(10).required("Please enter your message"),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const [input, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  function onSubmit(data) {
    console.log("data", data);
    setSuccess(true);
    //alert("Your message was sent with the following information:\n First name: " + data.firstName + "\n Last name: " + data.lastName + "\n Email: " + data.email + "\n Message: " + data.message);
  }

  const firstNameInputChange = (e) => {
    setInputs({ ...input, firstName: e.target.value });
  };
  const lastNameInputChange = (e) => {
    setInputs({ ...input, lastName: e.target.value });
  };
  const emailInputChange = (e) => {
    setInputs({ ...input, email: e.target.value });
  };
  const messageInputChange = (e) => {
    setInputs({ ...input, message: e.target.value });
  };

  return (
    <Container>
      <Alert
        variant="success"
        className="form__success"
        // I need this inline style to hide the alert until successful submit.
        style={{ display: "none" }}
      ></Alert>
      {success && <Success input={input} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First name"
              value={input.firstName}
              onChange={firstNameInputChange}
              ref={register({ required: true })}
            />
            <Form.Text>
              {errors.firstName && (
                <span className="form__error">{errors.firstName.message}</span>
              )}
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last name"
              value={input.lastName}
              onChange={lastNameInputChange}
              ref={register({ required: true })}
            />
            <Form.Text>
              {errors.lastName && (
                <span className="form__error">{errors.lastName.message}</span>
              )}
            </Form.Text>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={input.email}
            onChange={emailInputChange}
            ref={register({ required: true })}
          />
          <Form.Text>
            {errors.email && (
              <span className="form__error">{errors.email.message}</span>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Message"
            value={input.message}
            onChange={messageInputChange}
            ref={register({ required: true })}
          />
          <Form.Text>
            {errors.message && (
              <span className="form__error">{errors.message.message}</span>
            )}
          </Form.Text>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
