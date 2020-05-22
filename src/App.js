import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Header from "./components/layout/Header.js";
import Sidenav from "./components/layout/Sidenav.js";
import Footer from './components/layout/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import AddPermissions from "./components/permissions/AddPermissions";
import AssignPermissions from "./components/permissions/AssignPermissions";
import ListModules from './components/permissions/ListModules';
import ListPermissions from './components/permissions/ListPermissions';




function App() {


  return (
    <Router>
      <Header />
      <Sidenav />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/addpermissions" component={AddPermissions} />
      <Route exact path="/assignpermissions" component={AssignPermissions} />
      <Route exact path="/viewpermissions" component={ListModules} />
      <Route exact path="/listpermissions" component={ListPermissions} />

      <Footer />
    </Router>


  );
}

export default App;
