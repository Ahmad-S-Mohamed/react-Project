/*?
There Three Type of Links           
(1) a => Eternal Link = <Link  to="/html"> 
(2) Link , to="" => internal Link = <Link to="/"></Link>
(3) NavLink , to="" => internal Link + Add Class active of Link => For NavBar
*/

import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="myheader">
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">Test Project</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">learn in 1h</NavLink>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul className="sub-ul">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/css">CSS Examples</NavLink>
              </li>
              <li className="mini-projects">
                <NavLink to="/css">mini projects&nbsp; + </NavLink>
                <ul className="sub-sub-ul">
                  <li>
                    <Link to="">project 1</Link>
                  </li>
                  <li>
                    <Link to="">project 2</Link>
                  </li>
                  <li>
                    <Link to="">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    {/* to Mobile */}
      <header className="show-when-mobile ali">
      <h1>
          <Link to="/">Test Project</Link>
        </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="/html">learn in 1h</NavLink>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="/css">CSS Examples</NavLink>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <Link to="">project 1</Link>
                  </li>
                  <li>
                    <Link to="">project 2</Link>
                  </li>
                  <li>
                    <Link to="">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
