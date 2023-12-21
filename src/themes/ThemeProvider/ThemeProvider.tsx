import { ThemeProvider as ThemeProviderMUI } from "@mui/material"
import { ThemeProvider as ThemeProviderEmotion } from "@emotion/react"
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider"

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeProviderEmotion theme={theme}>
      <ThemeProviderMUI theme={theme}>
        {children}
      </ThemeProviderMUI>
    </ThemeProviderEmotion>
  )
}