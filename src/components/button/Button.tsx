import { PropsWithChildren } from "react";
import "./Button.scss"


interface ButtonProps extends PropsWithChildren<any> {
  theme: 'primary' | 'secondary', 
  onClickHandler: () => void, 
};

function Button(props: ButtonProps) {
  const isPrimaryTheme = props.theme === "primary";
  return <button className={`button ${isPrimaryTheme ? 'primary' : 'secondary'}`} onClick={() => props.onClickHandler()}>{props.children}</button>
}
  
export default Button;