import { NavLink } from "@solidjs/router";
import { For, ParentComponent } from "solid-js";

import logo from "../logo.svg";

type Link = { label: string; url: string };
const Layout: ParentComponent = ({ children }) => {
  const links: Link[] = [
    { label: "Home", url: "/" },
    { label: "FizzBuzz", url: "/fizzbuzz" },
  ];

  return (
    <div class="h-full">
      <header class="fixed w-full z-30 py-4 border-b border-slate-700 shadow bg-slate-800 bg-opacity-80 backdrop-blur">
        <div class="container flex items-center justify-center gap-4 ">
          <img src={logo} class="h-8 w-8 pointer-events-none" alt="logo" />
          <nav class="flex items-center justify-center gap-4">
            <For each={links}>
              {(link) => (
                <NavLink href={link.url} class={"[active]:underline"}>
                  {link.label}
                </NavLink>
              )}
            </For>
          </nav>
        </div>
      </header>

      <div class="container pt-20">{children}</div>
    </div>
  );
};

export default Layout;
