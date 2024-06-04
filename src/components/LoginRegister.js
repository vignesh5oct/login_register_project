import React, { useState } from 'react'
import { Anchor, Button, Container, Form, GhostButton, Input, LeftOverlayPanel, Overlay, OverlayContainer, Paragraph, RightOverlayPanel, SignInContainer, SignUpContainer, Title } from '../styles/loginRegister';
import { Link } from 'react-router-dom';


const LoginRegister = () => {
  const [signIn, SetSignIn] = useState(true);

  return (
    <Container>
      <SignUpContainer signIn={signIn}>
        <Form>
          <Title>Create Account</Title>
          <Input type='text' placeholder='Name' />
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Button>Sign Up</Button>
        </Form>
      </SignUpContainer>

      <SignInContainer signIn={signIn}>
        <Form>
          <Title>Sign in</Title>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Anchor><Link to={"/forget"}>Forgot your password?</Link></Anchor>
          <Button>Sign In</Button>
        </Form>
      </SignInContainer>

      <OverlayContainer signIn={signIn}>
        <Overlay signIn={signIn}>

          <LeftOverlayPanel signIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>
              To keep connected with us please login with your personal info
            </Paragraph>
            <GhostButton onClick={() => SetSignIn(!signIn)}>
              Sign In
            </GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signIn={signIn}>
            <Title>Hello!</Title>
            <Paragraph>
              Enter Your personal details and start journey with us
            </Paragraph>
            <GhostButton onClick={() => SetSignIn(!signIn)}>
              Sign Up
            </GhostButton>
          </RightOverlayPanel>

        </Overlay>
      </OverlayContainer>

    </Container>
  )
}

export default LoginRegister
