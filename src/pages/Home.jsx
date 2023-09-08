import { Box, Button, ButtonGroup, Center, Container, Grid, GridItem, HStack, Icon, Image, Input, Text } from "@chakra-ui/react"
import { LiaArrowRightSolid } from "react-icons/lia";
import { Navbar } from "../components/Navbar"
import { Categories } from "../components/Categories"
import { Steps } from "../components/Steps"
import { Newnft } from "../components/Newnft";
import { Footer } from "../components/Footer";

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
                  <Image src="/images/portfolio_2.jpg" minH={"500px"} w={"100%"} objectFit={"cover"} borderRadius={"md"}/>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      {/* This section contains the steps ie step-01 */}
      <Container maxW={"7xl"} pt={"30px"} pb={"30px"}>
        <Steps/>
      </Container>

      {/* This is a break section */}
      <Box id="breaker"></Box>

      {/* These are the NFT Cards */}
      <Container maxW={"7xl"} py={"40px"}>
        {/* this is the title for the cards */}
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          <Text color={"white"} fontSize={"2xl"}>Newest Items</Text>
          <HStack spacing={"5px"} cursor={"pointer"}>
            <Text color={"gray.400"} fontSize={"md"}>VIEW ALL</Text>
            <Icon color={"gray.400"} w={8} h={6} as={LiaArrowRightSolid}/>
          </HStack>
        </Box>

        <Newnft/>
      </Container>

      {/* This is the newsletter section */}
      <Container maxW={"7xl"} pb={"40px"}>
        <Box id="newsletter" borderRadius={"md"}>
          <Box minH={"50vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} p={5}>
            <Box w={{base: "100%", md: "60%"}}>
              <Text textAlign={"center"} fontSize={{base: "xl", md: "3xl"}} color={"white"}>Join our newsletter</Text>
              <Text fontSize={"xl"} color={"gray.400"} textAlign={"center"} py={2}>Weekly Free NFT updates straight to your inbox</Text>
              <HStack>
                <Input placeholder="Your Email" bg={"gray.800"} border={"none"} color={"white"} size={"lg"}/>
                <Button size={"lg"} bg={"blue.400"} color={"white"} _hover={{color: "black", bg: "white"}} transition={"ease-in-out .7s"}>Subscribe</Button>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* footer section */}
      <Footer/>
    </>
  )
}
