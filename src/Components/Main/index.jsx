import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`

// `;
export default function Main() {
    const [info, setInfo] = useState([
        {
            nome:"Batata do Prefeito",
            preco: "R$ 20,00",
            imagem: "https://www.assai.com.br/sites/default/files/tipos_de_batata_frita_-_assai_atacadista.jpg"
        },
        {
            nome: "Coxinha",
            preco: "R$ 45,00",
            imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPB7t92LL6BKeGSDWtnUYsyHeuSMpJLlvGg&s"
        },
        {
            nome: "Coca-cola",
            preco:"R$ 18,90",
            imagem:"https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg"
        }
    ]);
    return (
        <main>
            <h1>Lanchonete do Prefeito</h1>
            <section>
                {/* info é  variável que armazena os objetos */}
                {info.map((item) => (
                    <section>
                        <img src={item.imagem} alt="{item.nome}" />
                        <h3>{item.nome} </h3>
                        <p>{item.preco}</p>
                    </section>
                ))}
            </section>
        </main>
    );
}