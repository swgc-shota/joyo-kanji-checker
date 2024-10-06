import { EditorView } from "@codemirror/view";
import { Compartment, Extension } from "@codemirror/state";

const themeSpec = {
  "&": {},
  "&.cm-editor": {
    width: "100%",
    height: "100%",
    padding: "16px",
  },
  "&.cm-editor.cm-focused": {
    backgroundColor: "rgb(245 245 244)",
    outline: "dashed",
  },
  ".cm-line": {
    textWrap: "wrap",
  },
};

export const myLightTheme = EditorView.theme({ ...themeSpec }, { dark: false });
export const myDarkTheme = EditorView.theme(
  {
    ...themeSpec,
    "&.cm-editor.cm-focused": {
      backgroundColor: "#292524",
      outline: "dashed",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "white",
    },
  },
  { dark: true }
);

export const isDark = () => document.documentElement.classList.contains("dark");

export const observeThemeMode = (
  view: EditorView,
  themeComp: Compartment,
  lightTheme: Extension,
  darkTheme: Extension
) => {
  const observer = new MutationObserver(() => {
    view.dispatch({
      effects: themeComp.reconfigure(isDark() ? darkTheme : lightTheme),
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
};
