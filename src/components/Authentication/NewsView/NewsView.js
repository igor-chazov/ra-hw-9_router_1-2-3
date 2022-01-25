import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import useJsonFetch from '../hooks/useJsonFetch';
import NetoSocial from '../NetoSocial/NetoSocial';
import News from "../News/News";
import Page404 from '../Page404/Page404';
import links from '../utility/links';

export default function NewsView() {
  const { token } = useContext(AuthContext);
  let { id } = useParams();

  const [data, loading, error] = useJsonFetch(`${links.private}/news/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    (!error &&
      (<NetoSocial>
        {loading && (<div className="news-view__loading"><span className="_hidden">Загрузка...</span></div>)}
        {!loading && data && (
          <div className="news-view">
            <News data={data} />
          </div>
        )}
      </NetoSocial>)
    )
    ||
    (error && <Page404 />)
  )
}
