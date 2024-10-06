import { StreamLanguage, LanguageSupport } from "@codemirror/language";
import { tags as t } from "@lezer/highlight";
import { joyoKanji } from "./data";

const joyoKanjiSet = new Set(joyoKanji);

const kanjiAndFluctTokenizer = (fluctSet: Set<string>) => (stream: any) => {
  const start = stream.pos;

  for (const fluct of fluctSet) {
    if (stream.match(fluct, false)) {
      stream.pos += fluct.length;
      return "fluct";
    }
  }

  const char = stream.next();
  if (char && /[\u4E00-\u9FFF]/.test(char)) {
    return joyoKanjiSet.has(char) ? "joyo" : "non-joyo";
  }

  stream.pos = start + 1;
  return null;
};

const kanjiLanguage = (fluctSet: Set<string>) =>
  StreamLanguage.define({
    token: kanjiAndFluctTokenizer(fluctSet),
    tokenTable: {
      fluct: t.emphasis,
      joyo: t.keyword,
      "non-joyo": t.invalid,
    },
  });

export const kanjiSupport = (fluctSet: Set<string>) => {
  return new LanguageSupport(kanjiLanguage(fluctSet));
};
