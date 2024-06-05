import React, { useRef, useState } from 'react'
import { Anchor, Button, Container, ErrorMessage, ForgetContainer, Form, Input, Main, Overlay, OverlayContainer, Paragraph, RightOverlayPanel, Title } from '../styles/loginRegister'
import { Link } from 'react-router-dom';
import { auth } from "../utils/firebase"
import { sendPasswordResetEmail } from 'firebase/auth';

const Forget = () => {
  const [signIn] = useState(true);
  const email = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);


  const handleReset = () => {
    console.log(email.current.value)
    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        alert("Email is sent")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }

  return (
    <Main>
      <Container>
        <ForgetContainer>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Title>Password Reset</Title>
            <Input ref={email} type='email' placeholder='Email' />
            <ErrorMessage>{errorMessage}</ErrorMessage>

            <Button onClick={handleReset}>Reset</Button>
          </Form>
        </ForgetContainer>
        <OverlayContainer signIn={signIn}>
          <Overlay signIn={signIn}>
            <RightOverlayPanel signIn={signIn}>
              <Title>Already User!</Title>
              <Paragraph>
                Please login with your personal info in Login Page
              </Paragraph>
              <Anchor>
                <Link to={"/"}>Login / Register</Link>
              </Anchor>
            </RightOverlayPanel>

          </Overlay>
        </OverlayContainer>

      </Container>
    </Main>

  )
}

export default Forget
