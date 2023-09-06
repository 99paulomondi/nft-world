import { Container, Box, Grid, GridItem, Text, Icon } from "@chakra-ui/react";
import { LiaImage, LiaMusicSolid, LiaMap, LiaSearchSolid, LiaCommentsSolid, LiaSquareRootAltSolid } from "react-icons/lia";

const categorylist = [
  {
    icon: LiaImage,
    title: "Art"
  },
  {
    icon: LiaMusicSolid,
    title: "music"
  },
  {
    icon: LiaMap,
    title: "Digital Worlds"
  },
  {
    icon: LiaSearchSolid,
    title: "Domain Name"
  },
  {
    icon: LiaCommentsSolid,
    title: "Collaboration"
  },
  {
    icon: LiaSquareRootAltSolid,
    title: "Trending Cards"
  }
];

const showcategories = categorylist.map((category)=> {
  return(
    <>
      <GridItem w={"100%"} h={"150px"} bg={"gray.800"} border={"2px"} borderColor={"gray.700"} borderRadius={"md"} _hover={{bg: "blue.400"}} cursor={"pointer"} transition={"ease-in-out .7s"}>
        <Box display={"flex"} h={"150px"} justifyContent={"center"} alignItems={"center"}>
          <Box>
            <center>
              <Icon color={"white"} as={category.icon} w={8} h={8}/>
            </center>
            <Text textAlign={"center"} fontSize={"xl"} color={"white"}>{category.title}</Text>
          </Box>
        </Box>
      </GridItem>
    </>
  )
})

export const Categories = () => {
  return (
    <>
      <Container maxW={"7xl"}>
        <Box py={"50px"}>
          <Grid templateColumns={{base: "repeat(2, 1fr)",md: "repeat(6, 1fr)"}} gap={6}>
            {showcategories}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
