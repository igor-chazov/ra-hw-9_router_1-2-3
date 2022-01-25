import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import NetoSocial from "../NetoSocial/NetoSocial";
import News from '../News/News';
import links from '../utility/links';

export default function NewsList() {
  const { token } = useContext(AuthContext);

  const [data, loading] = useJsonFetch(`${links.private}/news`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    <NetoSocial>
      <div className="news-list">
        {loading && (<div className="news-list__loading"><span className="_hidden">Загрузка...</span></div>)}
        {!loading && data && (
          data.map((item) =>
            <Link
              className="news-list__link"
              key={item.id}
              to={`/news/${item.id}`}
            >
              <News data={item} />
            </Link>)
        )}
      </div>
    </NetoSocial>
  );
}
