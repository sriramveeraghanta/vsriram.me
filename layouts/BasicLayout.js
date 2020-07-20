import React from "react";
// components
import SidebarComponent from "components/page_views/SidebarComponent";

function BasicLayout(props) {
  return (
    <>
      <div className="page-layout">
        <aside className="site-sidebar">
          <SidebarComponent />
        </aside>
        <main className="site-main">{props.children}</main>
      </div>
    </>
  );
}

export default BasicLayout;
