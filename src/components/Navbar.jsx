import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, List, ListItem, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

// this are the nav items
const nav = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Explore",
        path: "/explore"
    },
    {
        title: "Wallet",
        path: "/wallet"
    },
    {
        title: "Contact",
        path: "/contact"
    }
];

// Here we are mapping and showing the nav items for the desktop nav
const showNav = nav.map((nav)=>{
    return(
        <>
            <Link to={nav.path}>
                <ListItem color={"white"} fontSize={"18px"}>{nav.title}</ListItem>
            </Link>
        </>
    )
})

// Here we are mapping and showing the nav items for the mobile nav
const showmobileNav = nav.map((nav)=>{
    return(
        <>
            <Link to={nav.path}>
                <ListItem py={2} px={2} mb={2} _hover={{bg: "gray.100"}} color={"black"} fontSize={"18px"} borderRadius={2}>{nav.title}</ListItem>
            </Link>
        </>
    )
})

// this is the top bar displayed on desktops
function DesktopNav(){
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 70){
            setColorchange(true);
        }else{
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return(
        <>
            <Box display={{base: "none", md: "block"}} id="desktopNav" className={colorChange ? 'navbar colorChange' : 'navbar'} w={"100%"} py={3} borderBottom={"1px"} borderColor={"gray.800"}>
                <Container maxW={"7xl"}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box>
                            <Text fontSize={"3xl"} color={"white"}>NFTworld</Text>
                        </Box>
                        <Box>
                            <List display="flex" gap={4} color={"black"}>
                                {showNav}
                            </List>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

// this is the drawer for the mobile nav
function MobileDrawer(){
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()
    return(
        <>
            <Button ref={btnRef} onClick={onOpen}>Menu</Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerCloseButton/>
                    </DrawerHeader>
                    <DrawerBody>
                        <List mt={3}>
                            {showmobileNav}
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

// This is the component for the tob bar of the mobile nav
function MobileNav(){
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if(window.scrollY >= 70){
            setColorchange(true);
        }else{
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return(
        <>
            <Box display={{base: "block", md: "none"}} id="mobilepNav" className={colorChange ? 'navbar colorChange' : 'navbar'} w={"100%"} py={3} borderBottom={"1px"} borderColor={"gray.800"}>
                <Container maxW={"7xl"}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box>
                            <Text fontSize={"2xl"} color={"white"}>NFTworld</Text>
                        </Box>
                        <Box>
                            <MobileDrawer/>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export const Navbar = () => {
    return (
      <>
          <DesktopNav/>
          <MobileNav/>
      </>
    )
}