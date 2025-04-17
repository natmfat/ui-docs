"use client";

import { useState } from "react";

export const useScrollData = () => {
  const [scroll, setScroll] = useState({ atTop: true, atBottom: false });

  return {
    scroll,
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const el = e.target as HTMLDivElement;
      setScroll({
        atTop: el.scrollTop < 1,
        atBottom: el.scrollHeight - el.scrollTop - el.clientHeight < 1,
      });
    },
  };
};
