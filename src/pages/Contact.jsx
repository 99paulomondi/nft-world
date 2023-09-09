import { Box, Button, Container, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"

export const Contact = () => {
  return (
    <>
        <Box h={"100vh"}>
            <Navbar/>
            <Container maxW={"7xl"}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
                    <Box w={{base: "100%", md: "50%"}} bg={"gray.800"} borderRadius={"md"}>
                        <Box p={5}>
                            <Text color={"white"} fontSize={"2xl"}>Contact Us</Text>
                            <Stack spacing={7} pt={4}>
                                <Input placeholder="Your Name" type="text" size={"lg"} bg={"gray.700"} border={"none"}/>
                                <Input placeholder="Email" type="email" size={"lg"} bg={"gray.700"} border={"none"}/>
                                <Input placeholder="Subject" type="text" size={"lg"} bg={"gray.700"} border={"none"}/>
                                <Textarea placeholder="Message" size={"lg"} bg={"gray.700"} border={"none"}/>
                                <Button w={"100%"} size={"lg"} bg={"blue.400"} color={"white"} _hover={{bg: "white", color: "black"}}>Send Message</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
  )
}
