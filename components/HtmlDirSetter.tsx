"use client";

import { useEffect } from "react";

interface Props {
  lang: string;
  dir: "ltr" | "rtl";
  fontClass: string;
}

export default function HtmlDirSetter({ lang, dir, fontClass }: Props) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
    html.setAttribute("data-font", fontClass);
  }, [lang, dir, fontClass]);

  return null;
}
