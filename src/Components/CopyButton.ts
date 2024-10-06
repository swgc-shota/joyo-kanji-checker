import van from "vanjs-core";
import { bounceIcon } from "./util";

const { button } = van.tags;
const { path, svg } = van.tags("http://www.w3.org/2000/svg");

export const CopyButton = (listener: (e: MouseEvent) => void) =>
  button(
    {
      class:
        "grid size-8 items-center justify-center rounded-full bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-800",
      onclick: (e: MouseEvent) => {
        listener(e);
        bounceIcon(e.currentTarget as HTMLButtonElement);
      },
      "aria-label": "コピーボタン",
    },
    svg(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        class: "size-4 fill-stone-500 dark:fill-stone-300",
      },
      path({
        d: "M3.626 3.533a.249.249 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.249.249 0 0 0-.126-.217.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298ZM5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1Zm.75 3h3V2.5h-3Z",
      })
    )
  );
