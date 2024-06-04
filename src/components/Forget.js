import React, { useState } from 'react'
import { Anchor, Button, Container, ForgetContainer, Form,  Input, Overlay, OverlayContainer, Paragraph, RightOverlayPanel, Title } from '../styles/loginRegister'
import { Link } from 'react-router-dom';

const Forget = () => {
  const [signIn] = useState(true);

  return (
    <Container>
      <ForgetContainer>
        <Form>
          <Title>Password Reset</Title>
          <Input type='text' placeholder='Name' />
          <Input type='email' placeholder='Email' />
          <Button>Reset</Button>
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
  )
}

export default Forget
