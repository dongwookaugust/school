import React from "react";
import Button from "react-bootstrap/Button";
import "./Pages.css";

function Login() {
  return (
    <div className="page">
      <div className="titleWrap">Login</div>
      <div className="contentWrap">
        <div className="inputWrap">
          <input type="text" className="input" placeholder="User name" />
        </div>
        <br />
        <div className="inputWrap">
          <input type="password" className="input" placeholder="Password" />
        </div>
        <br />
      </div>
      <Button variant="primary" size="lg">
        Submit
      </Button>{" "}
      <br />
      <br />
      {/* <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Submit
        </Button>
      </div> */}
    </div>
  );
}

export default Login;
