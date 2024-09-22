"use client";

import { Provider } from "react-redux";
import rootStore from ".";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={rootStore}>{children}</Provider>;
}
