import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router";

function searchPage(loc,pattern){
let a=loc.search(pattern)
return a
}
export default  function Header( {clickLoad}) {
  let location=useLocation()
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            StarWars
          </Link>
        </div>

        <div className="nav nav-tabs">
          <NavLink onClick={clickLoad} className={searchPage(location.pathname,'planets')===1?'active nav-link':'nav-link'} to="/planets/1"  >
            Planets
          </NavLink>
          <NavLink onClick={clickLoad} className={searchPage(location.pathname,'people')===1?'active nav-link':'nav-link'} to='/people/1' >
            Characters
          </NavLink>
          <NavLink onClick={clickLoad} className={searchPage(location.pathname,'films')===1?'active nav-link':'nav-link'} to="/films" >
            Films
          </NavLink>
          <NavLink onClick={clickLoad} className={searchPage(location.pathname,'starships')===1?'active nav-link':'nav-link'} to="/starships/1" >
            Starships
          </NavLink>
          <NavLink onClick={clickLoad} className={searchPage(location.pathname,'species')===1?'active nav-link':'nav-link'} to="/species/1" >
            Species
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

