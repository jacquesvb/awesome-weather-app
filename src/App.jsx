import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SelectedInfo from "./components/SelectedInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App mx-auto max-w-screen-lg h-[100vh] mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400">
      <NavBar />
      <SelectedInfo />
      <Footer />
    </div>
  );
}

export default App;
