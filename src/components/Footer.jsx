import { Box, HStack, Image, Text, Tooltip, Center } from "@chakra-ui/react";

const details = [
    {
        source: "/images/f1.png",
        title: "BITLY"
    },
    {
        source: "/images/f2.png",
        title: "D-Coin"
    },
    {
        source: "/images/f3.png",
        title: "Trans card"
    },
    {
        source: "/images/f4.png",
        title: "Meta Mask"
    },
    {
        source: "/images/f5.png",
        title: "E-Currency"
    },
    {
        source: "/images/f6.png",
        title: "Bitcoin"
    },
    {
        source: "/images/f7.png",
        title: "Attar Process"
    },
    {
        source: "/images/f8.png",
        title: "Paul Omondi"
    }
];

const showdetails = details.map((detail)=> {
    return(
        <>
            <Tooltip hasArrow label={detail.title} bg={"gray.700"} color={"white"}>
                <Box bg={"gray.800"} borderRadius={"md"} cursor={"pointer"}>
                    <Image p={2} boxSize={{base: "35px", md: "50px"}} src={detail.source}/>
                </Box>
            </Tooltip>
        </>
    )
})
export const Footer = () => {
  return (
    <>
        <Box id="footer">
            <Box minH={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} p={5}>
                <Box w={{base: "100%", md: "60%"}}>
                    <Box>
                        <Text fontSize={"xl"} textAlign={"center"} color={"gray.400"}>Designed by Paul Omondi</Text>
                        <Center>
                        <Box pt={5}>
                            <HStack>
                                {showdetails}
                            </HStack>
                        </Box>
                        </Center>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}
