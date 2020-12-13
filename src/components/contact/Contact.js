import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Alert from "react-bootstrap/Alert";

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

  function onSubmit(data) {
    console.log("data", data);
    //alert("Your message was sent with the following information:\n First name: " + data.firstName + "\n Last name: " + data.lastName + "\n Email: " + data.email + "\n Message: " + data.message);

    let formSuccess = document.querySelector(".form-success");
    formSuccess.innerHTML = ` <strong>The form submitted successfuly with the following information: </strong>
                              <p>
                                First name: ${data.firstName}<br />
                                Last name: ${data.lastName}<br />
                                Email: ${data.email}<br />
                                Message:<br />
                                ${data.message}<br />
                              </p>
                              `;
    formSuccess.style.display = "block";
  }

  return (
    <Container>
      <Alert
        variant="success"
        className="form-success"
        style={{ display: "none" }}
      ></Alert>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First name"
              ref={register({ required: true })}
            />
            <Form.Text>
              {errors.firstName && (
                <span style={{ color: "red" }}>{errors.firstName.message}</span>
              )}
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last name"
              ref={register({ required: true })}
            />
            <Form.Text>
              {errors.lastName && (
                <span style={{ color: "red" }}>{errors.lastName.message}</span>
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
            ref={register({ required: true })}
          />
          <Form.Text>
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Message"
            ref={register({ required: true })}
          />
          <Form.Text>
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message.message}</span>
            )}
          </Form.Text>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
