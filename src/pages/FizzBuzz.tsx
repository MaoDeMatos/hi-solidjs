import { Component, For } from "solid-js";

const FizzBuzz: Component = () => {
  function checkNumber(number: number) {
    if (number % 3 !== 0 && number % 5 !== 0) return number;

    let value = "";
    if (number % 3 === 0) value += "Fizz";
    if (number % 5 === 0) value += "Buzz";
    return value;
  }

  return (
    <section class="grid grid-flow-row gap-x-2 auto-cols-max grid-cols-10 content-center justify-center text-center rounded-xl border border-sky-800 overflow-hidden">
      <For each={[...Array(100)]}>
        {(_, index) => (
          <p class="p-1 even:bg-sky-800" data-index={index()}>
            {String(checkNumber(index() + 1))}
          </p>
        )}
      </For>
    </section>
  );
};

export default FizzBuzz;
