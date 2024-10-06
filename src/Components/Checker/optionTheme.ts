import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";
import { myLightTheme, myDarkTheme } from "./themes";

const lightHighlightStyle = HighlightStyle.define([
  { tag: t.comment, color: "#808080", fontStyle: "italic" },
  { tag: t.content, color: "#000000" },
  { tag: t.invalid, color: "#FF0000", textDecoration: "underline wavy" },
]);

const darkHighlightStyle = HighlightStyle.define([
  { tag: t.comment, color: "#808080", fontStyle: "italic" },
  { tag: t.content, color: "white" },
  { tag: t.invalid, color: "#FF0000", textDecoration: "underline wavy" },
]);

const lightHighlight = syntaxHighlighting(lightHighlightStyle);
const darkHighlight = syntaxHighlighting(darkHighlightStyle);

export const optionLightTheme = [myLightTheme, lightHighlight];
export const optionDarkTheme = [myDarkTheme, darkHighlight];
