import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import { ThemeProvider } from "./themes/ThemeProvider/ThemeProvider.tsx"
import { lightTheme } from "./themes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
