import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import ToolbarForm from "../ToolbarForm/ToolbarForm";
import ToolbarProfile from '../ToolbarProfile/ToolbarProfile';

export default function Toolbar() {
  const { token, profile } = useContext(AuthContext);
  let homeLink = '/';
  if (token) {
    homeLink = '/news';
  }

  return (
    <div className="toolbar">
      <Link to={homeLink} className="toolbar__logo">Neto Social</Link>
      {!profile && <ToolbarForm />}
      {profile && <ToolbarProfile />}
    </div>
  );
}
