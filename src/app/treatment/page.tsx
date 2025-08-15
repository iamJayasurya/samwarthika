import RootLayout from "../layout";
import Header from "../components/layout/Header"
import { useState } from "react";
import Footer from "../components/layout/Footer";
import LatestDocVlog from "../components/layout/LatestDocVlog";
import Getquote from "../components/layout/Getquote";
import Insurance from "../components/layout/Insurance";
import TreatmentSubbnr from "../components/treatments-components/TreatmentSubbnr";
import Recognized from "../components/treatments-components/recognizedby";
import TreatmentAbout from "../components/treatments-components/treatmentAbout";
import Treatment from "../components/treatments-components/treatments";
import BalanceDiet from "../components/treatments-components/balanceDiet";
import Form from "../components/treatments-components/form";
import FAQ from "../components/treatments-components/Faq";
export default function Home() {
  return (
    <>
      <Header />
      <TreatmentSubbnr/>
      <Recognized/>
      <TreatmentAbout/>
      <Treatment/>
      <BalanceDiet/>
      <Insurance/>
      <Form/>
      <LatestDocVlog/>
      <FAQ/>
      <Getquote/>
      <Footer />
    </>
  );
}
