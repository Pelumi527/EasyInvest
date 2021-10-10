import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import DashBoard from './Pages/Dashboard'
import MaticScreen from "./feature/matic";
import { useEagerConnect } from "./hooks/UseEagerConnect";

function App() {
//  useEffect(()=>{
//    useEagerConnect()
//  },[])
  return (
    <div>
      <Navbar />
      <MaticScreen />
      {/* <DashBoard /> */}
    {/* <Home /> */}
    </div>
  );
}

export default App;
