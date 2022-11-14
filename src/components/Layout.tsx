import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Flex>
      <Sidebar />
      <main style={{ width: "100%", padding: "0.7rem" }}>{children}</main>
    </Flex>
  );
};

export default Layout;
