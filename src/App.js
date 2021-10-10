import Home from "./Pages/Home";
import {Route } from 'react-router-dom';
import Layout from "./components/Layout";
import DashBoard from "./Pages/Dashboard";

function App() {

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={DashBoard} />
    </Layout>
  );
}

export default App;
