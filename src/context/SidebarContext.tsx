import React, { useState, createContext } from "react";

type Context = {
    sidebarOpen: boolean,
    setSidebarOpen: (prev: boolean) => void,
}

export const SidebarContext = createContext<Context>({
    sidebarOpen: false,
    setSidebarOpen: (_) => {}
});

type Props = {
  children: React.ReactElement;
};

export const SidebarProvider = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
