import { Box, Button, ButtonGroup, Center, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"
import { Categories } from "../components/Categories"

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

      {/* This the componet that displays the categories ie art, music etc */}
      <Categories/>

      <Container maxW={"7xl"} pt={5} pb={"50px"}>
        <Box>
          <Grid templateColumns={{base:"repeat(1, 1fr)",md: "repeat(2, 1fr)"}} gap={6}>
            {/* text section */}
            <GridItem>
              <Box display={{md: "flex"}} h={{md: "500px"}} alignItems={"center"}>
                <Box>
                  <Text color={"blue.400"} fontSize={"xl"}>Marketplace</Text>
                  <Text color={"white"} fontSize={{base: "3xl",md:"5xl"}} py={2}>Get your rare NFT&apos;s by world artists</Text>
                  <Text color={"gray.400"} fontSize={"xl"} py={2}>Are you ready to embark on an exciting journey into the world of Non-Fungible Tokens (NFTs)? Welcome to our NFT website, where the future of digital ownership unfolds. </Text>
                  <ButtonGroup my={5} spacing='5'>
                    <Button size={"lg"} bg={"blue.400"} color={"white"} _hover={{bg: "gray.700"}} transition={"ease-in-out .5s"}>Get Started</Button>
                    <Button size={"lg"} _hover={{bg: "gray.700", color: "white"}} transition={"ease-in-out .5s"}>Create</Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </GridItem>

            {/* image section */}
            <GridItem>
              <Box>
                <Box>
                  <Image src="/images/NFT_portfolio.jpg" boxSize={"500px"} w={"100%"} objectFit={"cover"} borderRadius={"md"}/>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
