import { Component, createSignal, Show } from "solid-js";
import FizzBuzz from "./FizzBuzz";

import logo from "./logo.svg";

const App: Component = () => {
  const [showFizzBuzz, setShowFizzBuzz] = createSignal(false);

  return (
    <header class="pt-8 relative bg-slate-900 min-h-screen w-full flex flex-col items-center gap-4 text-center text-white">
      <img
        src={logo}
        class="animate-[spin_20s_linear] h-[40vmin] pointer-events-none"
        alt="logo"
      />

      <p class="z-10 text-2xl">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      {/* <a
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a> */}

      <button
        type="button"
        onClick={() => setShowFizzBuzz(!showFizzBuzz())}
        class="transition-colors py-2 px-4 rounded-md border border-emerald-500 hover:bg-emerald-500 hover:text-slate-900"
      >
        Show fizzbuzz
      </button>

      <Show
        when={showFizzBuzz()}
        fallback={<span class="text-slate-700 italic">FizzBuzz results</span>}
      >
        <FizzBuzz />
      </Show>
    </header>
  );
};

export default App;
