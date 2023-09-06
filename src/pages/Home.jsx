import { Box, Button, Center, Container, Text } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
    <>
      {/* This is the hero section */}
      <Box id="banner">
        {/* This is the navbar component */}
        <Navbar/>

        {/* This is the hero text */}
        <Container maxW={"7xl"}>
          <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
            <Box width={{base: "100%", md: "60%"}}>
              <Box>
                <Text fontSize={"2xl"} color={"blue.400"} textAlign={"center"} letterSpacing={2}>nftworld</Text>
                <Text my={3} fontSize={{base: "2xl", md:"4xl"}} color={"white"} textAlign={"center"}>Dive into NFTs marketplace with a relevant Product</Text>
                <Center>
                  <Button my={3} size={"lg"} bg={"blue.400"} w={"30%"} color={"white"} _hover={{bg: "blue.600"}}>Explore</Button>
                </Center>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
