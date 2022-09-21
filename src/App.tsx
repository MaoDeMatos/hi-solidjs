import { Component, createSignal } from "solid-js";

import logo from "./logo.svg";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <header class="relative bg-slate-900 min-h-screen flex flex-col items-center justify-center gap-4 text-center text-2xl text-white">
      <img
        src={logo}
        class="animate-[spin_20s_linear] h-[40vmin] pointer-events-none"
        alt="logo"
      />

      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <a
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>

      <button
        type="button"
        onClick={() => setCount(count() + 1)}
        class="transition-colors py-2 px-4 rounded-md border border-emerald-500 hover:bg-emerald-500 hover:text-slate-900"
      >
        You clicked me {count()} times !
      </button>
    </header>
  );
};

export default App;
