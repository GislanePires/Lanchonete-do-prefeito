import React from 'react';
import Main from './Components/Main/index';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding: 0;
boxing-sizing: border-box;
}

body {
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 58%, rgba(221,221,230,1) 100%);

}


`;
export default function App() {


  return (
    <>
    <GlobalStyle />
    <Main />
    </>
  )
}

