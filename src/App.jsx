import { useState } from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
