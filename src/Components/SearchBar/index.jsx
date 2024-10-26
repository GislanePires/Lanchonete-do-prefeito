import React from "react";
import { Icon } from '@iconify/react';
import styled from "styled-components";

const Search = styled.div`
  width: 65%;
  height: 10vh;
`;
const SearchInput = styled.input`
  background-color: rgb(196,196,196, 0.38);
  width:95%;
  height: 60%;
  border:none;
  border-radius: 2rem;
  padding: 0 3px 0 45px;
  color: #C5C4D9;
  // cursor: pointer;
  outline:none;

  &:hover {
    border: none;
    background-color: rgb(196,196,196, 0.6)
    }
    &:focus {
    color: #212121;
      
  }

`;
const StyledIcon = styled(Icon)`
  position: relative;
  left: 1.5rem;
  bottom: 1.7rem;
`;

export default function SearchBar() {
 
  return (
      <Search>
        <SearchInput 
        type="text" 
        placeholder="Pesquisar" 
        />
          <StyledIcon 
        icon="simple-line-icons:magnifier" 
        onChange=""
        />
      </Search>
   
  );
}

