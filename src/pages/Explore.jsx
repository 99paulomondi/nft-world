import {Avatar, AvatarGroup, Box, Button, Container, Grid, GridItem, HStack, Icon, Image, List, ListItem, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text} from "@chakra-ui/react";
import { LiaEllipsisHSolid, LiaHeart } from "react-icons/lia";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const details = [
  {
    source: "/images/1.jpg",
    title: "Pumpkin Head",
    subtitle: "Highest bid 1/20"
  },
  {
    source: "/images/2.jpg",
    title: "Super Brain",
    subtitle: "Highest bid 1/20"
  },
  {
    source: "/images/3.jpg",
    title: "Cool Cube",
    subtitle: "Highest bid 1/20"
  },
  {
    source: "/images/4.jpg",
    title: "Philosopher",
    subtitle: "Highest bid 1/20"
  },
  {
    source: "/images/5.jpg",
    title: "New Gen",
    subtitle: "Highest bid 1/20"
  },
  {
    source: "/images/6.jpg",
    title: "Captivator",
    subtitle: "Highest bid 1/20"
  },
  {
    source: "/images/7.jpg",
    title: "Complexity",
    subtitle: "Highest bid 1/20"
  }
];

const showdetails = details.map((detail)=>{
  return(
    <>
      <GridItem bg={"gray.800"} borderRadius={"md"} p={2} cursor={"pointer"}>
        <Image w={"100%"} minH={"350px"} src={detail.source} objectFit={"cover"} borderRadius={"md"}/>
        <Box p={2}>
          {/* here we have the avatar group */}
          <Box pt={2} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <AvatarGroup size={"sm"}>
                <Avatar name="prof1" src="/images/prof1.png"></Avatar>
                <Avatar name="prof1" src="/images/prof2.png"></Avatar>
                <Avatar name="prof1" src="/images/prof3.png"></Avatar>
              </AvatarGroup>
            </Box>

            <Box>
              <Popover>
                <PopoverTrigger>
                  <Button p={0} variant={"ghost"} _hover={{background: "gray.700"}} _focus={{background: "gray.700"}}>
                    <Icon color={"gray.400"} w={6} h={6} as={LiaEllipsisHSolid}/>
                  </Button>
                </PopoverTrigger>
                <PopoverContent bg={"gray.700"} border={"none"}>
                  <PopoverBody  >
                    <List color={"white"}>
                      <ListItem py={2} px={1} cursor={"pointer"} _hover={{bg: "gray.600", borderRadius: "md"}}>Share</ListItem>
                      <ListItem py={2} px={1} cursor={"pointer"} _hover={{bg: "gray.600", borderRadius: "md"}}>Report</ListItem>
                    </List>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Box>
          <Box>
            <Text color={"white"} fontSize={"xl"} pt={2}>{detail.title}</Text>
            <Text color={"gray.400"} py={1}>{detail.subtitle}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text color={"blue.400"}>0.244wETH</Text>
            <HStack>
              <Icon as={LiaHeart} color={"white"}/>
              <Text color={"white"}>322</Text>
            </HStack>
          </Box>
        </Box>
      </GridItem>
    </>
  )
})

export const Explore = () => {
  return (
    <Box>
        <Navbar/>
        <Container maxW={"7xl"} pt={"100px"}>
            <Box>
            <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={8}>
                {showdetails}
            </Grid>
            </Box>
        </Container>
        <Footer/>
    </Box>
  )
}
