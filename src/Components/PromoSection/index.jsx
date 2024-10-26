import styled from "styled-components";

const SectionPromo = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    width: 90vw;
    height:50vh;
    margin: 5rem;

    @media(max-width:420px){
        width: 100%;
        height: 70vh;
        }
    `;
    const TitlePromo = styled.h2`
        align-self: flex-start;
        margin-left: 15rem;
        color: #212121;
        font-size: 2.5rem;
        font-weight: 500;

        @media(max-width:420px){
        align-self: center;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        }

        @media(max-width:360px){
        font-size: 1.5rem;
        margin-left:2rem;
        padding-bottom: 2.5rem;

   }
    `;
    const Promo = styled.div`
    background-color: rgb(105, 41, 240, 0.72);
    width: 60%;
    height:50%;
    border-radius: 3rem;
    padding: 2rem;
    display:flex;
    justify-content: space-between;

    cursor:pointer;
  transition: all 0.8s ease;

  &:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
      transform: scale(1.02); 
  }
      .aument-transi:hover::before {
      opacity: 5;
      }
    @media(max-width:600px){
        flex-direction:row;
        width: 70%; 
        
    }
        @media(max-width:420px){
        width: 70%;
        height: 100%;
        flex-direction:column;
        }


        @media(max-width:360px){
            width:60vw;
            flex-direction:column;
            justify-content: space-around;
            
   }
    `;
    const ImagePromo = styled.img`
        position:relative;
        bottom: 5rem;
        left: 4rem;
        height: 12rem;

        @media(max-width:600px){
        width: 18rem;
        height: 8rem;
        bottom:4rem;
        left: -1rem;
        
    }

        @media(max-width:420px){
        width: 90%;
        height: 70%;
        left: 1.5rem;
        }

        @media(max-width:360px){
            width: 90%;
            height: 70%;
            left:1rem;
            bottom:5rem;
    }
   }
    `;
    const ContainerText = styled.article`
    
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 1.2rem;
        color: #fff;

        @media(max-width:600px){
        text-align:center;
        
    }

        @media(max-width:420px){
        width: 100%;
        height: 100%;
        position:relative;
        bottom:2rem;
        text-align:center;
        }

        @media(max-width:360px){
        font-size: 0.8rem;
        width: 100%;
        height:90%;
        position:relative;
        bottom: 3rem;
   }
        
    `;
    const FocusText = styled.p`
        font-size: 1.5rem;
        font-weight: 500;

        @media(max-width:360px){
        font-size: 0.9rem;
   }
    `;

export default function PromoSection(){
    return(
        <SectionPromo>
            <TitlePromo>Promoções</TitlePromo>
        <Promo>
            <ImagePromo src="./fries-promo.svg" alt="" />
            <ContainerText>
                <p>Oferta de hoje:</p>
                <FocusText>Uma porção de batata frita grátis</FocusText>
                <p>em pedidos acima de R$50,00</p>
            </ContainerText>
        </Promo>
        </SectionPromo>
    );
}