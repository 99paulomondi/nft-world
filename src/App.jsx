import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@chakra-ui/react"

function App() {

  return (
    <>
      <Box minH={"100vh"}bg={"gray.800"}>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
