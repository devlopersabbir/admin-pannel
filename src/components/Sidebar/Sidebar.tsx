import {
  Switch,
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import SidebarItem from "./SidebarItem";
import { RiDashboardFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { MdPostAdd, MdOpenInNew } from "react-icons/md";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      as="nav"
      width={{ base: "70px", md: "20%" }}
      height="100vh"
      position="sticky"
      overflowY="scroll"
      top={0}
      left={0}
      bg={"blackAlpha.50"}
      _dark={{ bg: "whiteAlpha.50" }}
      padding={{ base: "0.5rem 0rem", md: "0.8rem 0rem" }}
    >
      <Stack spacing={6}>
        <Box display={{ md: "none" }}>
          <IconButton
            aria-label="toggle"
            icon={<MdOpenInNew />}
            variant={"outline"}
            colorScheme={"linkedin"}
            fontSize={"2xl"}
            mx="2"
            _hover={{
              bg: "blue.500",
              color: "white",
              outline: "none",
              border: "none",
            }}
          />
        </Box>

        <Flex
          flexDir="column"
          align="center"
          px="0.2rem"
          textAlign="center"
          display={{ base: "none", md: "block" }}
        >
          <Avatar
            src="https://pbs.twimg.com/profile_images/1393250652004839427/0B9Ym-Wj_400x400.jpg"
            size="xl"
            maxW="full"
          />
          <Heading as="h1" fontSize="lg">
            Company Name
          </Heading>
          <Text fontSize="sm">A full-stack web developer</Text>
        </Flex>
        <Divider color="blackAlpha.200" />
        <Stack>
          <SidebarItem
            isActive={router.asPath == "/"}
            link={"/"}
            text="Dashboard"
            icon={RiDashboardFill}
          />
          <SidebarItem
            isActive={router.asPath == "/users"}
            link={"/users"}
            text="Users"
            icon={ImUsers}
          />
          <SidebarItem
            isActive={router.asPath == "/posts"}
            link={"/posts"}
            text="Posts"
            icon={MdPostAdd}
          />
        </Stack>
        <Button onClick={toggleColorMode}>toggle</Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
