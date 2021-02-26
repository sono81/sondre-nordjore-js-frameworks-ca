import React from "react";

function Success(input) {
  input = input.input;

  return (
    <div className="form__success">
      <div className="form__success--heading">
        <strong>
          The form submitted successfuly with the following information:
        </strong>
      </div>
      <div className="form__success--body">
        <div>
          <p>First name: {input.firstName}</p>
          <p>Last name: {input.lastName}</p>
          <p>Email: {input.email}</p>
          <p>Message: {input.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
