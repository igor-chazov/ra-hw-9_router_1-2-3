import React from 'react';
import Toolbar from "../Toolbar/Toolbar";

export default function NetoSocial(props) {
  return (
    <div className="neto-social">
      <Toolbar />
      {props.children}
    </div>
  )
}
