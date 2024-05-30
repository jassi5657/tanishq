import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "../../axios";
function SignUp() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");


  const signup = (e) => {
    e.preventDefault();
    const data = 
    axios
      .post("http://localhost:4000/user/addUser", { email, password, username,city,zip })
      .then((res) => alert(res.data.message, "added"))
      .catch((err) => console.warn({err:"there is an error in this"}));

      console.log(data);

    // navigate("/login");
  };
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        {/* <img src="./amazon_logo.png" alt="" /> */}
      </Logo>
      <FormContainer>
        <h3>Sign-Up</h3>
        <InputContainer>
          <p>FullName</p>
          <input
            type="text"
            placeholder="John Smith"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>

        <InputContainer>
          <p>City</p>
          <input
            type="text"
            placeholder="enter your city name"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </InputContainer>

        <InputContainer>
          <p>Zip</p>
          <input
            type="number"
            placeholder="eg:123456"
            onChange={(e) => setZip(e.target.value)}
            value={zip}
          />
        </InputContainer>

        <SignUpButton onClick={signup}>signup</SignUpButton>
      </FormContainer>

      {/* <LoginButton onClick={() => navigate("/login")}>
        Back to Login
      </LoginButton> */}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    </Container>
  );
}
const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

const LoginButton = styled.button`
  width: 55%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default SignUp;
