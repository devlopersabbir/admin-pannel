import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";

const index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Admin dashboard - Posts</title>
      </Head>
      <div>Post page</div>
    </Layout>
  );
};

export default index;
