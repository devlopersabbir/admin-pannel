import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import BoxContainer from "./Box/Box";
import Chart from "../Chart/Chart";

const Dashboard: React.FC = () => {
  return (
    <Flex flexDir="column" gap={4}>
      <BoxContainer />
      <Chart />
    </Flex>
  );
};

export default Dashboard;
