import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import ThemeProvider from './App.Theme'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  )
}

export default App