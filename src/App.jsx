import React from 'react';
import Main from './Components/Main/index';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding: 0;
boxing-siz: border-box;
}

body {
background: rgb(2,0,36);
background: linear-gradient(165deg, rgba(2,0,36,1) 0%, rgba(3,3,23,1) 41%, rgba(102,0,255,1) 100%);
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

