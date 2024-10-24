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
flex-direction:column;
align-items:center;
justify-content: space-around;
padding: 2rem;
border:solid 2px pink;
height:100vh;
width: 80vw;
flex-wrap:wrap;

`;
const ContainerCardsImg = styled.div`
border:solid 2px red;
height:60vh

`;
const ImageCard = styled.img`
    width: 15rem;
    height: 10rem;
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
        imagem: "https://www.assai.com.br/sites/default/files/tipos_de_batata_frita_-_assai_atacadista.jpg"
    },
    {
        nome: "Coxinha",
        preco: "R$ 45,00",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPB7t92LL6BKeGSDWtnUYsyHeuSMpJLlvGg&s",
      },
      {
        nome: "Coca-cola",
        preco: "R$ 18,90",
        imagem: "https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg",
      },
      {
        nome: "X-Prefeito",
        preco: "R$ 69,90",
        imagem: "./burger.svg"
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
        <h2>Populares</h2>
    {card.map((item) => (
            <ContainerCardsImg>
              <ImageCard src={item.imagem} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.preco}</p>
              <div>+</div>
            </ContainerCardsImg>
          ))}
    </ContainerCards>
    </Principal>
  );
}
