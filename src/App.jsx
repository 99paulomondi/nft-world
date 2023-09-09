import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Box } from "@chakra-ui/react"
import { Blog } from "./pages/Blog"
import { Contact } from "./pages/Contact"
import { Explore } from "./pages/Explore"

function App() {

  return (
    <>
      <Box minH={"100vh"}bg={"gray.900"}>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
