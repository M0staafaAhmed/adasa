import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Layer({data}) {
  return (
    <>
      <Navbar data={data} />
      <Outlet />
      <Footer data={data}/>
    </>
  )
}
