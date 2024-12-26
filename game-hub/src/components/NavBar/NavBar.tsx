import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import ColorSwitchMode from "../ColorSwitchMode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <Text>NavBar</Text>
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
