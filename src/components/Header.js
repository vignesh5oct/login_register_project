import React, { useEffect } from 'react'
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Anchor, AnchorButton, AnchorLink, Button, HeaderStyle, Items } from '../styles/header';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user &&
        <HeaderStyle>
          <Items>
            <AnchorLink><Link to={"/"}>Home</Link></AnchorLink>
          </Items>
          <Items>
            <Anchor>{user?.displayName}</Anchor>
            <Anchor>{user?.email}</Anchor>
            <Button onClick={handleSignOut}>Sign out</Button>
          </Items>
        </HeaderStyle>
      }
    </>


  )
}

export default Header
