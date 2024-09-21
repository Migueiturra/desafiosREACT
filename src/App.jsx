import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <LoginPage />
      <RegisterPage />
      {/* <Home /> */}

      <Footer />
    </>
  );
}

export default App;
