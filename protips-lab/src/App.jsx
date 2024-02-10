import Navbar from "../src/Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "../src/Components/Contact";
import RegisterForm from "./Components/RegisterForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/register" element={<RegisterForm />}></Route>
        <Route exact path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 page not found</h1>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
