import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import BoxItem from "./BoxItem";
import { ImUsers, ImArrowUp, ImArrowDown } from "react-icons/im";
import { RiOrderPlayFill } from "react-icons/ri";
import { MdSell } from "react-icons/md";

const Box: React.FC = () => {
  return (
    <Flex
      gap={4}
      flexWrap="wrap"
      align={{ base: "center", md: "center" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <BoxItem
        count={2022}
        icon={ImUsers}
        parsent={5}
        text="See all user"
        title="users"
        link="/users"
        indicate={ImArrowUp}
        indicateColor={true}
        iconColor={"orange.800"}
        iconBG={"orange.100"}
      />
      <BoxItem
        count={120}
        icon={RiOrderPlayFill}
        parsent={90}
        text="See all post"
        title="posts"
        link="/posts"
        indicate={ImArrowUp}
        indicateColor={true}
        iconColor={"blue.800"}
        iconBG={"blue.100"}
      />
      <BoxItem
        count={2022}
        icon={MdSell}
        parsent={40}
        text="See seels"
        title="sells"
        link="/"
        indicate={ImArrowDown}
        indicateColor={false}
        iconColor={"gray.800"}
        iconBG={"gray.100"}
      />
      <BoxItem
        count={2022}
        icon={ImUsers}
        parsent={5}
        text="See all user"
        title="users"
        link="/"
        indicate={ImArrowUp}
        indicateColor={true}
        iconColor={"green.800"}
        iconBG={"green.100"}
      />
    </Flex>
  );
};

export default Box;
