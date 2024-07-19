import { useState } from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
