import van from "vanjs-core";

import { EditorState, Compartment } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { optionSupport } from "./optionSupport";
import { isDark, observeThemeMode } from "./themes";
import { mySetup } from "./setup";
import { tokenExtractor } from "./extensions";
import { optionCotent } from "./data";
import { optionLightTheme, optionDarkTheme } from "./optionTheme";

const { div } = van.tags;

const OptionEditor = (fluctTokens: Set<string>) => {
  const container = div({
    class:
      "w-[90%] max-w-[60rem] mx-auto bg-stone-50 mt-8 max-h-[2000px] overflow-y-auto  dark:bg-zinc-800 dark:text-stone-300 p-[1px] rounded",
  });

  const themeComp = new Compartment();
  const langComp = new Compartment();

  const state = EditorState.create({
    doc: "",
    extensions: [
      mySetup,
      themeComp.of(isDark() ? optionDarkTheme : optionLightTheme),
      langComp.of(optionSupport()),
      tokenExtractor(fluctTokens),
      EditorView.contentAttributes.of({
        "aria-label": "表記ゆれ用オプション",
      }),
    ],
  });

  const view = new EditorView({
    state,
    parent: container,
  });

  observeThemeMode(view, themeComp, optionLightTheme, optionDarkTheme);

  view.dispatch({
    changes: {
      from: 0,
      insert: optionCotent,
    },
  });

  return container;
};

export { OptionEditor };
