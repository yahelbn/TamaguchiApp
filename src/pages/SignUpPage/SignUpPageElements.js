import styled from 'styled-components';


export const SignUpContainer = styled.div`
    height:80vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #F9FFF8;

`

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.signin.form.background };
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
  @media screen and(max-width:${({ theme }) => theme.mobile }) {
    width: 80%;
  }
  
`


export const FormInput = styled.input`
    width: 100%;
    margin: 2px 0;
    height: ${props => props.height || '30px'};
    padding: 0 6px;
    border:1.6px solid #d1d7de;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: left;
    vertical-align: top;
    border-radius: 5px;
`



export const Wrapper = styled.div`
  margin:20px;
`