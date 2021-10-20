import React from 'react';
import { withRouter } from 'react-router';
import { getOnePlanet, getPlanetPicture } from '../../utils';
import PageDetails from '../../components/PageDetails';





 function PlanetDetails(props){
 return(
     <PageDetails
     getOneInfo={getOnePlanet}
     infoId={props.match.params.id}
     p1='rotation_period'
     p2='orbital_period'
     p3='diameter'
     p4='climate'
     p5='gravity'
     p6='terrain'
     p7='population'
     getInfoPicture={getPlanetPicture}
     links1='residents'
     linksR1='characters'
     links2='films'
     linksR2='film'
     />
 )
 }
export default withRouter(PlanetDetails)