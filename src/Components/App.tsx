import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./ContactMe/Contact";
import Layout from "./Layout/Layout";
import StartPage from "./StartPage/StartPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}></Route>
    <Route path="/Aboutme" element={<StartPage />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
