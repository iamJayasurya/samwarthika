import RootLayout from "./layout";
import Header from "./components/layout/Header";
import CustomSlider from "./components/home/slider";
import { useState } from "react";
import Footer from "./components/layout/Footer";
import BannerWithTabs from "./components/home/treatment";
import Treatmentslist from "./components/home/Treatmentslist";
import Ourdoctors from "./components/home/Ourdoctors";
import Insurance from "./components/layout/Insurance";
import Aboutus from "./components/home/About";
import LatestDocVlog from "./components/layout/LatestDocVlog";
import FAQ from "./components/home/Faq";
import Statistics from "./components/home/Statistics";
import Therapyofchoice from "./components/home/Therapyofchoice";
import Getquote from "./components/layout/Getquote";
export default function Home() {
  return (
    <>
      <Header />
      <CustomSlider />
      <Statistics />
      <Aboutus />
      <BannerWithTabs />
      <Treatmentslist />
      <Ourdoctors />
      <Therapyofchoice />
      <Insurance />
      <LatestDocVlog />
      <FAQ />
      <Getquote />
      <Footer />
    </>
  );
}
