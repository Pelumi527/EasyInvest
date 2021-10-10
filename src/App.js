import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import DashBoard from './Pages/Dashboard'
import {Route } from 'react-router-dom';
import Layout from "./components/Layout";


function App() {

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={DashBoard} />
     
      {/* <DashBoard /> */}
    {/* <Home /> */}
    </Layout>
  );
}

export default App;
