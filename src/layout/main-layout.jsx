import React from "react";
import Menu from "../components/ui/menu/Menu";
import SideDrawer from "../components/ui/sidedrawer/main-drawer"
import "./main-layout.css";
import  SideDrawerContext from "../context/sidedrawer";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <div className="mainContentWrapper">
      <SideDrawerContext.Provider value={{showSideDrawer: true}}>
      <SideDrawer />
      </SideDrawerContext.Provider>
        <main>
        {children}
      </main>
      </div>
    </div>
  );
}
