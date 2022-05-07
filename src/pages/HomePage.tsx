import { ScrollControls } from "@react-three/drei";

import React from "react";


import Page from "../components/Page";
import MainLayout from "../layouts/main.layout";

import HomeScene from "../scenes/HomeScene";

import "../styles/styles.css";


type HomeProps = {};

const HomePage: React.FC<HomeProps> = (props) => {

  return (
    <>
      <Page>
        <color attach="background" args={["#dce0bc"]} />
        <ScrollControls damping={3} pages={4} eps={1}>
          <MainLayout>

            <HomeScene />
          </MainLayout>
        </ScrollControls> 

      </Page>
    </>
  );
};

export default HomePage;
