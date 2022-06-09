import styled from 'styled-components';



export const Title = styled.h1`
 font-family: "KGILikeToMoveIt";
 color: ${({theme}) => theme.colors.header.title}
`;

export const Header = styled.h2`
 font-family: "Tamagotchi-Normal";
 margin: 10px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Label = styled.span`
 margin:10px;
 font-family: "Tamagotchi-Normal";
 color: ${({ theme }) => theme.colors.label.color}
`



export const ImgWrap = styled.div`
  width: 250px;
  border-radius: 30px;
  height: 250px;
  margin: 10px 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 160px;
    width: 160px;
  }
 
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 30px;
`;