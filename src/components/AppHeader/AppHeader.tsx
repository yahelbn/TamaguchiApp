//Components
import { StyledHeader, Nav, Logo, Image, Container, UserLabel } from './AppHeaderElements'
import { Row } from '../../components/reuseableComponents/GlobalComponents'
import { Column } from '../../components/reuseableComponents/GlobalComponents/Column/Column.tsx'
import { Title ,ImgWrap, Img} from '../../components/reuseableComponents/GlobalComponents'
import DarkModeToggle from "react-dark-mode-toggle";
import Button  from '../../components/reuseableComponents/GlobalComponents/Button/Button.tsx'

//Contexts
import {UserAuth} from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";

//Icon
import tama_icon from './../../images/tama_icon.png'


export default function AppHeader({isDarkMode,setIsDarkMode}) {
  
  const {user,logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async() =>{
    try {
      await logout()
      navigate('/')
    }
    catch(e) {
      console.log(e.message)
    }
  }

  const fixUserString = (userEmail) => {
    return user && userEmail.substring(0, userEmail.indexOf('@'));
  }

  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column spanSize={7}>
            <Row>        
              <ImgWrap style={{transform:'rotate(30deg)',height:'50px',width:'50px'}}>
                  <Img src={tama_icon} />
                </ImgWrap>
              <Title color="#fff">Tamagu app</Title>
            </Row>
          </Column>
            <Column spanSize={1}>
              <DarkModeToggle
                  onChange={setIsDarkMode}
                  checked={isDarkMode}
                  size={60}/>
                  </Column>
            <Column spanSize={2}>
              {user ? 
                <>
                  {/* <UserLabel>{fixUserString(user?.email)}</UserLabel>  */}
                </>
              : <Button onClick={()=>navigate('/signup')}>Try It Free</Button>}
              </Column>

              <Column spanSize={2}>
              {user ? 
                <>
                  <Button onClick={handleLogOut}>Log out</Button>
                </>
              : <Button onClick={()=>navigate('/')}>Log in</Button>}
              </Column>
        </Row>
        {/* <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex> */}
      </Container>
    </StyledHeader>
  )
}