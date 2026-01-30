import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../../assets/logo.png'
import './Navbar.css'

export default function Navbar({data}) {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-black border-bottom border-secondary border-opacity-50">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center gap-2" to={""}>
                        <div className="nav-logo">
                            <img src={logo} alt="adasa logo" className='w-100'/>
                        </div>
                        <div>
                            <p className="fs-5 m-0 fw-bold text-white">{data.name}</p>
                            <p className="m-0 fs-12 text-prime">{data.tagline}</p>
                        </div>
                    </Link>
                    <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars text-white fs-5"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 rounded-pill border border-secondary border-opacity-50 py-1 px-2">
                            <li className="nav-item">
                                <NavLink className="nav-link rounded-pill px-3" aria-current="page" to={""}>الرئيسية</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link rounded-pill px-3" to={"blog"}>المدونة</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link rounded-pill px-3" to={"about"}>من نحن</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center gap-3">
                            <div className="search-icon rounded-3 flex-center cursor-pointer d-none d-lg-flex">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <Link to={"/blog"} className='to-blog btn rounded-pill text-white py-2 px-4 fw-bold flex-grow-1'>ابدأ القراءة</Link>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
