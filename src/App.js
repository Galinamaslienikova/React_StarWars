
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Film from './pages/Films/Films';
import Details from './pages/Films/Details';
import PeopleDetails from './pages/People/PeopleDetails';
import TitleInfo from './pages/TitleInfo/TitleInfo';
import People from './pages/People/People';
import Starships from './pages/Starships/Starships';
import ShipDetails from './pages/Starships/ShipDetails';
import Species from './pages/Species/Species';
import SpeciesDetails from './pages/Species/SpeciesDetails';
import Planets from './pages/Planets/Planets';
import PlanetDetails from './pages/Planets/PlanetDetails';
import Home from './pages/Home';
import React from 'react';


function App () {
 
  return (
    <div className='row'>
      <div style={{paddingTop:"15%"}} className='col-md-2'><TitleInfo/></div>
    <div className=' col-md-8'>
      <Router>
        <div >
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/planets/:id'>
              <ErrorBoundary>
                <Planets />
              </ErrorBoundary>
            </Route>
            <Route path="/planet/:id">
              <PlanetDetails/>
            </Route>
            <Route path="/characters/:id">
              <PeopleDetails/>
            </Route>
            <Route path="/people/:id">
              <People/>
            </Route>
            <Route path="/film/:id">
              <Details/>
            </Route>
            <Route path="/films">
              <ErrorBoundary>
              <Film/>
              </ErrorBoundary>
            </Route>
            <Route path="/starships/:page">
              <ErrorBoundary>
              <Starships/>
              </ErrorBoundary>
            </Route>
            <Route path="/ship/:id">
              <ShipDetails/>
            </Route>
            <Route path="/species/:page">
              <ErrorBoundary>
              <Species/>
              </ErrorBoundary>
            </Route>
            <Route path="/specy/:id">
              <SpeciesDetails/>
            </Route>
            <Route>
              <>
                <p>Resource Not Found</p>
                <p>
                  <Link to='/'>go Home</Link>
                </p>
              </>
            </Route>
           
          </Switch>
        </div>
      </Router>
    </div>
    <div className='col-md-2'>
    </div>
    </div>
  );
};

export default App;
