import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@chakra-ui/react"
import { Blog } from "./pages/Blog"

function App() {

  return (
    <>
      <Box minH={"100vh"}bg={"gray.900"}>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
