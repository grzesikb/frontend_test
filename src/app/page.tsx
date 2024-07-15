import React from "react";
import styles from "@/styles/home.module.scss";

import Header from "@/components/templates/Header";
import MainContent from "@/components/templates/MainContent";
import Footer from "@/components/templates/Footer";

import { fetchData } from "@/lib/services";

const Home = async () => {
  const data = await fetchData();

  return (
    <div className={styles.home}>
      <Header />
      <MainContent initialData={data} />
      <Footer />
    </div>
  );
};

export default Home;
