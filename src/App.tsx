import { Router } from "@solidjs/router";
import { Component } from "solid-js";

import AppRoutes from "./AppRoutes";
import Layout from "./components/Layout";

const App: Component = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
