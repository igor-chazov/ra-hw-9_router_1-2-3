import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import NewsList from '../NewsList/NewsList';
import NewsView from '../NewsView/NewsView';
import Page404 from '../Page404/Page404';
import Welcome from '../Welcome/Welcome';
import LoadResources from '../LoadResources/LoadResources';

export default function RouteWrapper() {
  const { token } = useContext(AuthContext);
  const [isSrcLoaded, setIsSrcLoaded] = useState(false);

  return (
    <Router>
      <div className="page-authentication">
        {isSrcLoaded ? null : <LoadResources setIsSrcLoaded={setIsSrcLoaded} />}
        {token &&
          <Routes>
            <Route path="/" element={<Navigate replace to="/news" />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:id" element={<NewsView />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        }
        {!token &&
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        }
      </div>
    </Router>
  );
}
