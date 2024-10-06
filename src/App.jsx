import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <Home /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
