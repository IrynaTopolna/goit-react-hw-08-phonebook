import { GlobalStyles } from './GlobalStyles';
import Layout from './Layout';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import Register from 'pages/Register';
import Login from 'pages/Login';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <p> Refreshing user...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      )}

      <GlobalStyles />
    </>
  );
}
