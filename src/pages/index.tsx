import Head from "next/head";
import { Fragment } from "react";

import { NextPageWithLayout } from "~/types/common.types";
import Main from "../views/Main/Main.view";
import Layout from "~/components/Layout/Layout.component";

import playlistData from "~/data/playlistData.json";
import { Container } from "~/components";

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>DaftAcademy - WebApp 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Main items={playlistData} />
      </Container>
    </Fragment>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
