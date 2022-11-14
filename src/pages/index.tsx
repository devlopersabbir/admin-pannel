import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Admin dashboard - Dashboard</title>
      </Head>
      <Dashboard />
    </Layout>
  );
};

export default Home;
