import { Component } from "solid-js";

import logo from "../logo.svg";

const Home: Component = () => {
  return (
    <section class="pt-8 relative flex flex-col items-center gap-4 text-center">
      <img src={logo} class="h-[40vmin] pointer-events-none" alt="logo" />

      <p class="z-10 text-2xl">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </section>
  );
};

export default Home;
