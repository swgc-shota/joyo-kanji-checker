import { StreamLanguage, LanguageSupport } from "@codemirror/language";

import { tags as t } from "@lezer/highlight";

const MAX_LINE_LENGTH = 50;

const optionTokenizer = (stream: any) => {
  if (stream.match(/^\s*$/)) {
    stream.skipToEnd();
    return null;
  }

  if (stream.sol()) {
    if (stream.match(/^# /)) {
      stream.skipToEnd();
      return "comment";
    }

    const line = stream.string.slice(stream.pos);
    if (line.length > MAX_LINE_LENGTH) {
      stream.skipToEnd();
      return "error";
    }
  }

  stream.skipToEnd();
  return "fluct";
};

const optionLanguage = StreamLanguage.define({
  token: optionTokenizer,
  tokenTable: {
    comment: t.comment,
    fluct: t.content,
    error: t.invalid,
  },
});

export const optionSupport = () => {
  return new LanguageSupport(optionLanguage);
};
