import React from 'react'
import  "../styles/home.css"
import styled from 'styled-components'
import TopBar from './pages/topBar/TopBar';
import HomePage from './pages/homePage/HomePage';


const Home = () => {

  const Bg = styled.div`
  width: 1600px;
  height: 1800px;
  background: #F5F5F5 0% 0% no-repeat padding-box;
  opacity: 1;
  `;
  

  return (
    <Bg className='home'>
      <TopBar/>
      <HomePage/>
    </Bg>
  )
}

export default Home
