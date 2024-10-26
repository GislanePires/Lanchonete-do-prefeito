import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import MenuBar from "../MenuBar";
import PromoSection from "../PromoSection";

const Principal = styled.main`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Akshar", sans-serif;
  color:#949494;
  display:flex;
  flex-direction: column;
  align-items:center;
  padding: 20px 0 90px 0;

  @media(max-width:360px){
    padding-bottom: 85rem;
        
    }
`;

const ContainerImg = styled.section`
  width: 80%;
  padding: 1.5rem;
  font-weight: 300;
  font-size:0.8rem;
  
`;

const SlideItem = styled.div`
  text-align: center;
  padding: 1rem;

   @media(max-width:360px){
    width: 2rem;
    height: 3rem;
   }
  
  
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

   @media(max-width:360px){
    width: 2rem;
    height: 3rem;
   }
`;
const ContainerCards = styled.section`

display:flex;
align-items:center;
justify-content: center;
padding: 2rem;
height:100vh;
width: 68vw;
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
  align-items: start-end;
  cursor:pointer;
  transition: all 0.8s ease;

  &:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
      transform: scale(1.02); 
  }
      .aument-transi:hover::before {
      opacity: 5;
      }

`;
const ImageCard = styled.img`
  width: 10rem;
  height: 10rem;
`;
const ContainerTitulo = styled.article`
  display:flex;
  align-items:start;
  width:78%;
  font-size:1.2rem;
  color: #212121;
`;
const TitlePopulares = styled.h2`
  color: #212121;
  font-size: 2.5rem;
  font-weight: 500;
  align-self: flex-start;
  // margin-rigth: 15rem;

  @media(max-width:360px){
    font-size: 1.5rem;
    }
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
  cursor: pointer;
  transition: all 0.8s ease;
  
   &:hover {
            background-color: #1B5E20;
        }
`;
const PrecoAdd = styled.div`
  display:flex;
  justify-content: space-between;
  width:100%;
  align-items:center;
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
        nome: "X-Prefeito",
        preco: "R$ 20,00",
        imagem: "./burger-gourmet.svg"
    },
    {
        nome: "Pizza do Governo",
        preco: "R$ 45,00",
        imagem: "./pizza-card.svg",
      },
      {
        nome: "Torta do Dissídio",
        preco: "R$ 18,90",
        imagem: "./dessert-card.svg",
      },
      {
        nome: "Suco do Palácio",
        preco: "R$ 69,90",
        imagem: "./juice-card.svg"
        },
        {
          nome: "X-Acessor",
          preco: "R$ 20,00",
          imagem: "./burger-gourmet.svg"
      },
      {
          nome: "Pizza do Governo",
          preco: "R$ 45,00",
          imagem: "./pizza-card.svg",
        }
  ]);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <Principal>
     <MenuBar />
      <SearchBar />
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
      <PromoSection />
    <ContainerCards>
        <ContainerTitulo>
          <TitlePopulares>Populares</TitlePopulares>
        </ContainerTitulo>
    {card.map((item) => (
            <ContainerCardsImg>
              <ImageCard src={item.imagem} alt={item.nome} />
              <p>{item.nome}</p>
              <PrecoAdd>
              <PrecoCard>{item.preco}</PrecoCard>
              <AddProduto>+</AddProduto>
              </PrecoAdd>
            </ContainerCardsImg>
          ))}
    </ContainerCards>
    </Principal>
  );
}
