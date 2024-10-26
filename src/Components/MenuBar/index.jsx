import styled from "styled-components";

const MenuTextImg = styled.div`
width: 58vw;
height: 30vh;
display: flex;
align-items: center;
justify-content: space-between;
color: #212121;
font-size: 2rem;
font-family: "Akshar", sans-serif;
font-weight:300;

     @media(max-width:360px){
        font-size: 1rem;
     }

`;
const MenuImg = styled.img`
    width: 10vw;
    height:20vh;
    border-radius: 50%;

    @media(max-width:360px){
        width: 4rem;
        height: 4rem;
    }
`;

export default function MenuBar(){
    return (
        <section>
            <MenuTextImg>
             <h1>Menu</h1>
            <MenuImg src="/prefeito.png" alt="User" />
            </MenuTextImg>
        </section>
    );

}