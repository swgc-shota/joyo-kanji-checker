import { StreamLanguage, LanguageSupport } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { joyoKanji } from './data';

const joyoKanjiSet = new Set(joyoKanji);

const kanjiAndFluctTokenizer = (fluctSet: Set<string>) => (stream: any) => {
  const start = stream.pos;

  for (const fluct of fluctSet) {
    if (stream.match(fluct, false)) {
      stream.pos += fluct.length;
      return 'fluct';
    }
  }

  const char = stream.next();
  if (
    char &&
    /[\u{4E00}-\u{9FFF}\u{3400}-\u{4DBF}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\u{2CEB0}-\u{2EBEF}\u{30000}-\u{3134F}\u{F900}-\u{FAFF}]/u.test(
      char
    )
  ) {
    return joyoKanjiSet.has(char) ? 'joyo' : 'non-joyo';
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
      'non-joyo': t.invalid,
    },
  });

export const kanjiSupport = (fluctSet: Set<string>) => {
  return new LanguageSupport(kanjiLanguage(fluctSet));
};
