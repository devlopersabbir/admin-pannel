import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface ISidebarItemProps {
  isActive?: boolean;
  text: string;
  link: string;
  icon: IconType;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  isActive,
  text,
  icon,
  link,
}) => {
  return (
    <Link href={link}>
      <Flex
        gap={2}
        align="center"
        cursor="pointer"
        transition="0.3s ease"
        fontWeight="semibold"
        padding={"2.5"}
        bg={isActive ? "blue.300" : "whiteAlpha.300"}
        color={isActive ? "white" : "unset"}
        borderTopRightRadius={isActive ? "50px" : "unset"}
        _hover={{
          bg: "blue.300",
          color: "white",
          borderTopRightRadius: "50px",
        }}
      >
        <Icon fontSize="2xl" color={isActive ? "white" : "unset"} as={icon} />
        <Text display={{ base: "none", md: "unset" }}>{text}</Text>
      </Flex>
    </Link>
  );
};

export default SidebarItem;
