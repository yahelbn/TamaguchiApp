

//Components
import {Header, Label, Row, Img, ImgWrap} from '../../components/reuseableComponents/GlobalComponents'
import Button from '../../components/reuseableComponents/GlobalComponents/Button/Button.tsx'
import { Form, SignUpContainer, Wrapper, FormInput } from './SignUpPageElements'
import { Column } from '../../components/reuseableComponents/GlobalComponents/Column/Column.tsx';

//Contexts
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import {UserAuth} from '../../context/AuthContext'
import { useTheme } from 'styled-components'

//Images
import tamaguchi from '../../images/tamagotchi.png';

type LoginProps = {
    message: string;
  };

export const SignUpPage = ({ message }: LoginProps) => {
  
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')

        const theme = useTheme()
        const {createUser} = UserAuth();
        const navigate = useNavigate()

        const handleSubmit = async (e) => {
          e.preventDefault();
          setError('');
          
          try {
            await createUser(email,password)
            navigate('/homepage')
          }
          catch(e){
            setError(e.message)
            console.log(e.message)

          }
        }
  
  
  
  return <SignUpContainer>  
            <Form onSubmit={handleSubmit}>
              <Wrapper>
              <Header>Sign up for a free account</Header> 
              </Wrapper>
              <Wrapper>
                <Label>Email Address</Label>
                <FormInput onChange={(e)=>setEmail(e.target.value)} type="email"/>
              </Wrapper>
              <Wrapper>
                <Label>Password</Label>
                <FormInput onChange={(e)=>setPassword(e.target.value)} type="password"/>
              </Wrapper>
              <Button bg={theme.colors.signin.button.background} color={theme.colors.signin.button.color}>Sign up</Button>
              <Wrapper>
              <Label>Already have an account yet? <Link to='/'> Sign in</Link></Label>
              </Wrapper>
            </Form>
              <Row style={{width: '100vw'}}>
                      <Column spanSize={9}></Column>
                        <Column spanSize={3} >
                          <ImgWrap style={{transform:'rotate(-40deg)', height:'170px',width:'170px'}}>
                            <Img src={tamaguchi} />
                          </ImgWrap>
                      </Column>
                    </Row>
          </SignUpContainer>
};

export default SignUpPage;