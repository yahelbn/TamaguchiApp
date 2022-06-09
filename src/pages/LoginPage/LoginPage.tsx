
import {useState,useContext} from 'react'

//Contexts
import {UserAuth} from '../../context/AuthContext'
import { Link , useNavigate} from 'react-router-dom';
import { useTheme } from 'styled-components'
import {Header, Label , ImgWrap, Img, Row} from '../../components/reuseableComponents/GlobalComponents'
import {Form, LoginContainer, FormInput, Wrapper} from './LoginPageElements'
import { Column } from '../../components/reuseableComponents/GlobalComponents/Column/Column.tsx';

//Components
import Button from '../../components/reuseableComponents/GlobalComponents/Button/Button.tsx'

//Images
import tamaguchi from '../../images/purple_tamaguchi.png';

type LoginProps = {
    message: string;
  };

export const LoginPage = ({ message },props: LoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  //Contexts
  const theme = useTheme()
  const {signIn} = UserAuth();
  const navigate = useNavigate();


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError('')

    try {
      await signIn(email,password)
      navigate('/homepage')
    }

    catch(e){
      setError(e.message)
    }
  }

  console.log('Current theme: ', theme)

  return <LoginContainer>  
            <Form onSubmit={handleOnSubmit}>
            <div>
            <Header>Sign in to your account</Header> 
            </div>
              <Wrapper>
                <Label>Email Address</Label>
                <FormInput onChange={(e)=>setEmail(e.target.value)} type="email"/>
              </Wrapper>
              <Wrapper>
                <Label>Password</Label>
                <FormInput onChange={(e)=>setPassword(e.target.value)} type="password"/>
              </Wrapper>
              <Button bg={theme.colors.signin.button.background} color={theme.colors.signin.button.color}>Sign in</Button>
              <Label>Don't have an account yet? <Link to='/signup'> Sign up</Link></Label>
            </Form>
            <Row style={{width: '100vw'}}>
              <Column spanSize={3} >
                <ImgWrap style={{transform:'rotate(30deg)'}}>
                  <Img src={tamaguchi} />
                </ImgWrap>
            </Column>
            <Column spanSize={9}></Column>
          </Row>

      </LoginContainer>
};

export default LoginPage;