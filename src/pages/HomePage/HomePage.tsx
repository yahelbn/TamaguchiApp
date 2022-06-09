
import { useNavigate } from "react-router-dom";
import {UserAuth} from '../../context/AuthContext';

//Components
import {Header} from '../../components/reuseableComponents/GlobalComponents';
import {HomeContainer} from './HomePageElements';
import Tamaguchi from '../../components/Tamaguchi/Tamaguchi.tsx'

type HomeProps = {
    message: string;
  };

const HomePage = ({ message }: HomeProps) => {



  return <HomeContainer>  
           <Header>Account</Header>
            <Tamaguchi/>
            </HomeContainer> 
};

export default HomePage;
