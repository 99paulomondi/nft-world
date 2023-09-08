import { Box, Container, Grid, GridItem, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { LiaClockSolid } from "react-icons/lia";
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer";

const details = [
    {
        source: "/images/blog1.jpg",
        tag: "development",
        readtime: "1 hour read",
        title: "The Services provide for complex design."
    },
    {
        source: "/images/blog2.jpg",
        tag: "design",
        readtime: "5 min read",
        title: "More important feature for designer."
    },
    {
        source: "/images/blog3.jpg",
        tag: "marketing",
        readtime: "10 min read",
        title: "Marketing is like an impressive art."
    },
    {
        source: "/images/blog4.jpg",
        tag: "NFT's",
        readtime: "1 min read",
        title: "NFT's are taking the world by storm."
    },
    {
        source: "/images/blog5.jpg",
        tag: "digital art",
        readtime: "15 min read",
        title: "Digital art is the new wave in the world."
    },
    {
        source: "/images/blog6.jpg",
        tag: "global",
        readtime: "7 min read",
        title: "The world is changing at a fast rate."
    },
    {
        source: "/images/blog7.jpg",
        tag: "crypto",
        readtime: "11 min read",
        title: "Cryptocurrency explained in details."
    },
    {
        source: "/images/blog8.jpg",
        tag: "celebrity",
        readtime: "5 min read",
        title: "Celebrity news instantly to your inbox."
    }
];

const showdetails = details.map((detail)=> {
    return(
        <>
            <GridItem bg={"gray.800"} borderRadius={"md"} p={2} minH={"370px"} cursor={"pointer"}>
                <Image w={"100%"} minH={"200px"} src={detail.source} borderRadius={"md"}/>
                <Box p={2}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                        <Text color={"blue.400"} textTransform={"uppercase"}>{detail.tag}</Text>
                        <HStack spacing={"2px"}>
                            <Icon color={"gray.400"} as={LiaClockSolid}/>
                            <Text color={"gray.400"}>{detail.readtime}</Text>
                        </HStack>
                    </Box>

                    <Text pt={3} fontSize={{base: "xl", md: "2xl"}} color={"gray.300"}>{detail.title}</Text>
                </Box>
            </GridItem>
        </>
    )
})

export const Blog = () => {
  return (
    <>
        
        <Box id="blog">
            <Navbar/>
            <Container maxW={"7xl"}>
                <Box minH={"50vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={{base: "xl", md: "3xl"}} color={"gray.400"}>Our Blog</Text>
                </Box>
            </Container>
        </Box>

        <Container maxW={"7xl"} py={"50px"}>
            <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 1fr)"}} gap={6}>
                {showdetails}
            </Grid>
        </Container>

        <Footer/>
    </>
  )
}
