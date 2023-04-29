import { React, useState } from 'react';
import useBreakpoint from '../../../hooks/user-breakpoint';
import { Link } from 'react-router-dom';

export default function Navigation({ children }) {
    const [sidenavOpen, setSidenavOpen] = useState(true)
    const size = useBreakpoint()
    const isMobile = (["xs", "sm", "md"]).includes(size)
    const mainClass = (sidenavOpen && !isMobile ? "col-lg-9 col-md-8 col-sm-12" : "col-12") + " py-3 main"
    const sidebarClass = " col-lg-3 col-md-4 col-sm-10 bg-white sidebar py-3 " + (sidenavOpen ? "" : "d-none") + (isMobile ? " mobile-sidebar " : "")

    return (
        <div className="apc admin-container-holder container-fluid .bg-f1f5f9">
            <div className="row">
                {
                    isMobile && sidenavOpen && <div className="overlay" onClick={() => setSidenavOpen(!sidenavOpen)}></div>
                }
                <aside className={sidebarClass}>
                    <div className="sidebar-inner bg-white box-bd p-3">
                        <hr />
                        <h1 className="text-center mb-3"><img src="/logo512.png" alt="" className="logo" />&nbsp;Aone</h1>
                        <hr />
                        {/* <p className="text-center text-secondary">Hi Mike {String(isMobile)}</p>
                        <hr /> */}
                        <ul className="list-group">
                            {isMobile && sidenavOpen && (<li className="list-group-item">
                                <Link to="#" className="nav-link" onClick={() => setSidenavOpen(!sidenavOpen)}><i className="fa fa-arrow-left"></i>&nbsp;Close Menu</Link>
                            </li>)}
                            <li className="list-group-item">
                                <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Dashboard</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="#" className="nav-link"><i className="fa fa-list"></i>&nbsp;Modules <i className="float-end fa fa-caret-down"></i></Link>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="#" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Inner</Link>
                                        <ul className="list-group">
                                        <li className="list-group-item">
                                            <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</Link>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to="/admin" className="nav-link"><i className="fa fa-dashboard"></i>&nbsp;Deep Inner</Link>
                                        </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <Link to="/admin/users" className="nav-link"><i className="fa fa-user-group"></i>&nbsp;Users</Link>
                            </li>
                        </ul>
                        <hr />
                        <ul className='list-group'>
                            <li className="list-group-item">
                                <Link to="/admin/settings" className="nav-link"><i className="fa fa-gear"></i>&nbsp;Settings</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to="/logout" className="nav-link"><i className="fa fa-sign-out"></i>&nbsp;Logout</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main className={mainClass}>
                    <div className="mx-1">
                        <div className="row bg-white mb-5 box-bd ">
                        <nav className="col-12 p-3">
                            <div className="row">
                            <div className="col-12">
                                <button className="btn btn-primary px-3 menu-btn" onClick={() => setSidenavOpen(!sidenavOpen)}><i className="fa fa-bars"></i>&nbsp;Menu</button>&nbsp;Navbar
                            </div>
                            </div>
                        </nav>
                        </div>
                        <div className="row">
                        {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}