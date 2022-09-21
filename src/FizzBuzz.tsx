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
    <div class="grid grid-flow-row-dense gap-x-2 auto-cols-max grid-cols-10">
      <For each={[...Array(100)]}>
        {(_, index) => (
          <span class="p-1 even:bg-slate-700" data-index={index()}>
            {String(checkNumber(index() + 1))}
          </span>
        )}
      </For>
    </div>
  );
};

export default FizzBuzz;
