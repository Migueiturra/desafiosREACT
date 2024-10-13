import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/Register";
import LoginPage from "./components/Login";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

function App() {
  return  (
    <div>
    <Navbar />
    {/* <Home /> */}
    {/* <RegisterPage /> */}
    {/* <LoginPage /> */}
    {/* <Cart /> */}
    <Pizza/>
    <Footer />
    </div>
    );
    };
    
export default App;
