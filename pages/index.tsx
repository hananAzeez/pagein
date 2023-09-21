import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeContainer from "../containers/index";

const Home: NextPage = () => {
  return (
    <div className="m-0 p-0 box-border">
      <Head>
      <link rel="icon" type="image/x-icon" href="/fiveweeks-icon-3.png" />
        <title>fiveweeks</title>
      </Head>
      <HomeContainer />
    </div>
    )
};

export default Home;
