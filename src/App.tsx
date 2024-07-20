import { Container } from "@mui/material";
import Header from "./components/Header";
import AboutUs from "./components/About";
import ProductList from "./components/Product";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

function App() {
  return (
    <Container style={{ backgroundColor: "#f1f2ec" }}>
      <Header />
      <AboutUs />
      <ProductList />
      <Benefits />
      <Footer />
    </Container>
  );
}

export default App;
