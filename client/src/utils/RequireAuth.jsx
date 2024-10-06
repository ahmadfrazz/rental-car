import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  const { user } = useSelector(state => state?.auth);

  return user.email ? (
      <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
