import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TransitionContext } from './TransitionScreen';
import '../styles/pages/Page404.scss';

export default function Page404() {
  const { onLoad } = useContext(TransitionContext);

  useEffect(() => onLoad(), []);

  return (
    <div className="flex-center full-height">
      <div id="page-404">
          <h1>404.</h1>
          <h3>That page cannot be found.</h3>
          <NavLink to='/'>Go back?</NavLink>
      </div>
    </div>
  );
}
