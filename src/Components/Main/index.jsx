import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Principal = styled.main`
  border: solid 1px green;
  width: 90vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Akshar", sans-serif;
  color:#949494;

`;

const ContainerImg = styled.section`
//   background-color: #ebcba8;
  width: 80%;
  padding: 1.5rem;
  font-weight: 300;
  font-size:0.8rem;
  
`;

const SlideItem = styled.div`
  text-align: center;
  padding: 1rem;
  
  
`;

const Image = styled.img`
  background-color: rgb(196,196,196, 0.38);
  width: 7rem;
  height: 6rem;
  margin: 0 auto;
  border-radius:0.8rem;
  margin-bottom:0.8rem;

  &:hover {
    background-color: #6929F0;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.59);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.59);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.59);
    cursor:pointer;
    transform: translateY(-5px);
        }
    transition: all 0.8s ease;
  }
`;
const ContainerCards = styled.section`

display:flex;
align-items:center;
justify-content: space-around;
padding: 2rem;
border:solid 2px pink;
height:100vh;
width: 50vw;
flex-wrap:wrap;
gap:2rem;

`;
const ContainerCardsImg = styled.div`
background-color: rgb(196,196,196, 0.38);
border-radius: 1rem;
padding: 2rem;
width: 10rem;;
height:80vh
display: flex;
flex-direction: column;
// justify-contente: space-around;
align-items: start-end;

`;
const ImageCard = styled.img`
    width: 10rem;
    height: 10rem;
`;
const ContainerTitulo = styled.article`
  display:flex;
  align-items:start;
  background-color: pink;
  width:78%;
  font-size:1.2rem;
`;
const PrecoCard = styled.p`
  color: #9B8C00;
`;
const AddProduto = styled.div`
  background-color: #359014;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: #fff;
  border-radius: 100rem;

`;
export default function Main() {
  const [info, setInfo] = useState([
    {
      nome: "Tudo",
      preco: "R$ 20,00",
      imagem: "./fries_fish.svg",
    },
    {
      nome: "Pizza",
      preco: "R$ 45,00",
      imagem: "./pizza.svg",
    },
    {
      nome: "Bebidas",
      preco: "R$ 18,90",
      imagem: "./coca.svg",
    },
    {
        nome: "Sanduíches",
        preco: "R$ 69,90",
        imagem: "./burger.svg"
      },
      {
        nome: "Sobremesas",
        preco: "R$ 69,90",
        imagem: "./desserts.svg"
      },
      {
        nome: "Petiscos",
        preco: "R$ 69,90",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnI_E1fKRf865JZesgFJZOnKYPS8wDevQloyQN8dzvqTshoHSGJxllbUWkelEccRE6_PM&usqp=CAU"
      }
  ]);
  const [card, setCard] = useState([
    {
        nome: "Batata do Prefeito",
        preco: "R$ 20,00",
        imagem: "./burger-gourmet.svg"
    },
    {
        nome: "Coxinha",
        preco: "R$ 45,00",
        imagem: "./pizza-card.svg",
      },
      {
        nome: "Coca-cola",
        preco: "R$ 18,90",
        imagem: "./dessert-card.svg",
      },
      {
        nome: "X-Prefeito",
        preco: "R$ 69,90",
        imagem: "./juice-card.svg"
        }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Principal>
      <h1>Lanchonete do Prefeito</h1>
      <ContainerImg>
        <Slider {...settings}>
          {info.map((item, index) => (
            <SlideItem key={index}>
              <Image src={item.imagem} alt={item.nome} />
              <h3>{item.nome}</h3>
              {/* <p>{item.preco}</p> */}
            </SlideItem>
          ))}
        </Slider>
      </ContainerImg>
    <ContainerCards>
        <ContainerTitulo>
          <h2>Populares</h2>
        </ContainerTitulo>
    {card.map((item) => (
            <ContainerCardsImg>
              <ImageCard src={item.imagem} alt={item.nome} />
              <p>{item.nome}</p>
              <PrecoCard>{item.preco}</PrecoCard>
              <AddProduto>+</AddProduto>
            </ContainerCardsImg>
          ))}
    </ContainerCards>
    </Principal>
  );
}
