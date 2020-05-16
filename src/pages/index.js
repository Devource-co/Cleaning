import React from "react"
import SEO from "../components/seo";
import Hero from "../components/landing/hero/main";
import Proccess from '../components/landing/proccess';
import About from "../components/landing/about";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Proccess />
    <About />
  </>
);

export default IndexPage
