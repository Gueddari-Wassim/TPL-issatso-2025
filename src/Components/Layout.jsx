import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavBar />
       <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}
