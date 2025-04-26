import Layout from "./components/Layout";
import About from "./components/sections/About";
import Brands from "./components/sections/Brands";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Quickstart from "./components/sections/Quickstart";
import Services from "./components/sections/Services";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <About />
      <Pricing />
      <Quickstart />
    </Layout>
  );
}

export default App;
