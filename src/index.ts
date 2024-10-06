import van from "vanjs-core";
import { Header } from "./Common/Header";
import { KanjiChecker } from "./Components/Checker/KanjiChecker";
import { OptionEditor } from "./Components/Checker/OptionEditor";
import Tabs from "./Components/Tabs";
import { Footer } from "./Common/Footer";
import Instruction from "./Components/Checker/Instruction";

import "./index.css";

const { main } = van.tags;
const fluctTokens = new Set<string>([]);
const appTitle = import.meta.env.VITE_TITLE;

van.add(
  document.body,
  Header(appTitle),
  main(
    { class: "pt-10 dark:bg-stone-900" },
    Tabs([
      ["チェッカー", KanjiChecker(fluctTokens)],
      ["表記ゆれ設定", OptionEditor(fluctTokens)],
    ]),
    Instruction()
  ),
  Footer(appTitle)
);
