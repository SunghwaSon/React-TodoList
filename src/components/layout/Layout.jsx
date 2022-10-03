import React from "react";
import "./style.css";

function Layout({Children}) {
  return (
    <div className='layout'>
      {Children}
    </div>
  );
}

export default Layout;
