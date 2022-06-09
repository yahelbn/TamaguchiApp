import styled from 'styled-components'




export const HomeContainer = styled.div`
    height:80vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F9FFF8;

`



export const Header = styled.h1`
 font-family: "Tamagotchi-Normal";
 color:${({theme})=>theme.colors.header}

`