import { Box, Grid, GridItem, Text, Icon, Image } from "@chakra-ui/react";
import { LiaArrowRightSolid } from "react-icons/lia";

const details = [
  {
    step: "step-01",
    title: "Set up wallet",
    content: "Powerful features and inclusions, which makes nftworld easily customizable and scalable.",
    source: "/images/1.png"
  },
  {
    step: "step-02",
    title: "Create your collection",
    content: "Powerful features and inclusions, which makes nftworld easily customizable and scalable.",
    source: "/images/2.png"
  },
  {
    step: "step-03",
    title: "Add your NFT's",
    content: "Powerful features and inclusions, which makes nftworld easily customizable and scalable.",
    source: "/images/3.png"
  }
];

const showdetails = details.map((detail)=>{
  return(
    <>
      <GridItem bg={"gray.800"} borderRadius={"md"} h={"300px"} pos={"relative"}>
          <Box display={"flex"} h={"300px"} alignItems={"center"}>
            <Box p={5}>
              <Image src={detail.source} boxSize={"80px"} pos={"absolute"} right={"-20px"} top={"-20px"}/>
              <Text color={"gray.400"} fontSize={"xl"} fontWeight={"semibold"} textTransform={"uppercase"}>{detail.step}</Text>
              <Text color={"white"} fontSize={"3xl"} py={5}>{detail.title}</Text>
              <Text color={"gray.400"} fontSize={"18px"}>{detail.content}</Text>
              <Icon color={"white"} w={6} h={6} mt={5} as={LiaArrowRightSolid}/>
            </Box>
          </Box>
      </GridItem>
    </>
  )
})
export const Steps = () => {
  return (
    <>
    <Box>
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} gap={8}>
        {showdetails}
      </Grid>
    </Box>
    </>
  )
}
