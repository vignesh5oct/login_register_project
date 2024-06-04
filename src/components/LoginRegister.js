import React, { useRef, useState } from 'react'
import { Anchor, Button, Container, ErrorMessage, Form, GhostButton, Input, LeftOverlayPanel, Main, Overlay, OverlayContainer, Paragraph, RightOverlayPanel, SignInContainer, Title } from '../styles/loginRegister';
import { Link } from 'react-router-dom';
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import Header from './Header';
import '../styles/login.css';




const LoginRegister = () => {
  const [signIn, SetSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    if (!signIn) {
      const message = checkValidData(email.current.value, password.current.value, fullname.current.value);
      setErrorMessage(message);

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName
                })
              );
            })
            .catch((error) => {
              setErrorMessage(message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    } else {
      const message = checkValidData(email.current.value, password.current.value);
      // console.log(email.current.value, password.current.value)
      setErrorMessage(message);

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

        });
    }

  };

  return (
    <Main>
      <Container>
        <Header />
        <SignInContainer signIn={signIn}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Title>{signIn ? "Sign In" : "Sign Up"}</Title>
            {!signIn && <Input ref={fullname} type='text' placeholder='Name' />}
            <Input ref={email} type='email' placeholder='Email' />
            <Input ref={password} type='password' placeholder='Password' />
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Anchor><Link to={"/forget"}>Forgot your password?</Link></Anchor>
            <Button onClick={handleButtonClick}>{signIn ? "Sign In" : "Sign Up"}</Button>
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
    </Main>

  )
}

export default LoginRegister
