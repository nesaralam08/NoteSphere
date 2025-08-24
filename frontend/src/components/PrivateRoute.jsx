import {handleError} from '../utils/ReactToast'
import React, { useEffect } from 'react';
import { useNavigate,} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PageLoading from './PageLoading';

function PrivateRoute({ Component }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading ,user } = useAuth0();
  useEffect(() => { 
    if (!isAuthenticated && !isLoading) {
      handleError("Login Now");
      navigate('/');
    }
  }, [isAuthenticated,navigate,isLoading]);

  return isAuthenticated ? <Component /> : <PageLoading/>;
}

export default PrivateRoute