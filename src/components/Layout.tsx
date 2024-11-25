import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div className="layout__container">
        <main className="layout__main">
          <Navigation />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
