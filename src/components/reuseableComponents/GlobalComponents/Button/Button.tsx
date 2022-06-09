
import { Link } from "react-router-dom";
import {ButtonStyle} from './ButtonElements.js'
type ButtonProps = {
    children: any,
    otherProps?: any
  };

const Button = ({children, ...otherProps }: ButtonProps) => {

  return <ButtonStyle {...otherProps}>
            {children}
        </ButtonStyle>
};

export default Button;
