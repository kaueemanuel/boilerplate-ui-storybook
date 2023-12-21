import { ButtonProps } from "@mui/material"
import { Button as ButtonStyled } from "./Button.styles"

export interface Props extends ButtonProps {
  children?: React.ReactNode | string;
}

export const Button: React.FC<Props> = ({children="button",...props}) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}
