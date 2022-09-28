import type { NextPage } from "next";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SideBar />
    </div>
  );
};

export default Home;
