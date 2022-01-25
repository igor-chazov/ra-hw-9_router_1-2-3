import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function LoadResources({ setIsSrcLoaded }) {
  const [isMount, setIsMount] = useState(true);

  useEffect(() => {
    setIsSrcLoaded(true);
    setIsMount(false);
  }, [setIsSrcLoaded]);

  if (isMount) return (
    <>
      <div className={'news-view__loading _visually-hidden'}></div>
      <div className={'news-list__loading _visually-hidden'}></div>
    </>
  )

  return null;
}

LoadResources.propTypes = {
  setIsSrcLoaded: PropTypes.func.isRequired,
}

export default LoadResources
