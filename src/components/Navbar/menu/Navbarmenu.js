/*import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../img/logo.png';
import './Navbarmenu.css'


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu1 = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    const toggleSubmenu2 = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
      };
      const toggleSubmenu3= () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
      };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li onClick={toggleSubmenu1} className="menu-item sub__menus__arrows" > <Link to="#"> Staff <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Development`}> Present Staff </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Past Staff </NavLink> </li>
                        </ul>
                    </li>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> General Elective Subjects </NavLink> 
                    </li>
                    <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> TEAL 2.0 Support and Development Center <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Support and Development Center </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> TEAL 2.0 Seminar Series </NavLink> </li>
                        </ul>
                    </li>
                    <li onClick={toggleSubmenu3} className="menu-item sub__menus__arrows" > <Link to="#"> Facilities <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Seminar Room 1 </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Seminar Room 2</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Seminar Room 3</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> A/V Studio </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}>EOE Perera Theater</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Conference Room </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Lecture Rooms</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Public Addressing System </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Online`}> Booking System </NavLink> </li>
                            
                        </ul>
                    </li>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Developments </NavLink> 
                    </li>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Help</NavLink> 
                    </li>
                    
                    <li className="search-bar">
                        <input type="text" placeholder="Type to search" />
                        <button>Search</button>
                    </li>
                    </ul>


                    </nav>  

                </div>   

                

        
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu*/

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import './Navbarmenu.css';
import "../../../Pages/RoutesConfig";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleClass = () => {
    setisMenu(!isMenu);
    setResponsiveclose(!isResponsiveclose);
  };

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/"></NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav">

            {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}

              {/*isResponsiveclose === true ? (
                <span className="menubar__button" onClick={toggleClass}>
                  <FiXCircle />
                </span>
              ) : (
                <span className="menubar__button" onClick={toggleClass}>
                  <FiAlignRight />
                </span>
              )*/}

              <ul className={`main-menu menu-right ${isMenu ? 'menuq2' : ''}`}>
                <li className="menu-item">
                  <NavLink exact activeClassName="is-active" onClick={toggleClass} to="/">
                    Home
                  </NavLink>
                </li>
                <li className={`menu-item sub__menus__arrows ${activeSubMenu === 1 ? 'sub__menus__Active' : ''}`}>
                  <Link to="#" onClick={() => toggleSubMenu(1)}>
                    Staff {/*<FiChevronDown />*/}
                  </Link>
                  <ul className={`sub__menus ${activeSubMenu === 1 ? 'sub__menus__Active' : ''}`}>
                    <li>
                      <NavLink onClick={toggleClass} activeClassName="is-active" to="/Development">
                        Present Staff
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleClass} activeClassName="is-active" to="/Development">
                        Past Staff
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <NavLink exact activeClassName="is-active" onClick={toggleClass} to="/Development">
                    General Elective Subjects
                  </NavLink>
                </li>
                <li className={`menu-item sub__menus__arrows ${activeSubMenu === 2 ? 'sub__menus__Active' : ''}`}>
                  <Link to="#" onClick={() => toggleSubMenu(2)}>
                    TEAL 2.0 Support and Development Center {/*<FiChevronDown />*/}
                  </Link>
                  <ul className={`sub__menus ${activeSubMenu === 2 ? 'sub__menus__Active' : ''}`}>
                    <li>
                      <NavLink onClick={toggleClass} activeClassName="is-active" to="/Development">
                        Support and Development Center
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleClass} activeClassName="is-active" to="/Development">
                        TEAL 2.0 Seminar Series
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className={`menu-item sub__menus__arrows ${activeSubMenu === 3 ? 'sub__menus__Active' : ''}`}>
                  <Link to="#" onClick={() => toggleSubMenu(3)}>
                    Facilities {/*<FiChevronDown />*/}
                  </Link>
                  <ul className={`sub__menus ${activeSubMenu === 3 ? 'sub__menus__Active' : ''}`}>
                    {/* Add submenu items for Facilities here */}
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Development`}> Seminar Room 1 </NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Development`}> Seminar Room 2</NavLink> </li>
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Development`}> Seminar Room 3</NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Development`}> A/V Studio </NavLink> </li>
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Development`}>EOE Perera Theater</NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Development`}> Conference Room </NavLink> </li>
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Development`}> Lecture Rooms</NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Development`}> Public Addressing System </NavLink> </li>
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Development`}> Booking System </NavLink> </li>
            </ul>
                </li>
                <li className="menu-item">
                  <NavLink exact activeClassName="is-active" onClick={toggleClass} to="/">
                    Developments
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink exact activeClassName="is-active" onClick={toggleClass} to="/">
                    Help
                  </NavLink>
                </li>
                <li className="search-bar">
                  <input type="text" placeholder="Type to search" />
                  <button>Search</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbarmenu;
