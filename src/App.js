import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import DashBoard from "./Pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <DashBoard /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
