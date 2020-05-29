import React from "react"
import SEO from "../components/seo";
import Hero from "../components/landing/hero/main";
import Proccess from '../components/landing/proccess';
import About from "../components/landing/about";
import ServicesView from "../components/landing/services";
import Footer from "../components/shared/footer";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Proccess />
    <About />
    <ServicesView />
    <Footer />
  </>
);

export default IndexPage
