import React from "react";
// components
import SidebarComponent from "components/toolbars/SidebarComponent";
// framer
import { motion } from "framer-motion";

function BasicLayout(props) {
  const { route } = props;

  const vairants = {
    pageInitial: {
      opacity: 0.4,
    },
    pageAnimate: {
      opacity: 1,
    },
    pageExit: {
      backgroundColor: "white",
      filter: `invert()`,
      opacity: 0,
    },
  };

  return (
    <>
      <div className="page-layout">
        <aside className="site-sidebar">
          <SidebarComponent />
        </aside>
        <main className="site-main">
          <motion.div
            key={route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={vairants}
          >
            {props.children}
          </motion.div>
        </main>
      </div>
    </>
  );
}

export default BasicLayout;
