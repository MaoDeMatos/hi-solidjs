import { Route, Routes } from "@solidjs/router";
import { Component, lazy } from "solid-js";

const Home = lazy(() => import("./pages/Home"));
const FizzBuzz = lazy(() => import("./pages/FizzBuzz"));

const AppRoutes: Component = () => {
  return (
    <Routes>
      <Route path={"/"} component={Home} />
      <Route path={"/fizzbuzz"} component={FizzBuzz} />
    </Routes>
  );
};

export default AppRoutes;
